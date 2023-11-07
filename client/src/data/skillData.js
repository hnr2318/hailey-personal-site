import { nanoid } from 'nanoid';
import js from "../images/jsIcon.png"
import react from "../images/reactIcon.png"
import python from "../images/pythonIcon.png"
import html from "../images/htmlIcon.png"
import sql from "../images/sqlIcon.png"
import css from "../images/cssIcon.png"
import java from "../images/javaIcon.png"
import php from "../images/phpIcon.png"
import node from "../images/nodeIcon.png"
import express from "../images/expressIcon.png"
import c from "../images/cIcon.png"
import mongo from "../images/mongoIcon.png"

const skillData = [
    {
        id: nanoid(),
        name: "JavaScript",
        level: "Proficient",
        image: {js},
        color: '#440CCD',
    },
    {
        id: nanoid(),
        name: "React",
        level: "Proficient",
        image: {react},
        color: '#440CCD',

    },
    {
        id: nanoid(),
        name: "Python",
        level: "Proficient",
        image: {python},
        color: '#440CCD',
    },
    {
        id: nanoid(),
        name: "HTML5",
        level: "Proficient",
        image: {html},
        color: '#440CCD',
    },
    {
        id: nanoid(),
        name: "SQL",
        level: "Proficient",
        image: {sql},
        color: '#440CCD',
    },
    {
        id: nanoid(),
        name: "CSS",
        level: "Advanced",
        image: {css},
        color: '#A22AFA',
    },
    {
        id: nanoid(),
        name: "Java",
        level: "Advanced",
        image: {java},
        color: '#A22AFA',
    },
    {
        id: nanoid(),
        name: "PHP",
        level: "Competent",
        image: {php},
        color: '#D07897'
    },
    {
        id: nanoid(),
        name: "Node.js",
        level: "Competent",
        image: {node},
        color: '#D07897'
    },
    {
        id: nanoid(),
        name: "Express",
        level: "Novice",
        image: {express},
        color: '#EE9E52'
    },
    {
        id: nanoid(),
        name: "C++",
        level: "Novice",
        image: {c},
        color: '#EE9E52'
    },
    {
        id: nanoid(),
        name: "MongoDB",
        level: "Novice",
        image: {mongo},
        color: '#EE9E52'
    },
];

export default skillData;
