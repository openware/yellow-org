import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
                                solution from OpenDAX v4. Yellow token has the
                                next utilities:
                            </p>

                            <ul className="tokenomics__utilities-list">
                                <li>Trading fee discount</li>
                                <li>Staking</li>
                                <li>Development governance</li>
                                <li>Participation in WASM slots auctions</li>
                            </ul>

                            <p>
                                Token will be pre-minted and distributed based
                                on the information presented on the pie chart.
                            </p>

                            <div>
                                <Link
                                    className="button button--outline button--secondary button--shadow-secondary"
                                    to="/docs/concepts/architecture"
                                >
                                    <span className="button__inner">
                                        Yellow Paper
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col col--6">
                        <img
                            className="tokenomics__pie-chart"
                            src={useBaseUrl("/img/components/tokenomics_pie_chart.png")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
