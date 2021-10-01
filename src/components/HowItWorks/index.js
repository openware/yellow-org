import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function HowItWorks() {
    return (
        <div className="section section__grey how-it-works">
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <span className="highlight">Architecture</span>
                        <h4 className="section-title">How it works?</h4>
                        <p className="section-text--smaller subtitle-2-18-700">
                            Our exchange is built on the Layer 3 scaling solution that utilizes state channels. That makes it possible to use high-performance centralized matching with trustless funds management. General process lifecycle:
                        </p>
                        <ul className="section-text subtitle-2-18-700 how-it-works__list">
                            <li>Create account</li>
                            <li>Open channel and Deposit</li>
                            <li>Trade and Transfer</li>
                            <li>Close channel and Withdraw</li>
                        </ul>
                        <Link
                            className="button button--outline button--secondary button--wide"
                            to="/docs/architecture">
                            <span className="button__inner">
                                Learn More
                            </span>
                        </Link>
                    </div>

                    <div className="col col--6">
                        <img className="how-it-works__img-desktop" src={useBaseUrl('/img/components/how_it_works.png')} />
                        <img className="how-it-works__img-mobile" src={useBaseUrl('/img/components/how_it_works_mobile.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
}
