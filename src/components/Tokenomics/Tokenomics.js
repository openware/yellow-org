import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from '@docusaurus/useBaseUrl';

const pieChartItems = [
    {
        percent: "10%",
        tokensCount: "100 million tokens",
        title: "Development fund",
        className: "tokenomics__pie-chart--item--first",
    },
    {
        percent: "15%",
        tokensCount: "150 million tokens",
        title: "Team and founders",
        className: "tokenomics__pie-chart--item--second",
    },
    {
        percent: "25%",
        tokensCount: "250 million tokens",
        title: "Investors",
        className: "tokenomics__pie-chart--item--third",
    },
    {
        percent: "50%",
        tokensCount: "500 million tokens",
        title: "Community",
        className: "tokenomics__pie-chart--item--fourth",
    },
];

export default function Tokenomics() {
    return (
        <div className="section section--grey">
            <div className="container tokenomics">
                <div className="row">
                    <div className="col col--6">
                        <span className="subtitle-with-bg-primary subtitle-2-18-700">
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
                                    to="/docs/overview/what-is-xln"
                                >
                                    <span className="button__inner">
                                        Yellow Paper
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col col--6 tokenomics__pie-chart">
                        <img src={useBaseUrl('/img/components/tokenomics_pie_chart.png')} />

                        <div className="tokenomics__pie-chart--total-supply">
                            <span className="subtitle-2-18-400">
                                Total supply
                            </span>
                            <br />
                            <span className="subtitle-2-18-700">
                                1,000,000,000 YEL
                            </span>
                        </div>

                        {pieChartItems.map(
                            ({ percent, tokensCount, title, className }) => (
                                <div
                                    key={title}
                                    className={`tokenomics__pie-chart--item  ${className}`}
                                >
                                    <p className="h7">{percent}</p>
                                    <span className="subtitle-2-18-600">
                                        {tokensCount}
                                    </span>
                                    <br />
                                    <span className="body-1-16-400">
                                        {title}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
