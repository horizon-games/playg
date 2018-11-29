import * as ethers from 'ethers'

import { AbstractContract, expect, BigNumber } from '../utils'
import * as utils from '../utils'

import { SimpleStore } from '../../typings/contracts/SimpleStore'

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


contract('SimpleStore', (accounts: string[]) => {

  let ownerAddress: string
  let aliceAddress: string
  // let bobAddress: string

  let ssAbstract: AbstractContract
  let ssContract: SimpleStore

  let ownerSimpleStore: SimpleStore
  let aliceSimpleStore: SimpleStore

  // load contract abi and deploy to test server
  // @ts-ignore
  before(async () => {
    // ETH account address of the wallet
    ownerAddress = await ownerWallet.getAddress()
    aliceAddress = await aliceWallet.getAddress()    

    ssAbstract = await AbstractContract.fromArtifactName('SimpleStore')
    ssContract = (await ssAbstract.deploy(ownerWallet)) as SimpleStore

    ownerSimpleStore = ssContract.connect(ownerSigner) as SimpleStore // not necessary, but more explicit
    aliceSimpleStore = ssContract.connect(aliceSigner) as SimpleStore
  })

  describe('SimpleStore', () => {

    it('init value', async () => {
      const value = await aliceSimpleStore.functions.getValue()
      expect(value).to.be.eql('.')
    })

    it('set/get value', async () => {
      const tx = await aliceSimpleStore.functions.setValue('alice')
      const receipt = await tx.wait(1)
      const txEvent = receipt.events!.pop()!

      expect(txEvent.event).to.be.eql('ValueChanged')
      expect(txEvent.eventSignature).to.be.eql('ValueChanged(string,string)')

      const args = txEvent.args!
      expect(args[0]).to.be.eql('.') // oldValue
      expect(args[1]).to.be.eql('alice') // newValue

      const value = await ownerSimpleStore.functions.getValue()
      expect(value).to.be.eql('alice')
    })

  })
})
