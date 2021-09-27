import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Roadmap() {
    return (
        <div id="roadmap" className="section roadmap">
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <div className="roadmap-left">
                            <span className="highlight">Roadmap</span>
                            <h4 className="section-title">Product first</h4>
                            <div className="roadmap-text">
                                <p className="section-text subtitle-2-18-700">
                                    Here you can witness our pending steps to the final moment of glory.
                                    <br />
                                    Get familiarized with our route and be ready to become our like-minded business partner.
                                </p>
                                <p className="section-text--smaller subtitle-2-18-700">
                                    Yellow.org team
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col col--6">
                        <img src={useBaseUrl('/img/roadmap.svg')} className="roadmap-img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
