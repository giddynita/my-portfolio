import { nanoid } from 'nanoid'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import picture from './assets/images/giddynita.jpg'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'
import { DiGithubBadge } from 'react-icons/di'
import { RiTwitterXFill } from 'react-icons/ri'
import { TiSocialLinkedin } from 'react-icons/ti'
import { IoShareSocial } from 'react-icons/io5'
import css from './assets/images/css.png'
import figma from './assets/images/figma.png'
import git from './assets/images/git.png'
import html from './assets/images/html.png'
import javascript from './assets/images/javascript.png'
import react from './assets/images/react.png'
import tailwind from './assets/images/tailwind.png'
import nextjs from './assets/images/nextjs.png'
import redux from './assets/images/redux.png'
import typescript from './assets/images/typescript.png'
import react_query from './assets/images/react_query.png'

export const navlinks = [
  { id: nanoid(), section: 'about', href: '#about' },
  { id: nanoid(), section: 'skills', href: '#skills' },
  { id: nanoid(), section: 'projects', href: '#projects' },
  { id: nanoid(), section: 'reviews', href: '#reviews' },
  { id: nanoid(), section: 'contact', href: '#contact' },
]

export const socials = [
  {
    id: nanoid(),
    icon: <FaGithub className="w-6 h-6" />,
    href: 'https://www.github.com/giddynita',
  },
  {
    id: nanoid(),
    icon: <FaLinkedinIn className="w-6 h-6" />,
    href: 'https://ng.linkedin.com/in/giddynita',
  },
]
export const hero = {
  name: "I'm Gideon Onita",
  profession: "I'm a React Developer",
  intro:
    'I specialize in building speed-optimized, accessible, and SEO-driven web applications that deliver exceptional user experiences.',
  aboutBtn: 'Get in Touch',
  projectBtn: 'View My Work',
}
export const aboutSection = {
  name: 'Gideon Onita',
  profession: 'React Developer',
  img: picture,
  essay: [
    'My work combines technical precision with an understanding of user needs, ensuring that every project is not only visually appealing but also functional and ready for future use.',
    'I have developed applications that featured secure authentication, payment processing, advanced search and filtering, real-time updates, role-based access control, interactive dashboards, analytics integration, content management systems, and cross-browser compatibility. Every feature is thoughtfully integrated to work seamlessly together, enhancing both usability and business impact.',
    'My toolkit includes React, Next.js, TypeScript, styling frameworks, UI component libraries, Redux, and tools for handling API data. I also implement CI/CD pipelines, automated testing, and performance optimization to ensure that every solution is robust, maintainable, and scalable.',
    'Beyond technical execution, I recognize that great products result from effective collaboration. I work closely with designers, backend engineers, and project stakeholders to ensure that each solution aligns with brand goals, user needs, and market demands.',
    "If you need a developer who can build a platform from the ground up, add advanced functionality to an existing site, or optimize a web application for speed and scalability, let's connect as I bring a strategic, detail-oriented approach to every project.",
  ],
}
export const skills = [
  { id: nanoid(), logo: html, title: 'HTML5', level: 'Advanced' },
  { id: nanoid(), logo: css, title: 'CSS', level: 'Advanced' },
  { id: nanoid(), logo: tailwind, title: 'Tailwind CSS', level: 'Advanced' },
  {
    id: nanoid(),
    logo: javascript,
    title: 'JavaScript ES6+',
    level: 'Proficient',
  },
  { id: nanoid(), logo: typescript, title: 'Typescript', level: 'Proficient' },
  { id: nanoid(), logo: react, title: 'React', level: 'Advanced' },
  { id: nanoid(), logo: redux, title: 'Redux Toolkit', level: 'Advanced' },
  { id: nanoid(), logo: react_query, title: 'React Query', level: 'Advanced' },
  { id: nanoid(), logo: nextjs, title: 'Next JS', level: 'Proficient' },
  { id: nanoid(), logo: git, title: 'Git', level: 'Proficient' },
  { id: nanoid(), logo: figma, title: 'Figma', level: 'Advanced' },
]

export const contactInfo = [
  {
    id: nanoid(),
    title: 'Address:',
    info: 'Plot 132, Ayodele Odubiyi Street, Lekki Phase 1, Lekki, Lagos.',
    icon: <MdLocationOn />,
    href: '',
  },
  {
    id: nanoid(),
    title: 'Mail:',
    info: 'onitagideon30@gmail.com',
    icon: <MdEmail />,
    href: 'mailto:onitagideon30@gmail.com',
    social1: '',
    social2: '',
    social3: '',
    href1: '',
    href2: '',
    href3: '',
  },
  {
    id: nanoid(),
    title: 'Phone:',
    info: '+234 808 964 6300',
    icon: <MdLocalPhone />,
    href: 'tel:+2348089646300',
    social1: '',
    social2: '',
    social3: '',
    href1: '',
    href2: '',
    href3: '',
  },
  {
    id: nanoid(),
    title: 'Socials:',
    icon: <IoShareSocial />,
    info: '',
    href: '',
    social1: <DiGithubBadge />,
    social2: <RiTwitterXFill />,
    social3: <TiSocialLinkedin />,
    href1: 'https://www.github.com/giddynita',
    href2: 'https://www.twitter.com/giddynita',
    href3: 'https://ng.linkedin.com/in/gideon-onita',
  },
]
