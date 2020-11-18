import * as dotenv from 'dotenv'
import * as path from 'path'
import { HttpNetworkConfig } from 'hardhat/types'

type EthereumNetworksTypes =
  | 'mainnet'
  | 'rinkeby'
  | 'ropsten'
  | 'kovan'
  | 'goerli'

type EnvironmentTypes = 'dev' //| 'stg' | 'prod'

export const networkConfig = (
  network: EthereumNetworksTypes,
  env: EnvironmentTypes
): HttpNetworkConfig => {
  const envFile = path.resolve(__dirname, `../config/${env}.env`)
  const envLoad = dotenv.config({ path: envFile })

  if (envLoad.error) {
    throw new Error(envLoad.error.message)
  }

  const config = envLoad.parsed

  if (!config) {
    throw new Error(`unable to load config: ${env}`)
  }

  const networkConfig: HttpNetworkConfig = {
    url: `https://${network}.infura.io/v3/${config['INFURA_API_KEY']}`,
    accounts: {
      mnemonic: config['ETH_MNEMONIC'],
      initialIndex: 0,
      count: 10,
      path: `m/44'/60'/0'/0`
    },
    gas: "auto",
    gasPrice: "auto",
    gasMultiplier: 1,
    timeout: 20000,
    httpHeaders: {}
  }

  return networkConfig
}
