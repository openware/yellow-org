import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Roadmap() {
    return (
        <div id="roadmap" className="section roadmap" id="roadmap">
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <div className="roadmap-left">
                            <span className="highlight">Roadmap</span>
                            <h4 className="section-title">Product first</h4>
                            <div className="roadmap-text">
                                <p className="section-text subtitle-2-18-700">
                                    Strategy and long-term planning steps to the future of digital exchange.
                                    <br />Get familiarized with our route and don’t hesitate to become our like-minded strategic partner.
                                </p>
                                <p className="section-text--smaller subtitle-2-18-700">
                                    Yellow Team
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col col--6">
                        <img src={useBaseUrl('/img/components/roadmap.png')} className="roadmap__img-desktop section__main-img" />
                        <img src={useBaseUrl('/img/components/roadmap_mobile.svg')} className="roadmap__img-mobile" />
                    </div>
                </div>
            </div>
        </div>
    );
}
