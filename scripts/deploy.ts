import { ethers, run, network } from '@nomiclabs/buidler'
// import { registerDeployment } from './registry'

const main = async () => {
  // make sure contracts are compiled
  await run('compile')

  console.log('deploying to ... ', network.name)

  const CONTRACT_NAME = 'Counter'

  const factory = await ethers.getContract(CONTRACT_NAME)

  const contract = await factory.deploy()
  
  // registerDeployment(contract, CONTRACT_NAME)
  // console.log('deployment registered')
  
  try {
    await contract.deployed()
  } catch (error) {
    console.log('Failed to deploy in TX:', error.transactionHash)
    throw error
  }
  

  // await run('verify-contract', `--contract-name ${CONTRACT_NAME} --address ${contract.address}`)

  console.log(CONTRACT_NAME, 'deployed at', contract.address)
  console.log('deploy tx hash:', contract.deployTransaction.hash)
  // console.log(contract.interface)

  const tempC = new ethers.Contract(
    contract.address,
    contract.interface,
    ethers.getDefaultProvider()
  )

  console.log(tempC.functions)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
