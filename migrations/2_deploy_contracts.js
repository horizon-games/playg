const tdr = require("truffle-deploy-registry");

const ERC20 = artifacts.require("ERC20");
const ERC20Detailed = artifacts.require("ERC20Detailed");
const ERC20Mintable = artifacts.require("ERC20Mintable");

const MyToken = artifacts.require("MyToken");
const SimpleStore = artifacts.require("SimpleStore");

module.exports = function(deployer, network) {

  deploy = (artifact) => {
    deployer.deploy(artifact).then(instance => {
      deployer.link(artifact);
      if (!tdr.isDryRunNetworkName(network)) {
        return tdr.appendInstance(instance);
      }
    })
  }

  deploy(MyToken);

  deploy(SimpleStore);

};
