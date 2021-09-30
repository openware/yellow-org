import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const blocks = [
    {
        src: '/img/icons/overview-1.svg',
        text: 'A multi-asset spot trading exchange using OpenDAX, built using Open-Finance Protocol.',
    },
    {
        src: '/img/icons/overview-2.svg',
        text: 'A Layer-3 non-custodial exchange offering more transparency and security to the end-users.',
    },
    {
        src: '/img/icons/overview-3.svg',
        text: 'Yellow platform gives its users access to High-Speed Trading due to the advantages of using the Finex engine on each market.',
    },
    {
        src: '/img/icons/overview-4.svg',
        text: 'Our exchange will provide access to diverse assets. To do that we plan to use wrapped tokens managing them with state channels smart contracts.',
    },
    {
        src: '/img/icons/overview-5.svg',
        text: 'Yellow is also offering compliance to most regulations using 3rd party KYC providers and Custodians without sharing sensitive data.',
    },
    {
        src: '/img/icons/overview-6.svg',
        text: 'You can create simply various markets and trade on them on Yellow.',
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
