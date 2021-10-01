---
sidebar_position: 4
title: Vision
---
import Mermaid from '@theme/Mermaid';

## Our faith

We believe decentralized services are constructing the future of trading and blockchains right now.

It’s not a blind belief, it’s a straightforward trend for overcoming the weaknesses of centralized exchanges. 

Just like the internet reached application layer-7, DeFi and blockchains will expand application layer-3 with our solution.

## What is going on

Today, trading takes place mainly on centralized exchanges. They are convenient, they provide handy features, great liquidity level. But they are going down.

Maintaining servers, wallets, connections, regulations, and so on takes more and more resources. And there are vulnerabilities at every turn that also require exponentially increasing efforts to overcome.

Meanwhile, DEX solutions have no centralized KYC records, wallets, order books. Therefore, have no corresponding vulnerabilities and spendings. So DEXs will beat CEXs as soon as DEXs will gain a decent level of liquidity and usability.

## What we are up to

We are aiming to build a solution for new-generation trading applications based on DEXs.

This solution will have user-friendly yellow.com and developer-friendly yellow.org front-end. Under the hood, it will have XLN for trading, and custody.org for decentralized KYC authentication and assets custody.

<Mermaid chart='
classDiagram
Front_end <|-- XLN
Front_end <|-- custody_org
Front_end : yellow.com
Front_end : user-friendly
Front_end: yellow.org()
Front_end: developer-friendly()
class XLN{
price feed
matching engine()
}
class custody_org{
KYC authentication partners
assets custody partners()
}' />

### Deployment

It will take munites to launch a decentralized exchange. All you need to do is connect a KYC provider via custody.org, and customize UI.

Another option: you can participate in the network and l start a Finex node. We will teach how to deploy and maintain it, how to earn shares of trade fees on the node. You will be able to run multiple markets on a node or run multiple markets.

### Network

The network will provide liquidity and price feed. It will comprise Finex nodes and its protocol will grant easy connection of external DEX solutions, for example, Uniswap, Pancake Swap, Acala, etc.

The network will reach blockchains through layer-2 state channels, that grant high trading speed and still low cost of transactions.

The solution itself will be the launchpad for new-generation DeFi applications, considered as layer-3 in DeFi universe.
Traditional financial organizations, hedge funds will be able to trade crypto the same API (FIX/Rest) and software they use for traditional assets.

### User experience

End-users will get super fast trading apps with top-level security and low fees.

And they also will provide all features as CEXs.

