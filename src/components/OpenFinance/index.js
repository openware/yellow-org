import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import LazyLoad from 'react-lazyload';

export default function OpenFinance() {
    return (
        <div className="section section__yellow">
            <div className="container">
                <div className="row section__center">
                    <h4 className="section-title">Open Finance Ecosystem</h4>
                    <p className="h8 section-text">
                        We joined the Open Finance Ecosystem to support
                        initiatives of the new financial layer. The goal of Open
                        Finance Protocol is to define a new communication
                        standard for emerging financial services. Applying Open
                        Finance standards in financial products makes the system
                        more inclusive and diversified.
                    </p>
                    <LazyLoad once offset={200}>
                        <div className="section__center-img">
                            <img src={useBaseUrl('/img/opendax.svg')} />
                            <img src={useBaseUrl('/img/xln.svg')} />
                            <img src={useBaseUrl('/img/openfinance.svg')} />
                            <img src={useBaseUrl('/img/custody.svg')} />
                        </div>
                    </LazyLoad>
                    <Link
                        className="button button--secondary"
                        to="https://t.me/yellow_org">
                        <span className="button__inner">Join us</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
