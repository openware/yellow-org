---
sidebar_position: 5
---

# Smart Contracts

**State channels**

State channel smart contracts are a set of standardized logic that allows opening standardized state channels between counterparties on different blockchains. But the first iteration of the project will support opening channels only on the single blockchain.

The logical unit of state channels is payment. Payments can be combined to create more complex business logic (i.e. trading, games, etc.). Using such architecture can help to keep smart contracts simple while moving the heavy logic inside state channels programs.

State channel has the next lifecycle:
- initialization (on-chain) - record initial states
- operating (off-chain) - send transactions
- closing (on-chain) - writing the final state to the blockchain.

![State channels](/img/components/statechannels.svg)

**Staking**

Additionally to the state channel contract, we will have a default staking contract that will be used for staking project tokens on different blockchains. The staked amount will represent the project commitment of a specific Finex node. Regular users will be able to join stating by delegating their project token to a specific Finex node.

**Governance**

In the later phases project can become self-governed with the use of the native token. Each token holder will be able to vote for project proposals. Accounts that are holding more than a specific amount of native token will be able to create a project proposal

**Smart Contracts Registry**

During the initial phases of the project, we will support a limited number of blockchains. But to diversify assets that are traded on the network, Finex nodes will be able to use wrapped tokens of popular coins from other blockchains. The system will have an official list with tokens smart contracts. Market pairs with validated tokens will have a special sign




