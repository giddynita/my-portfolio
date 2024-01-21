import { nanoid } from 'nanoid'
import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export const sections = [
  { id: nanoid(), section: 'home', href: '/#home' },
  { id: nanoid(), section: 'about me', href: '/#about me' },
  { id: nanoid(), section: 'service', href: '/#skills' },
  { id: nanoid(), section: 'portfolio', href: '/#portfolio' },
  { id: nanoid(), section: 'blog', href: '/#blog' },
  { id: nanoid(), section: 'contact', href: '/#contact' },
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
export const myself = ['Gideon Onita', 'Front-end Developer', 'Freelancer']
