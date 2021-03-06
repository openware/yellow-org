---
sidebar_position: 3
---

# What is Custody.org?

[Custody.org](https://custody.org) is a redesigned cryptoassets custody inventory and KYC providers network.

## What do we do

The main approach of its working mechanism is aimed at processing with Wrapped tokens (like WBTC for BTC, WETH for ETH, etc.) with the Standard Asset Conversion API (Custody). At the same time, we consider using an option to sign the private certificates in order to get the data certificate of the provider on demand (same as it is implemented for signing NFT smart contracts). This way we achieve the KYC-certified deposit/withdrawal system.

## Are my assets safe?

Yes! Connecting via a verified crypto gateway like [MetaMask](https://metamask.io/) the user's deposit goes to a safe cold-wallet of one of our certified provider partners (like [Fireblocks](https://www.fireblocks.com/)). The user is operating just with the Wrapped tokens thus their assets are secured with due to this 2nd layer which is implemented in our OpenDAX v4 deposit/withdrawal system.

## More details

We are using cross-chain bridges for Wrapped tokens, and since pay-channel smart contracts are operating with trade-channel smart contracts on the 2nd layer — this way the user has access to numerous of actual 'market pairs' state channels. 
>View the [list](https://custody.org) of supported crypto bridges (WBTC-BTC, WDOT-DOT, etc.)
<!--- FIXME: a relevant link is expected. --->
Conversion of the asset to the Wrapped version and vise versa is automatized while the liquidity of the assets is provided by our partners.


For KYC purposes, the wallet address is associated to a 3rd party wallet. It is important to notice that the KYC level information in this iteration doesn't disclose the sensitive data like Country identity, the related metadata stays confidential information. Considering the usage of web3 protocol, we provide ERC-tokens for attaching the KYC to the wallet. As soon as KYC-only part is passed — the user receives their specific token and is able to send it to another user.

As soon as the pay of fee is confirmed, the integrated partner will sign the certificate, and it will be moved to 'ACCEPTED' state.
<!--- FIXME: (we explain how to create certificate/Could be attachable as NFT - Link here). --->

Custody.org carries the idea of having CUS — an incentive token for Custodian and KYC providers.



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


