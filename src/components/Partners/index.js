import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Partners() {
    return (
        <div className="section partners">
            <div className="container">
                <h4>Partners</h4>

                <div className="row section__center">
                    <div className="section__center-img">
                        <img src={useBaseUrl("/img/openware.svg")} />
                        <img src={useBaseUrl("/img/kycaid.png")} />
                        <img src={useBaseUrl("/img/fireblocks.svg")} />
                        <img src={useBaseUrl("/img/custody_with_border.svg")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
