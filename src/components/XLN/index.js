import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const blocks = [
    {
        src: '/img/icons/liquidity.svg',
        title: 'Liquidity',
        text: 'Our technology is unlocking the liquidity of different blockchains and exchanges to the network of Finex nodes',
    },
    {
        src: '/img/icons/security.svg',
        title: 'Security',
        text: 'We use state channel protocols that give you off-chain performance while relying on the security of blockchain technology',
    },
    {
        src: '/img/icons/speed.svg',
        title: 'Speed',
        text: 'Thanks to strategy embedding technology that enables Ultra HFT, Finex nodes can sell slots for embedded strategy.',
    },
    {
        src: '/img/icons/compliance.svg',
        title: 'Compliance',
        text: 'While keeping our network decentralized, we provide tools for Finex nodes to become compliant with their local regulation.',
    },
];

export default function XLN() {
    return (
        <div className="section section__dark">
            <div className="container">
                <div className="row">
                    <div className="col col--5">
                    </div>
                    <div className="col col--7">
                        <span className="highlight">Features</span>
                        <h4 className="section-title">What is XLN?</h4>
                        <p className="h8 section-text--smaller subtitle-2-18-600">
                            XLN is a network of Finex nodes that use a unified communication protocol.
                            The main target of the network is to interconnect different blockchains
                            unlocking access to liquidity with the layer of decentralized exchanges.
                        </p>
                        <div className="blocks">
                            {blocks.map(i => {
                                return (
                                    <div className="icon-block">
                                        <img className="icon-block__img" src={useBaseUrl(i.src)} />
                                        <div className="subtitle-1-20-600 icon-block__title">{i.title}</div>
                                        <p className="icon-block__text">{i.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
