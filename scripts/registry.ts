import * as ethers from 'ethers'
import * as fs from 'fs'
import { promisify } from 'util'

export const registerDeployment = async (c: ethers.Contract, name: string) => {
  promisify(fs.writeFile)(
    `${name}.json`,
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
    )
  )
}
