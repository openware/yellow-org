import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import LazyLoad from 'react-lazyload';

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
                        <LazyLoad once>
                            <picture>
                                <source media="(min-width: 426px)" srcSet={useBaseUrl('/img/components/tokenomics_pie_chart.png')} />
                                <source media="(max-width: 425px)" srcSet={useBaseUrl('/img/components/tokenomics_pie_chart_mobile.png')} />
                                <img className="section__main-img" src={useBaseUrl('/img/components/tokenomics_pie_chart.png')} />
                            </picture>
                        </LazyLoad>
                    </div>
                </div>
            </div>
        </div>
    );
}
