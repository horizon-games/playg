const path = require("path")
const dotenv = require("dotenv")
const HDWalletProvider = require("truffle-hdwallet-provider")

const provider = network => () => {
  const envFile = path.resolve(__dirname, `config/${network}.env`)
  const envLoad = dotenv.load({ path: envFile })

  if (envLoad.error) {
    console.error(envLoad.error)
    process.exit(1)
  }
  const config = envLoad.parsed

  return new HDWalletProvider(
    config['ETH_MNEMONIC'],
    `https://${network}.infura.io/v3/${config['INFURA_API_KEY']}`
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
