import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const LinkedinIcon = () => <img src={useBaseUrl('/img/icons/linkedin-rounded-grey.svg')} />;

export const MEMBERS = [
    {
        name: "Adrien Boiron",
        position: "BizDev",
        link: "https://www.linkedin.com/in/adrien-boiron-645a271a4/",
        image: "1.jpg",
    },
    {
        name: "Aleksandr Khlopiachyi",
        position: "Software Engineer",
        link: "https://www.linkedin.com/in/oleksandr-khlopiachyi-46218a148/",
        image: "2.jpg",
    },
    {
        name: "Alla Kravchenko",
        position: "Financial Сontroller",
        link: "https://www.linkedin.com/in/alla-kravchenko-ab842851/",
        image: "3.jpg",
    },
    {
        name: "Andrii Peresada",
        position: "Software Engineer",
        link: "https://www.linkedin.com/in/andrii-peresada-a29b411b4/",
        image: "4.jpg",
    },
    {
        name: "Danil Sizov",
        position: "Product Manager",
        link: "https://www.linkedin.com/in/danil-sizov/",
        image: "5.jpg",
    },
    {
        name: "Danylo Patsora",
        position: "Team Lead",
        link: "https://www.linkedin.com/in/danila-patsiora-b62036153/",
        image: "6.jpg",
    },
    {
        name: "Damien Soudant",
        position: "Product Manager",
        link: "https://www.linkedin.com/in/damien-soudant-a3b469105/",
        image: "7.jpg",
    },
    {
        name: "Elena Klimenko",
        position: "Executive Assistant",
        link: "https://www.linkedin.com/in/elena-klimenko-12679253/",
        image: "9.jpg",
    },
    {
        name: "Elena Prymushko",
        position: "Office manager",
        link: "",
        image: "8.jpg",
    },
    {
        name: "Ivan Osypchuk",
        position: "Business Analyst",
        link: "",
        image: "10.jpg",
    },
    {
        name: "Julia Osadcha",
        position: "Front-end Team Lead",
        link: "https://www.linkedin.com/in/julia-osadcha-61b883174/",
        image: "11.jpg",
    },
    {
        name: "Hoan My Tran",
        position: "Account Manager",
        link: "https://www.linkedin.com/in/hoan-my-tran/",
        image: "12.jpg",
    },
    {
        name: "Kateryna Prykhodko",
        position: "HR Manager",
        link: "https://www.linkedin.com/in/kateprykhodko/",
        image: "13.jpg",
    },
    {
        name: "Maksym Naichuk",
        position: "Team Lead",
        link: "https://www.linkedin.com/in/maksim-naichuk/",
        image: "14.jpg",
    },
    {
        name: "Mariia Bohinska",
        position: "Deputy COO",
        link: "https://www.linkedin.com/in/maria-boginska-977a4a99/",
        image: "15.jpg",
    },
    {
        name: "Nicolas Caiserman",
        position: "Product Manager",
        link: "https://www.linkedin.com/in/nicolascaiserman/",
        image: "16.jpg",
    },
    {
        name: "Oleksandr Koliadych",
        position: "Business Analyst",
        link: "https://www.linkedin.com/in/oleksandrkoliadych/",
        image: "17.jpg",
    },
    {
        name: "Stanislav Liutenko",
        position: "Sales Manager",
        link: "https://www.linkedin.com/in/liutenkos/",
        image: "18.jpg",
    },
    {
        name: "Valentyn Shatravenko",
        position: "Team Lead",
        link: "https://www.linkedin.com/in/valentine-shatravenko-7b9a70130/",
        image: "19.jpg",
    },
    {
        name: "Yevhen Treiher",
        position: "UX Designer",
        link: "https://www.linkedin.com/in/yevhen-treiher-9b0225137/",
        image: "20.jpg",
    },
    {
        name: "Viktoria Melnychuk",
        position: "Account Manager",
        link: "https://www.linkedin.com/in/darkalien/",
        image: "21.jpg",
    },
    {
        name: "Zhanna Kravchuk",
        position: "Sales Manager",
        link: "https://www.linkedin.com/in/zhanna-kravchuk-0a719a1a7/",
        image: "22.jpg",
    },
];

export const TEAM_HEADLINERS = [
    {
        name: "Alexis Sirkia",
        position: "Executive Chairman",
        description:
            "Alexis is a strategist, innovator, engineer, and brilliant mentor with extensive result-driven project handling experience - from launching rockets to kickstarting flourishing business venues.",
        photo: "Alexis.jpg",
        socials: [
            { img: <LinkedinIcon />, link: "https://www.linkedin.com/in/sirkia/" },
        ],
    },
    {
        name: "Louis Bellet",
        position: "CEO",
        description:
            "Louis is a genius system architect, avid entrepreneur, and experienced leader of IT projects from startup to enterprise-grade, implementing strategies and workflows that streamline business objectives.",
        photo: "Louis.png",
        socials: [
            { img: <LinkedinIcon />, link: "https://www.linkedin.com/in/louisbellet/" },
        ],
    },
    {
        name: "Camille Meulien",
        position: "CTO - Architect",
        description:
            "Camille is a master of Agile and Lean software development, High-Traffic and Big Data engineering guru, focused on aligning efficient technical solutions with business goals.",
        photo: "Camille.png",
        socials: [{ img: <LinkedinIcon />, link: "https://www.linkedin.com/in/camillemeulien/" }],
    },
    {
        name: "Sergii Kashchenko",
        position: "COO",
        description:
            "Sergii is a technology adept and inspiring leader, delivering excellence in business workflows by highlighting and empowering talent to create a strong team culture.",
        photo: "Sergii.jpg",
        socials: [{ img: <LinkedinIcon />, link: "https://www.linkedin.com/in/kashchenko/" }],
    },
];
