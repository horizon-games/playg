usePlugin("buidler-gas-reporter")

module.exports = {

  defaultNetwork: 'ganache',

  networks: {
    ganache: {
      url: 'http://127.0.0.1:8545',
      chainId: 1270001
    }
  },

  solc: {
    version: '0.5.17',
    optimizer: { enabled: true, runs: 100000 }
  },

  paths: {
    artifacts: './build/artifacts',
    cache: './build/cache'
  },

  gasReporter: {
    currency: 'USD',
    gasPrice: 10
  }

};
