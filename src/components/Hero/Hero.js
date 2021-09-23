import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './Hero.module.css';
import Link from '@docusaurus/Link';

export default function Hero() {
    const {siteConfig} = useDocusaurusContext();

    return (
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className="row">
                    <div className="col col--7">
                        <h4 className={styles.heroText}>{siteConfig.tagline}</h4>
                        <p className={clsx('h8', styles.heroText, styles.heroDescription)}>
                            Yellow is a new generation hybrid exchange combining the best of decentralized and centralized performance.
                        </p>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary margin-right--md"
                                to="/docs/overview/what-is-xln">
                                <span className="button__inner">Docs</span>
                            </Link>
                            <Link
                                className="button button--outline button--secondary"
                                to="https://twitter.com/yellow_defi">
                                <span className="button__inner">
                                    <img src={useBaseUrl('/img/icons/twitter.svg')} className={styles.twitterIcon} />
                                    Follow us
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="col col--5">

                    </div>
                </div>
            </div>
      </header>
    );
}
