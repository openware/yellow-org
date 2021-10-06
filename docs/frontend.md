---
sidebar_position: 6
---

# Frontend

Frontend is a boilerplate client with a set of libraries that can be used for customization.

![Frontend](/img/components/frontend.png)

## Account

Users can create or restore accounts using a seed phrase. A [seed phrase](https://en.wikipedia.org/wiki/Cryptocurrency_wallet#Seed_phrases) is a set of random words used to generate private and public keys for a specific blockchain. We are planning to use a single seed phrase for address generation on different supported blockchains.

### KYC

Some Finex nodes can request users to pass KYC verification. Verification will be done by the KYC partners in the Custody.org network. After successful verification, a user will receive an NFT token that verifies their identity on the Custody.org blockchain. Custody.org blockchain will be built as a Polkadot parachain that will help to provide cross-platform compatibility for KYC certificates that will be issued in the form of an NFT token. KYC certificate doesn't store any sensitive data. If Finex nodes need to get details about specific certificate they can request information from Custody.org.

## On-Chain

Users will be able to deposit and withdraw funds using their addresses on a specific blockchain. From that point of view, it will work as a regular self-custodian wallet where the user controls a private key that allows them to send and receive transactions.

For a user to be able to trade or send payments they need to open a state channel with the Finex node. Opening and closing of a state channel happen on a blockchain where participants send a transaction with the initial state to open a state channel and a transaction with the final state to close the state channel.

The result of KYC verification is also recorded on the blockchain in the form of an NFT token transaction. Validation of KYC tokens doesn't require any writing to the blockchain.

## Off-Chain

The majority of user activities such as account creation, account recovery, authorization, and message signing happens off-chain. Trading and payment activities that are made in state channels also happen off-chain, except the opening and closing of the state channel.

Off-chain operations help to drastically improve the speed and economic effectiveness of the financial operation while keeping the security of the blockchain system.
