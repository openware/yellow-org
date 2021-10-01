import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const blocks = [
    {
        src: '/img/icons/overview-1.svg',
        text: 'Multi-asset spot trading exchange built with OpenDAX stack, based on Open-Finance Protocol.',
    },
    {
        src: '/img/icons/overview-2.svg',
        text: 'A Layer-3 non-custodial exchange offering unparalleled security and transparency for the traders.',
    },
    {
        src: '/img/icons/overview-3.svg',
        text: 'Access to Ultra-High-Speed Trading due to the advantages of having Finex nodes on each market.',
    },
    {
        src: '/img/icons/overview-4.svg',
        text: 'Wrapped tokens managed with state channel smart contracts to provide access to diverse assets.',
    },
    {
        src: '/img/icons/overview-5.svg',
        text: 'Compliance with international regulations using 3rd party KYC Providers and Custodians without sharing sensitive data.',
    },
    {
        src: '/img/icons/overview-6.svg',
        text: 'Explore, create and host various markets to trade on Yellow.',
    },
];

export default function WhatsYellow() {
    return (
        <div className="section section__dark" id="about">
            <div className="container overview">
                <div className="row section__center">
                    <div className="section-title">
                        <h4>What is</h4>
                        <img className="overview__logo" src={useBaseUrl('/img/logo-white.svg')} />
                        <h4>?</h4>
                    </div>
                    <div className="blocks">
                        {blocks.map(i => {
                            return (
                                <div key={i.src} className="icon-block">
                                    <img className="icon-block__img" src={useBaseUrl(i.src)} />
                                    <p className="subtitle-2-18-600 icon-block__text">{i.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
