require("dotenv").config()
var HDWalletProvider = require("truffle-hdwallet-provider")

const provider = network => () => {
  return new HDWalletProvider(
    process.env.ETH_MNENOMIC,
    `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
  )
}

module.exports = {
  networks: {
    ganache: {
      network_id: 127001,
      host: "127.0.0.1",
      port: 8545,
      gas: "0xfffffffffff",
      gasPrice: "0x01"
    },
    rinkeby: {
      network_id: 4,
      provider: provider('rinkeby'),
      gas: 6750000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 21,
      outputFile: "/dev/null",
      showTimeSpent: true
    }
  }
}
