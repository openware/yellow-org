import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import LazyLoad from 'react-lazyload';

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
                        <LazyLoad once>
                            <picture>
                                <source media="(min-width: 426px)" srcSet={useBaseUrl('/img/components/roadmap.png')} />
                                <source media="(max-width: 425px)" srcSet={useBaseUrl('/img/components/roadmap_mobile.svg')} />
                                <img className="section__main-img" src={useBaseUrl('/img/components/roadmap.png')} />
                            </picture>
                        </LazyLoad>
                    </div>
                </div>
            </div>
        </div>
    );
}
