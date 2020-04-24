import { ethers, run } from '@nomiclabs/buidler'

const main = async () => {
  // make sure contracts are compiled
  await run('compile')

  const CONTRACT_NAME = 'Counter'

  const factory = await ethers.getContract(CONTRACT_NAME)

  const contract = await factory.deploy()

  // await run('verify-contract', `--contract-name ${CONTRACT_NAME} --address ${contract.address}`)

  console.log(CONTRACT_NAME, 'deployed at', contract.address)
  console.log('deploy tx hash:', contract.deployTransaction.hash)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
