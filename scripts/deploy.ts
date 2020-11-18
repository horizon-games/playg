import { ethers, run, network } from 'hardhat'
import { registerDeployment } from './registry'

import {Counter__factory} from '../typings/contracts/factories/Counter__factory'

const main = async () => {
  // make sure contracts are compiled
  await run('compile')

  console.log('deploying to ... ', network.name)

  const signer = ethers.provider.getSigner()

  const contractFactory = new Counter__factory(signer)

  const contract = await contractFactory.deploy()
  
  registerDeployment(contract, 'Counter', network.name)
  
  try {
    await contract.deployed()
  } catch (error) {
    console.log('Failed to deploy in TX:', error.transactionHash)
    throw error
  }
  

  // await run('verify-contract', `--contract-name ${CONTRACT_NAME} --address ${contract.address}`)

  console.log('deployed at', contract.address)
  console.log('deploy tx hash:', contract.deployTransaction.hash)

  console.log('Functions:', contractFactory.attach(contract.address).functions)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
