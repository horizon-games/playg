import chai from 'chai'
import { solidity } from 'ethereum-waffle'

import CounterArtifact from '../artifacts/contracts/Counter.sol/Counter.json'
import { Counter } from '../typings/contracts/Counter'
import { waffle, ethers } from 'hardhat'

chai.use(solidity)
const { expect } = chai

describe('Counter',  () => {
  
  let counter: Counter
  
  beforeEach(async () => {
    let [wallet] = await ethers.getSigners()
    counter = (await waffle.deployContract(wallet, CounterArtifact)) as Counter
    const initialCount = await counter.getCount()

    expect(initialCount).to.eq(0)
    expect(counter.address).to.properAddress
  })

  it('should count up', async () => {
    await counter.countUp()
    let count = await counter.getCount()
    expect(count).to.eq(1)

    await counter.countUp()
    count = await counter.getCount()
    expect(count).to.eq(2)
  })

  it('should count down', async () => {
    await counter.countDown()
    const count = await counter.getCount()
    expect(count).to.eq(0)
  })
})
