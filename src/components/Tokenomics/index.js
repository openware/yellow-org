import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Tokenomics() {
    return (
        <div className="section section__grey" id="tokenomics">
            <div className="container tokenomics">
                <div className="row">
                    <div className="col col--6">
                        <span className="highlight subtitle-2-18-700">
                            Economy
                        </span>

                        <h4>Yellow tokenomics</h4>

                        <div className="subtitle-2-18-600">
                            <p>
                                Yellow (YEL) is a native token of the Yellow.org
                                hybrid exchange. It uses a non-custodial
                                solution based on OpenDAX v4 stack.
                            </p>

                            <p>Yellow token has the following utilities:</p>

                            <ul className="tokenomics__utilities-list">
                                <li>Trading fee discount</li>
                                <li>Staking</li>
                                <li>Development governance</li>
                                <li>Participation in WASM slots auctions</li>
                            </ul>

                            <div>
                                <Link
                                    className="button button--outline button--secondary button--shadow-secondary button--wide"
                                    to="/docs/tokenomics"
                                >
                                    <span className="button__inner">
                                        Learn more
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col col--6">
                        <LazyLoadImage className="section__main-img"
                            srcSet={`${useBaseUrl('/img/components/tokenomics_pie_chart_mobile.png')} 339w,
                                    ${useBaseUrl('/img/components/tokenomics_pie_chart.png')} 623w,
                                    ${useBaseUrl('/img/components/tokenomics_pie_chart_2x.png')} 1244w`}
                            sizes="(max-width: 425px) 339px, (max-width: 2000px) 623px, 1244px"
                            effect="blur"
                            threshold={200}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
