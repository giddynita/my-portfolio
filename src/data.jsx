import { nanoid } from 'nanoid'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import picture from './assets/images/image.jpg'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'
import { DiGithubBadge } from 'react-icons/di'
import { RiTwitterXFill } from 'react-icons/ri'
import { TiSocialLinkedin } from 'react-icons/ti'
import { IoShareSocial } from 'react-icons/io5'

export const navlinks = [
  { id: nanoid(), section: 'home', href: '#landing' },
  { id: nanoid(), section: 'about me', href: '#about' },
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
  name: "I'm Gideon Onita",
  profession: "I'm a Front-end Developer",
  location: 'based in Lagos, Nigeria.',
  aboutBtn: 'Contact Me',
}
export const aboutSection = {
  profile: {
    iam: "I'm",
    name: 'gideon onita,',
    profession: 'a Front-end Developer.',
  },
  img: picture,
  title: 'Gideon Onita',
  about:
    "Web development is my passion, and I am commited to creating user-friendly, accessible, and responsive web experience. As a React Js expert, I aim to continuing satisfying clients with exceptional results as I'm constantly pushing the boundaries of what's possible with this framework.",
}
export const skills = [
  { id: nanoid(), type: 'HTML5/CSS3', progress: '98', level: 'Advanced' },
  { id: nanoid(), type: 'Tailwind CSS', progress: '90', level: 'Advanced' },
  {
    id: nanoid(),
    type: 'JavaScript ES6+',
    progress: '85',
    level: 'Proficient',
  },
  { id: nanoid(), type: 'React JS', progress: '95', level: 'Advanced' },
  {
    id: nanoid(),
    type: 'Responsive Design',
    progress: '100',
    level: 'Advanced',
  },
  { id: nanoid(), type: 'Git', progress: '80', level: 'Proficient' },
  { id: nanoid(), type: 'Figma', progress: '90', level: 'Advanced' },
  {
    id: nanoid(),
    type: 'Accessibility',
    progress: '70',
    level: 'Proficient',
  },
]

export const contactInfo = [
  {
    id: nanoid(),
    title: 'Address:',
    info: 'Plot 132, Ayodele Odubiyi Street, Lekki Phase 1, Lekki, Lagos',
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
    title: 'Social:',
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
