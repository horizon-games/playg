import { usePlugin, BuidlerConfig } from '@nomiclabs/buidler/config'
import { networkConfig } from './utils/configLoader'

//buidler-waffle includes buidler-ethers
usePlugin('@nomiclabs/buidler-waffle')
// usePlugin("buidler-gas-reporter");
usePlugin('@nomiclabs/buidler-etherscan')

// TODO: move to config
const ETHERSCAN_API_KEY = ''

const config: BuidlerConfig = {
  solc: {
    version: '0.6.6',
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    dev: networkConfig('rinkeby', 'dev'),
    stg: networkConfig('rinkeby', 'stg'),
    prod: networkConfig('mainnet', 'prod')
  },
  etherscan: {
    url: 'https://api-rinkeby.etherscan.io/api',
    apiKey: ETHERSCAN_API_KEY
  }
}

export default config
