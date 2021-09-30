import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Community() {
    return (
        <div className="section section__yellow community">
            <div className="container">
                <div className="row section__center">
                    <h4 className="section-title">Community</h4>

                    <div className="community__socials">
                        <div className="community__socials-item">
                            <img src={useBaseUrl("/img/icons/twitter.svg")} />

                            <Link
                                className="button button--outline button--secondary button--shadow-secondary"
                                to="https://twitter.com/yellow_defi"
                            >
                                <span className="button__inner">Follow</span>
                            </Link>
                        </div>

                        <div className="community__socials-item">
                            <img src={useBaseUrl("/img/icons/telegram.svg")} />

                            <Link
                                className="button button--outline button--secondary button--shadow-secondary"
                                to="https://t.me/yellow_org"
                            >
                                <span className="button__inner">Join</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
