require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider')

const provider = network => () => {
  return new HDWalletProvider(
    process.env.MNEMONIC,
    `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
  )
}

module.exports = {
  mocha: {
    useColors: true
  },
  networks: {
    mainnet: {
      provider: provider('mainnet'),
      network_id: 1,
      gas: 6750000
    },
    ropsten: {
      provider: provider('ropsten'),
      network_id: 3,
      gas: 4712433
    },
    rinkeby: {
      provider: provider('rinkeby'),
      network_id: 4,
      gas: 6750000,
    },
    rinkeby0: {
      provider: 'localhost',
      port: 8545,
      network_id: 4,
      gas: 6750000,
    },
    kovan: {
      provider: provider('kovan'),
      network_id: 5,
      gas: 4000000,
    },
    testrpc: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*',
    }
  }
};
