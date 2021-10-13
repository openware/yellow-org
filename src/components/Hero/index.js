import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

export default function Hero() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className="hero hero--primary hero__banner">
            <div className="container">
                <div className="row">
                    <div className="col col--7">
                        <div className="hero-left">
                            <h4 className="hero__text">{siteConfig.tagline}</h4>
                            <p className="h8 hero__text hero__description">
                                Yellow is a new generation hybrid exchange combining the best of decentralized and centralized performance.
                            </p>
                            <div className="hero__buttons">
                                <Link
                                    className="button button--secondary margin-right--md"
                                    to="/docs/what-is-yellow">
                                    <span className="button__inner">Docs</span>
                                </Link>
                                <Link
                                    className="button button--outline button--secondary"
                                    to="https://twitter.com/yellow_defi">
                                    <span className="button__inner">
                                        <img src={useBaseUrl('/img/icons/twitter.svg')} className="button__icon-left" />
                                        Follow us
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col col--5 hero-img">
                    <img srcSet={`${useBaseUrl('/img/hero_mobile.png')} 339w,
                                ${useBaseUrl('/img/hero.png')} 516w,
                                ${useBaseUrl('/img/hero_2x.png')} 1032w`}
                        sizes="(max-width: 425px) 339px, (max-width: 2000px) 516px, 1032px"
                    />
                    </div>
                </div>
            </div>
        </header>
    );
}
