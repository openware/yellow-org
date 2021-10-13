import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function HowItWorks() {
    return (
        <div className="section section__grey how-it-works">
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <span className="highlight">Architecture</span>
                        <h4 className="section-title">How does it work?</h4>
                        <p className="section-text--smaller subtitle-2-18-700">
                            Yellow is built on the Layer-3 scaling solution that
                            utilizes state channel technology. That makes it
                            possible to use high-performance centralized
                            matching with trustless funds management.
                            <br />
                            General process lifecycle:
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
                        <LazyLoadImage className="section__main-img"
                            srcSet={`${useBaseUrl('/img/components/how_it_works_mobile.png')} 339w,
                                    ${useBaseUrl('/img/components/how_it_works.png')} 624w,
                                    ${useBaseUrl('/img/components/how_it_works_2x.png')} 1248w`}
                            sizes="(max-width: 425px) 339px, (max-width: 2000px) 624px, 1248px"
                            effect="blur"
                            threshold={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
