import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Partners() {
    return (
        <div className="section partners">
            <div className="container">
                <h4>Partners</h4>

                <div className="row section__center">
                    <div className="section__center-img">
                        <LazyLoadImage src={useBaseUrl("/img/openware.svg")} effect="blur" threshold={200} />
                        <LazyLoadImage src={useBaseUrl("/img/kycaid.png")} effect="blur" threshold={200} />
                        <LazyLoadImage src={useBaseUrl("/img/fireblocks.svg")} effect="blur" threshold={200} />
                        <LazyLoadImage src={useBaseUrl("/img/custody_with_border.svg")} effect="blur" threshold={200} />
                    </div>
                </div>
            </div>
        </div>
    );
}
