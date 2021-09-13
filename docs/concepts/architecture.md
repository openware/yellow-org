---
sidebar_position: 1
---

# Architecture

![Architecture](/img/components/architecture.png)

The product will consist of three main parts:

- Frontend
- Finex node
- Blockchain integrations

## Frontend

The frontend provides access to the whole network of interconnected Finex nodes. Users are node bound to one specific Finex node, they can easily create connections (state channels) with other Finex nodes on the network.

The frontend will serve as some kind of abstraction above the network layers and components. The frontend can directly interact with blockchains and with the network of Finex nodes.

## Finex node

A Finex node is a backbone component of the entire network. Those nodes have cross-blockchain integration, can communicate and connect. Each node has a matching engine that is used for trading in state channels. Finex nodes can communicate their orders with other Finex nodes to get access to shared liquidity.

By having access to blockchains, Finex nodes can also interact with different DeFi products to create new services and access liquidity for the pool when it's needed.

## Blockchain integrations

Blockchain integrations are a set of chains that are supported by the network of Finex nodes. Each integrated blockchain has a set of smart contracts that are responsible for opening and closing respective state channels. Other contracts are responsible for staking and collateral logic.

All those components will form a layer that helps to interconnect fractionated ecosystem of blockchain solutions and standardizing liquidity API between them.

