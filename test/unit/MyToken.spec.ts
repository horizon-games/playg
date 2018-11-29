import * as ethers from 'ethers'

import { AbstractContract, expect, BigNumber } from '../utils'
import * as utils from '../utils'

import { MyToken } from '../../typings/contracts/MyToken'

// init test wallets from package.json mnemonic
const web3 = (global as any).web3

const {
  wallet: ownerWallet,
  provider: ownerProvider,
  signer: ownerSigner
} = utils.createTestWallet(web3, 0)

const {
  wallet: aliceWallet,
  provider: aliceProvider,
  signer: aliceSigner
} = utils.createTestWallet(web3, 1)


contract('MyToken', (accounts: string[]) => {

  let ownerAddress: string
  let aliceAddress: string
  // let bobAddress: string

  let myTokenAbstract: AbstractContract
  let myTokenContract: MyToken

  let ownerMyToken: MyToken
  let aliceMyToken: MyToken

  // load contract abi and deploy to test server
  // @ts-ignore
  before(async () => {
    // ETH account address of the wallet
    ownerAddress = await ownerWallet.getAddress()
    aliceAddress = await aliceWallet.getAddress()    

    myTokenAbstract = await AbstractContract.fromArtifactName('MyToken')
    myTokenContract = (await myTokenAbstract.deploy(ownerWallet)) as MyToken

    ownerMyToken = myTokenContract.connect(ownerSigner) as MyToken // not necessary, but more explicit
    aliceMyToken = myTokenContract.connect(aliceSigner) as MyToken
  })

  describe('MyToken', () => {

    it('ensure ownerAddress and aliceAddress are differet', async () => {
      expect(ownerAddress).to.be.not.eql(aliceAddress)
    })

    it('returns correct symbol', async () => {
      const symbol = await myTokenContract.functions.symbol()
      expect(symbol).to.be.eql('MYT')
    })

    it('owner has entire initial supply', async () => {
      const ownerTokenBalance = await ownerMyToken.functions.balanceOf(ownerAddress)
      const mytInitSupply = await myTokenContract.functions.INITIAL_SUPPLY()
      expect(ownerTokenBalance).to.be.eql(mytInitSupply)
    })

    it('check: alice attempting to mint tokens, but rejected', async () => {
      const miscAddress = '0x813Af5ba100Cc30b6813feFebF97A4476FfF92c8'

      let balance = await ownerMyToken.functions.balanceOf(miscAddress)
      expect(balance).to.be.eql(new BigNumber(0))

      const tx = aliceMyToken.functions.mint(miscAddress, 100)
      await expect(tx).to.be.rejected

      balance = await ownerMyToken.functions.balanceOf(miscAddress)
      expect(balance).to.be.eql(new BigNumber(0))
    })

    it('owner mints tokens for alice', async () => {
      let balance = await ownerMyToken.functions.balanceOf(aliceAddress)
      expect(balance).to.be.eql(new BigNumber(0))

      const tx = ownerMyToken.functions.mint(aliceAddress, 100)
      await expect(tx).to.be.fulfilled

      balance = await ownerMyToken.functions.balanceOf(aliceAddress)
      expect(balance).to.be.eql(new BigNumber(100))
    })

    it('alice transfers tokens to another account', async () => {
      const miscAddress = '0x813Af5ba100Cc30b6813feFebF97A4476FfF92c8'

      const tx = aliceMyToken.functions.transfer(miscAddress, 50)
      await expect(tx).to.be.fulfilled

      let aliceBalance = await aliceMyToken.functions.balanceOf(aliceAddress)
      expect(aliceBalance).to.be.eql(new BigNumber(50))

      let miscBalance = await aliceMyToken.functions.balanceOf(miscAddress)
      expect(miscBalance).to.be.eql(new BigNumber(50))

    })

  })
})
