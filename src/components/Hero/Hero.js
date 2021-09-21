import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary margin-right--md"
                                to="/docs/intro">
                                <span className="button__inner">Tutorial</span>
                            </Link>
                            <Link
                                className="button button--outline button--secondary"
                                to="/docs/intro">
                                <span className="button__inner">Blog</span>
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
