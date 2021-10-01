---
sidebar_position: 3
---

# What is Custody.org?

Custody. org is a redesigned Cryptoassets custody inventory + a KYC provider network.

## What do we do

Main approach of it's working mechanism is aimed on processing with Wrapped tokens (like WBTC for BTC, WETH for ETH etc) with the Standard Asset Conversion API (Custody). At the same time we consider using an option to sign the private certificates in order to get the data certificate of provider on demand (same as it is implemented for signing NFT smart contracts). This way we achieve the KYC-certified deposit/withdrawal system.

## Are my assets safe?

Yes! Connecting via verified crypto gateway like MetaMask the user's deposit goes to a safe cold-wallet of one of our certified provider partners (like Fireblocks). The user is operating just with the Wrapped tokens thus his assets are secured with due to this 2nd layer which is implemented in our OpenDAX v4 deposit/withdrawal system.

## More details

We are using cross-chain bridges for Wrapped tokens, and since pay-channel smart contracts are operating with trade-channel smart contracts on the 2nd layer - this way the user has an access to numerous of actual 'market pairs' state channels. List of the supported crypto bridges (WBTC-BTC, WDOT-DOT etc). Conversion of the asset to the Wrapped version and vise versa is automatized while the liquidity of the assets is provided by our partners.
<!--- FIXME: you can find here (link is expected). --->

For KYC purposes the wallet address is associated to a 3rd party wallet. It is important to notice that the KYC level information in this iteration doesn't disclose the sensitive data like Country identity, the related metadata stays as a confidential information. Considering the usage of web3 protocol we provide ERC-tokens for attaching the KYC to the wallet. As soon as KYC-only part is passed - the user receives his specific token and is able to send it to another user.

As soon as the pay of fee is confirmed the integrated partner will sign the certificate and it will be moved to 'ACCEPTED' state.
<!--- FIXME: (we explain how to create certificate/Could be attachable as NFT - Link here). --->

Custody.org carries an idea of having CUS - incentive token for Custodian and KYC Provider.



import Mermaid from '@theme/Mermaid';

<Mermaid chart='
sequenceDiagram
autonumber
User-->Metamask: connected
User->>+Custody: Send BTC
Custody->>-Fireblocks: Send BTC
Fireblocks->>+Fireblocks: Storing BTC on a cold wallet
Fireblocks-->>-Custody: status: collected
Custody->>+KYC partner: KYC check
KYC partner-->>-Custody: status: KYC checked
Custody->>Custody: conversion BTC to WBTC
alt return the Wrapped asset to user
Custody->>Metamask: send WBTC
else use the Wrapped Asset
Custody->>State channel: Trade Channel Smart Contract
else leave Wrapped asset on Custody
Custody->>Custody: funds are secured
end
Custody-->>User: send message Success' />


