import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Instagram from './socials/Instagram';
import Twitter from './socials/Twitter';

const TEAM_HEADLINERS = [
    {
        name: 'Alexis Yellow',
        position: 'Executive Chairman',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        photo: '',
        socials: [ { img: <Twitter />, link: 'https://twitter.com/AlexisYellow' } ],
    },
    {
        name: 'Louis Bellet',
        position: 'CEO',
        description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        photo: 'Louis.png',
        socials: [ { img: <Instagram />, link: 'https://instagram.com/crypto.kat' }, { img: <Twitter />, link: '' } ],
    },
    {
        name: 'Camille Meulien',
        position: 'CTO - Architect',
        description: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        photo: 'Camille.png',
        socials: [ { img: <Twitter />, link: '' } ],
    }
];

export default function Team() {
    return (
        <div className="section section__dark">
            <div className="container team">
                <div className="row section__center">
                    <h4 className="section-title">Team</h4>
                    <div className="team__grid-xl">
                        {TEAM_HEADLINERS.map(i => (
                            <div className="grid__item">
                                <img className="mb-24" src={useBaseUrl(`/img/photos/${i.photo || 'anonymous.png'}`)} />
                                <div className="space-between">
                                    <span className="h7">{i.name}</span>
                                    {i.socials.length ? (
                                        <div className="icon__group">
                                            {i.socials.map(s => (
                                                <Link to={s.link}>
                                                    {s.img}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                                <span className="subtitle-2-18-700 yellow mb-12">{i.position}</span>
                                <p className="body-1-16-400 grey">{i.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
