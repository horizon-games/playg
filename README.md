# playg

## Install

`yarn install`

## Usage (local dev)

1. First start testrpc: `yarn ganache`

2. Then compile the contracts & deploy them to the testrpc: `yarn migrate`

3. Run tests, `yarn test`


## Building a Web-Dapp :)

Building a Web-Dapp is just like writing any kind of modern webapp / SPA.
The additional work (besides writing the Ethereum contracts) is you'll need an
ethereum client that works in the browser, which we recommend ethers.js. Then
you'll need an Ethereum Wallet, which for simplicity, we recommend the
Metamask browser extension. 

Once you have Metamask installed, and you begin writing your Ethereum Dapp.

A good exercise would be to build a simple app that talks to the SimpleStore.sol
contract that is deployed to a local instance. When interfacing with your local
mock Ethereum node (aka, `yarn ganache`), you'll need to set the "network" on
Metamask to "http://localhost:8545"

Also, read the `test/` source as they will show you how to interface
with the contract via ethers.

glhf :)


## Other stuff to look at

Also look at https://github.com/horizon-games/walley and specifically
https://github.com/horizon-games/walley/blob/master/example-simple/index.html
for sample usage of Ether.js. This code will also work with Metamask or any
"web3" wallet that injects the `window.web3` proxy interface to the external
wallet.
