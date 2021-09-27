import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Instagram from './socials/Instagram';
import Twitter from './socials/Twitter';
import MEMBERS from './members';

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
    const [hoverId, setHoverId] = useState(-1);

    const style = (id, image) => {
        if (hoverId === id) {
            return {
                backgroundImage: "linear-gradient(0deg, #090909 0%, rgba(9, 9, 9, 0) 100%), url(" + useBaseUrl(`/img/photos/${image || 'anonymous.png'}`) + ")",
            }
        } else {
            return {
                backgroundImage: "url(" + useBaseUrl(`/img/photos/${image || 'anonymous.png'}`) + ")",
            }
        }
    };

    return (
        <div className="section section__dark" id="team">
            <div className="container team">
                <div className="row section__center">
                    <h4 className="section-title">Team</h4>
                    <div className="team__grid-xl">
                        {TEAM_HEADLINERS.map(i => (
                            <div key={i.name} className="grid__item">
                                <img className="mb-24" src={useBaseUrl(`/img/photos/${i.photo || 'anonymous.png'}`)} />
                                <div className="space-between">
                                    <span className="h7">{i.name}</span>
                                    {i.socials.length ? (
                                        <div className="icon__group">
                                            {i.socials.map((s, i) => (
                                                <Link key={i.toString()} to={s.link}>
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
                    <div className="team__grid-xs">
                        {MEMBERS.map((i, id) => (
                            <Link
                                key={i.name}
                                onMouseEnter={() => setHoverId(id)}
                                onMouseLeave={() => setHoverId(-1)}
                                style={style(id, i.image)}
                                to={i.link}
                                className="grid__item"
                            >
                                {i.link ? <img className="mb-24 grid__item-icon" src={useBaseUrl('/img/icons/linkedin.svg')} /> : null}
                                <div className="grid__item-text">
                                    <p className="body-1-16-700">{i.name}</p>
                                    <p className="captions-12-600">{i.position}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
