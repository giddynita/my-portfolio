import { nanoid } from 'nanoid'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import picture from './assets/images/image.jpg'

export const navlinks = [
  { id: nanoid(), section: 'home', href: '#landing' },
  { id: nanoid(), section: 'about me', href: '#about' },
  { id: nanoid(), section: 'skills', href: '#skills' },
  { id: nanoid(), section: 'portfolio', href: '#portfolio' },
  { id: nanoid(), section: 'reviews', href: '#reviews' },
  { id: nanoid(), section: 'blog', href: '#blog' },
  { id: nanoid(), section: 'contact', href: '#contact' },
]

export const socials = [
  {
    id: nanoid(),
    icon: <FaFacebookF />,
    href: 'https://www.facebook.com',
  },
  {
    id: nanoid(),
    icon: <FaInstagram />,
    href: 'https://www.instagram.com',
  },
  {
    id: nanoid(),
    icon: <FaTwitter />,
    href: 'https://www.twitter.com',
  },
  {
    id: nanoid(),
    icon: <FaLinkedinIn />,
    href: 'https://www.linkedin.com',
  },
]
export const hero = {
  h1: 'Welcome',
  name: "I'm Gideon Onita",
  profession: "I'm a Front-end Developer",
  location: 'based in Lagos, Nigeria.',
  aboutBtn: 'About Me',
}
export const aboutSection = {
  sectionTitle: 'about me',
  sectionSubtitle: 'know me more',
  profile: {
    iam: "I'm",
    name: 'gideon onita,',
    profession: 'a Front-end Developer.',
  },
  img: picture,
  title: 'Gideon Onita',
  about:
    "Web development is my passion, and I am commited to creating user-friendly, accessible, and responsive web experience. As a ReactJs expert, I aim to continuing satisfying clients with exceptional results as I'm constantly pushing the boundaries of what's possible with this framework.",
}
export const skillSection = {
  sectionTitle: 'skills',
  sectionSubtitle: 'my expertise',
  skills: [
    { id: nanoid(), type: 'HTML5/CSS3', progress: '98' },
    { id: nanoid(), type: 'Tailwind CSS', progress: '90' },
    { id: nanoid(), type: 'JavaScript ES6+', progress: '85' },
    { id: nanoid(), type: 'React JS', progress: '95' },
    { id: nanoid(), type: 'Responsive Design', progress: '100' },
    { id: nanoid(), type: 'Git', progress: '80' },
    { id: nanoid(), type: 'Figma', progress: '90' },
  ],
}
export const portfolioSection = {
  sectionTitle: 'portfolio',
  sectionSubtitle: 'my projects',
}
export const reviewsSection = {
  sectionTitle: 'reviews',
  sectionSubtitle: 'clients feedback',
}
