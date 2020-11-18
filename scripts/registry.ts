import * as ethers from 'ethers'
import * as fs from 'fs'
import { promisify } from 'util'

export const registerDeployment = async (c: ethers.Contract, name: string, network: string) => {
  promisify(fs.writeFile)(
    `./networks/${network}.json`,
    JSON.stringify(
      [
        {
          contractName: name,
          address: c.address,
          transactionHash: c.deployTransaction.hash,
          abi: c.interface
        }
      ],
      null,
      2
    ),
    { flag: 'w+' }
  )
}
