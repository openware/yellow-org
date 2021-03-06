import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function OpenFinance() {
    return (
        <div className="section section__yellow open-finance">
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
                    <div className="section__center-img">
                        <LazyLoadImage src={useBaseUrl('/img/opendax.svg')} effect="blur" threshold={200} />
                        <LazyLoadImage src={useBaseUrl('/img/xln.svg')} effect="blur" threshold={200} />
                        <LazyLoadImage src={useBaseUrl('/img/openfinance.svg')} effect="blur" threshold={200} />
                        <LazyLoadImage src={useBaseUrl('/img/custody.svg')} effect="blur" threshold={200} />
                    </div>
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
