---
sidebar_position: 3
---

# Finex Node

Finex node is an OpenDAX Liquidity Hub. Software that can be used by brokers to join the decentralized OpenDAX eXchange liquidity network (XLN). Finex node software has a bunch of modules: 

- OpenFinex - matching engine for state channels
- Router - helps to discover other Finex nodes and market pairs
- Blockchains - a module responsible for connection and communication with blockchains. Mainly used for closing state channels

## Setup process

A Finex node keeper needs to download the latest official release of the Finex node and install that release on the server using the official documentation. After installation, the keeper needs to go through few steps to finalize Finex node deployment:

### 1. Account creation/recovery

The keeper needs to register the Finex node in the network by creating an account or by recovering the account using a seed phrase. The account address is used as the Finex node identifier.

### 2. Currencies and pairs configuration. 

The keeper needs to configure currencies and market pairs that will be supported by that Finex node. By enabling specific currencies and pairs, the Finex node will auto fetch configs from the Currency and Market Library that is hosted on the IPFS network. Finex nodes should use unified configs to be able to communicate orders in state channels. `(Need to define configs update procedure for nodes)`

**Finex mode**

During initial setup, the keeper can select and configure the mode of the Finex node:

- Spot is the default mode of the Finex node and doesn't need additional configurations. The keeper can operate only with existing inventory in the state channel and can match orders of other counterparties.
- Futures mode also supports spot trading but the keeper needs to configure the risk level for futures
- The risk level is the total losses of the keeper account in percentages
- If the keeper risk reaches that level the system automatically liquidates the risk
- This risk is related to the open positions of the keeper (when the keeper sells something that they don’t have)
- Risk liquidation happens by closing position with the use of Uniswap

### 3. Collateral guarantee

For the keeper to be able to work with payments and match orders, they need to put funds in the collateral contract. (The size of collateral is TBD).

We need a few types of state channels:

- Backbone
- Virtual
- Payment
- Trading
- Other (channel with custom logic)

**Optional**

- The keeper can stake YEL token for benefits (TBD)
- KYC verification. The keeper can pass KYC verification to be more trusted in the network. As a result of successful KYC verification, the keeper receives the NFT token that represents their verification. NFT token doesn’t expose sensitive data about the keeper.
    