import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function OpenFinance() {
    return (
        <div className="section section__yellow">
            <div className="container">
                <div className="row section__center">
                    <h4 className="section__center-title">Open Finance Ecosystem</h4>
                    <p className="h8 section__center-text">
                        We joined the Open Finance Ecosystem to supports initiatives
                        of the new financial layer. The aim of this movement is to define
                        a new communication standard for emerging financial services.
                        Applying those standards in our product we want to make
                        the financial system more inclusive and diversified.
                    </p>
                    <div className="section__center-img">
                        <img src={useBaseUrl('/img/opendax.svg')} />
                        <img src={useBaseUrl('/img/xln.svg')} />
                        <img src={useBaseUrl('/img/openfinance.svg')} />
                        <img src={useBaseUrl('/img/custody.svg')} />
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
