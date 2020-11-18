import { HardhatUserConfig } from 'hardhat/config'
import { networkConfig } from './utils/configLoader'
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"

import "hardhat-gas-reporter"
import "hardhat-contract-sizer"

const config: HardhatUserConfig = {
  paths: {
    artifacts: './artifacts'
  },
  solidity: {
    version: '0.7.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    dev: networkConfig('rinkeby', 'dev'),
    ganache: {
      url: 'http://127.0.0.1:8545',
      blockGasLimit: 6000000000
    }
  },
  etherscan: {
    apiKey: ''
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  }
}

export default config
