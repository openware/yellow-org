---
slug: Authentication with web3 – MetaMask integration in GoTrue
title: Authentication with web3 – MetaMask integration in GoTrue
author: Openware
author_title: Crypto Exchange Foundry
author_url: https://www.openware.com
author_image_url: https://hackernoon.com/_next/image?url=https%3A%2F%2Fcdn.hackernoon.com%2Fimages%2FkWCckhKo2dhtLSXtJs08lmEZhcP2-8h0369q.png&w=1920&q=75
tags: [baas-services, firebase, supabase, yellow-defi, yellow-incubator]
---

<!-- https://github.com/facebook/docusaurus/pull/2780 -->
<!-- Docusaurus uses target="_blank" for all the external links by default. To override this behaviour and open a new link on the same tab we should use html <a> tag with target="_self". -->

<p><img src="/img/components/metamask_authentification.png" alt="MetaMask" width="100%"/></p>

*Intro*

*All the industries evolving and adapt to the new challenges and market trends. The increasing number of data leaks and hack requires changes in how we authenticate and process personal data. Authentification is a big part of different products and services. The majority of them use a centralized approach for authorization and personal data management. We want to change it by putting more power into the hands of the end-user over their identity and personal data.*

## Characteristics of login with web3 wallet

Pros of web3 login:

- The account can be created just from the public address of a user.
- Unified identity among different services, no need to remember any credentials.
- Fast and unified registration and authorization processes.
- Identity is completely controlled by the end-user.

Cons of web3 login:

- A user needs to have a web3 wallet. Similar to a  case when a user needs to have an email address for registering on a website.
- Lack of adoption for registration with a web3 wallet.

## MetaMask support in GoTrue

In version four of our OpenDAX crypto exchange, we want to replace the existing email registration with a more secure and modern web3 login. We want to integrate MetaMask support in the GoTrue additionally to available registration methods. GoTrue is an open-source API product for registration and authentication.

<p><img src="/img/components/authz_architecture.png" alt="Authz with MetaMask" width="100%"/></p>

After integration, we plan to use registration with MetaMask as the main authentication mechanism in our open-source trading platform. Below you can find the proposed implementation for authentication with MetaMask integrated into the GoTrue service

*Prerequisites:*
- *A user should have installed the MetaMask browser extension*
- *A user should have an account in the Metamask browser extension*

## General implementation
#### Step 1
A user needs to connect Metamask to the website

<p><img src="/img/components/connect_metamask.png" alt="Connect MetaMask" width="100%"/></p>

#### Step 2
After connecting the frontend sends to the backend the next information:
- Address from MetaMask
- Signature type (i.e. ETH)

#### Step 3
GoTrue receives and validates address and algorithm type:
- If the address doesn’t match the algorithm, GoTrue return an error
- If the address matches the algorithm, GoTrue starts the next checks

##### Step 3.1
GoTrue checks if the address exists in the GoTrue DB:
- If the address doesn’t exist, GoTrue creates an account (with an empty email field) in the DB and associates it with the address. After that GoTrue issues challenge token (UUID v4) for the given address
- If the address is associated with an account, GoTrue retrieves the challenge token for the given key and verifies that the challenge token is not expired:
    - If expired, GoTrue generates a new challenge token and switch to Step 3
    - If not expired, switch to Step 3

#### Step 4
GoTrue sends challenge token to the frontend

#### Step 5
Frontend prompts MetaMask to the user to sign the challenge token:
- If the user doesn’t sign the challenge token he will not be able to use the platform. A token is valid for signing only for 30 min
- If the user signs the challenge token, the frontend sends a signature to GoTrue

<p><img src="/img/components/metamask_signing.png" alt="MetaMask signing" width="100%"/></p>

#### Step 6
GoTrue verifies the signature:
- GoTrue retrieves the challenge token for the given address from the user DB
- GoTrue verifies the signature of the challenge token by comparing it with the retrieved challenge token and associated address

#### Step 7
GoTrue issues and sends authorization JWT token to the user:
- That JWT is stored in the cookies
- Optionally frontend can initiate JWT token refresh

<p><img src="/img/components/authenticated.png" alt="Authenticated" width="100%"/></p>

## Authentication flow

<p><img src="/img/components/auth_flow.png" alt="Authentication flow" width="100%"/></p>

## Conclusion
We have built a proof of concept for registration and authorization in our trading platform with MetaMask. We were able to create an account and active session for the user utilizing the functionality of GoTrue and MetaMask. In the next iterations, we plan to add MetaMask registration support on tablets and mobile devices.