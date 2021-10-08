import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const blocks = [
    {
        src: '/img/icons/features-1.png',
        title: 'Non-Custodial',
        text: 'Instead of transferring your assets to the Exchange, like old-school CEX, you enable a Metamask connection. Your funds are secured using a multi-signature smart contract on the blockchain. You can fully audit the assets held by the exchange anytime.',
        link: '/docs/smart-contracts',
        linkText: 'Explore State channels',
    },
    {
        src: '/img/icons/features-2.png',
        title: 'Access to Market pairs',
        text: 'We understand how important it is to have stable access to different Market pairs, despite the blockchain technologies that are used for their maintenance. Thus we operate with Wrapped tokens (WBTC for BTC as an example) which provide us with flexibility and operational speed for various markets.',
        link: '/docs/smart-contracts',
        linkText: 'Explore State channels',
    },
    {
        src: '/img/icons/features-3.png',
        title: 'Information security',
        text: 'It is vital to secure personal data in the era of hacks and leaks. We don’t share any transaction details or sensitive information about the Platform user except what is mandatory, KYC level, in this case. This way your personal information is safe and transactional privacy is respected.',
        link: '/docs/smart-contracts',
        linkText: 'Explore State channels',
    },
    {
        src: '/img/icons/features-4.png',
        title: 'High-speed trading',
        text: 'Built on top of the XLN protocol, yellow has deep liquidity and tight spread while enabling traditional market-making and high-frequency trading.',
        link: '/docs/what-is-xln',
        linkText: 'Explore XLN',
    },
];

export default function FeaturesOfYellow() {
    return (
        <div className="section">
            <div className="container features">
                <div className="row section__center">
                    <div className="section-title">
                        <h4>Features of</h4>
                        <img className="overview__logo" src={useBaseUrl('/img/logo-black.svg')} />
                    </div>
                    <div className="blocks">
                        {blocks.map(i => {
                            return (
                                <div key={i.src} className="icon-block">
                                    <LazyLoadImage className="icon-block__img" src={useBaseUrl(i.src)} effect="blur" threshold={200} />
                                    <div className="h8 icon-block__title">{i.title}</div>
                                    <p className="body-2-16-400 icon-block__text">{i.text}</p>
                                    {/* <Link className="body-1-16-700 icon-block__link" to={i.link}>{i.linkText} <i className="arrow-right" /></Link> */}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
