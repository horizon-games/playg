/// <reference path="./ethers.d.ts" />
import * as ethers from 'ethers'

const web3 = (global as any).web3

let provider: ethers.providers.Web3Provider | ethers.providers.JsonRpcProvider
let signer: ethers.providers.Web3Signer

// if (web3) {
  provider = new ethers.providers.Web3Provider(web3.currentProvider)
  signer = (provider as ethers.providers.Web3Provider).getSigner()
// } else {
  // provider = new ethers.providers.JsonRpcProvider('http://localhost:8545')
// }

const contract = require('../../build/contracts/SimpleStore.json')
// const contractMYT = require('../../build/contracts/MyToken.json')

// NOTE: the contract address will change during development after each truffle migration
// since contracts are immutable. This is a little bit of a pain, perhaps
// there is a kind of pipeline to help with this and dev env variable to load contract
// addresses, maybe by using ethers instead with our custom work
const simpleStore = new ethers.Contract('0x4ffb9175748a802792f41128cc4dc8b79a7e9181', contract.abi, signer)

// const myt = new ethers.Contract('0x434547ffd33905c570b7509275fe277b24e4bb53', contractMYT.abi, signer)

console.log(simpleStore)

{
  (global as any).ethers = ethers;
  (global as any).simpleStore = simpleStore;
  // (global as any).myt = myt
}

// simpleStore.setValue('ian').then(n => {
//   console.log(n)
// }).catch(err => {
//   console.log(err)
// })

simpleStore.getValue().then((n) => {
  console.log('name:', n)
}).catch((err) => {
  console.log('err', err)
})

// const storageProm = provider.getStorageAt(playg.address, 0)
// storageProm.then((result) => {
//   console.log('storageProm', result)
// })

// const code = provider.getCode(playg.address, '')
// code.then((result) => {
//   console.log('code', result)
// })

signer.getAddress().then((add) => {
  console.log(add)
})


// const address = '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'
// // first 8 nibbles of the hash of symbol()
// const data = ethers.utils.id('symbol()').substring(0, 10)
// const transaction = {
//     to: address,
//     data: data
// }

// provider.call(transaction).then((result) => {
//     console.log(result, '??')
//     console.log(ethers.utils.toUtf8String(result))
//     // '0x000000000000000000000000000000000000000000000000000000000000002'+
//     // '00000000000000000000000000000000000000000000000000000000000000002'+
//     // '434b000000000000000000000000000000000000000000000000000000000000'
// }).catch((err) => {
//   console.log('err', err)
// })
