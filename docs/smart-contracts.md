---
sidebar_position: 8
---

import Mermaid from '@theme/Mermaid';

# Smart Contracts

**State channels**

State channel smart contracts are a set of standardized logic that allows opening standardized state channels between counterparties on different blockchains. The first iteration of the Yellow project will support opening channels only on the single blockchain.

The logical unit of state channels is payment. Payments can be combined to create more complex business logic (i.e. trading, games, etc.) Using such architecture can help to keep smart contracts simple while moving the heavy logic inside state channels programs.

State channel has the next lifecycle:
- initialization (on-chain) — record initial states
- operating (off-chain) — send transactions
- closing (on-chain) — writing the final state to the blockchain

<Mermaid chart='
sequenceDiagram
rect rgb(255, 255, 204)
Note over WalletA: Opening a channel
FinexA->>WalletA: createChannel()
WalletA-->>FinexA: 0xabc: opening
WalletA-->>FinexA: outbox: [mesg0]
FinexA->>FinexB: mgs0
FinexB->>WalletB: pushMesage(mgs0)
WalletB-->>FinexB: 0xabc: proposed
FinexB->WalletB: joinChannel(0xabc)
WalletB-->>FinexB: 0xabc: opening
WalletB-->>FinexB: outbox: [mesg1]
FinexB->>FinexA: mgs1
FinexA->>WalletA: pushMesage(mgs1)
WalletA-->>FinexA: 0xabc: funding
WalletA->>Chain: deposit()
Chain-->>WalletA: Deposited
Chain-->>WalletB: Deposited
WalletB->>Chain: deposit()
Chain-->>WalletA: Deposited
Chain-->>WalletB: Deposited
WalletA-->>FinexA: outbox: [mesg2]
FinexA->>FinexB: mgs2
FinexB->>WalletB: pushMesage(mgs2)
WalletB-->>FinexB: 0xabc: running
WalletB-->>FinexB: MessageQueued(msg3)
FinexB->>FinexA: mgs3
FinexA->>WalletA: pushMesage(mgs3)
WalletA-->>FinexA: 0xabc: running
end
loop [i=0...m]
Note over WalletA: Running a channel
FinexA->>WalletA: updateChannel(state-4+2i)
WalletA-->>FinexA: 0xabc: (state-4+2i)
WalletA-->>FinexA: outbox: [msg-4+2i]
FinexA->>FinexB: mgs-4+2i
FinexB->>WalletB: pushMesage(msg-4+2i)
WalletB-->>FinexB: 0xabc: (state-4+2i)
FinexB->>WalletB: joinChannel(state-5+2i)
WalletB-->>FinexB: 0xabc: (state-5+2i)
WalletB-->>FinexB: outbox: [mesg-5+2i]
FinexB->>FinexA: mesg-5+2i
FinexA->>WalletA: pushMessage(mgs-5+2i)
WalletA-->>FinexA: 0xabc: (state-5+2i)
end
rect rgb(255, 255, 204)
Note over WalletA: Closing a channel
FinexA->>WalletA: closeChannel()
WalletA-->>FinexA: 0xabc: closing
WalletA-->>FinexA: outbox: [isFinalA]
FinexA->>FinexB: isFinalA
FinexB->>WalletB: pushMesage(isFinal)
WalletB-->>FinexB: 0xabc: closed
WalletB-->>FinexB: outbox: [isFinalB]
FinexB->>FinexA: isFinalB
FinexA->>WalletA: pushMessage(isFinalB)
WalletA-->>FinexA: 0xabc: closed
WalletA->>Chain: concludePushOutcomeAndTransferAll()
Chain-->>WalletA: AllocationUpdated
Chain-->>WalletB: AllocationUpdated
end' />

**Staking**

In addition to the state channel contract, we will have a default staking contract that will be used for staking project tokens on different blockchains. The staked amount will represent the project commitment of a specific Finex node. Regular users will be able to join staking by delegating their project token to a specific Finex node.

**Governance**

In the later phases the project can become self-governed with the use of the native token. Each token holder will be able to vote for project proposals. Accounts that are holding more than a specific amount of native tokens will be able to create a project proposal.

**Smart Contracts Registry**

During the initial phases of the project, we will support a limited number of blockchains. But to diversify assets that are traded on the network, Finex nodes will be able to use wrapped tokens of popular coins from other blockchains. The system will have an official list with tokens' smart contracts. Market pairs with validated tokens will have a special sign.




