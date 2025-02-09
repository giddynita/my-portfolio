import { nanoid } from 'nanoid'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import picture from './assets/images/image.jpg'
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
  /* { id: nanoid(), section: 'home', href: '#landing' }, */
  { id: nanoid(), section: 'about', href: '#about' },
  { id: nanoid(), section: 'skills', href: '#skills' },
  { id: nanoid(), section: 'portfolio', href: '#portfolio' },
  { id: nanoid(), section: 'reviews', href: '#reviews' },
  { id: nanoid(), section: 'contact', href: '#contact' },
]

export const socials = [
  {
    id: nanoid(),
    icon: <FaGithub />,
    href: 'https://www.github.com/giddynita',
  },
  {
    id: nanoid(),
    icon: <FaXTwitter />,
    href: 'https://www.twitter.com/giddynita',
  },
  {
    id: nanoid(),
    icon: <FaLinkedinIn />,
    href: 'https://ng.linkedin.com/in/gideon-onita',
  },
]
export const hero = {
  h1: 'Welcome',
  name: 'I am Gideon Onita',
  profession: 'I am a Front-end Developer',
  location: 'based in Lagos, Nigeria.',
  aboutBtn: 'Contact Me',
}
export const aboutSection = {
  profile: {
    iam: 'I am',
    name: 'Gideon onita,',
    profession: 'a Front-end Developer.',
  },
  img: picture,
  title: 'Gideon Onita',
  about:
    "Turning pixels into interactive and dynamic experiences is what I love. I'm all about building websites that are not just functional but also delightful to use.",
  about2:
    "Fundamentally, I'm committed to clean code, intuitive design, and endless possibilities of the web. Whether it's crafting a sleek user interface, optimizing for performance, or ensuring cross-browser compatibility, I take pride in every detail. At core of my work, collaboration is key - I enjoy working closely with designers, backend developers, and stakeholders to bring ideas to life.",
  about3:
    "Beyond coding, I'm also a fashion enthusiast, deeply inspired by the creativity and self-expression it embodies.This interest fuels my appreciation for aesthethics, attention to detail, and innovative thinking - qualities I bring to every project I work on.",
  about4:
    "Are you a client with a vision or a developer looking to collaborate? Let's connect. I'd love to hear from you.",
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
