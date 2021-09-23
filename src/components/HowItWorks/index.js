import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function HowItWorks() {
    return (
        <div className="section how-it-works">
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <span className="highlight">Architecture</span>
                        <h4 className="section-title">How it works?</h4>
                        <p className="section-text--smaller subtitle-2-18-700">
                            Our exchange is built on the Layer 3 scaling solution that utilizes state channels. That makes posible to use high-performance centralized matching with trustless funds management. General process lifecycle:
                        </p>
                        <ul className="section-text subtitle-2-18-700 how-it-works-list">
                            <li>Create account</li>
                            <li>Open channel and Deposit</li>
                            <li>Trade and Transfer</li>
                            <li>Close channel and Withdraw</li>
                        </ul>
                        <Link
                            className="button button--outline button--secondary"
                            to="https://t.me/yellow_org">
                            <span className="button__inner">
                                <img src={useBaseUrl('/img/icons/telegram.svg')} className="how-it-works-telegram-icon" />
                                Join our Telegram
                            </span>
                        </Link>
                    </div>

                    <div className="col col--6 how-it-works-img">
                        <img src={useBaseUrl('/img/how-it-works.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
}