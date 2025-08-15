import { FaGithub } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'

export const navlinks = [
  { section: 'hero', href: '#hero' },
  { section: 'about', href: '#about' },
  { section: 'skills', href: '#skills' },
  { section: 'projects', href: '#projects' },
  { section: 'contact', href: '#contact' },
]

export const filteredNavlinks = [
  { section: 'about', href: '#about' },
  { section: 'skills', href: '#skills' },
  { section: 'projects', href: '#projects' },
  { section: 'contact', href: '#contact' },
]

export const heroData = {
  name: "I'm Gideon Onita",
  profession: "I'm a React Developer",
  intro:
    'I specialize in building speed-optimized, accessible, and SEO-driven web applications that deliver exceptional user experiences.',
}

export const socials = [
  {
    id: 'github',
    icon: <FaGithub />,
    href: 'https://www.github.com/giddynita',
  },
  {
    id: 'linkedIn',
    icon: <FaLinkedinIn />,
    href: 'https://ng.linkedin.com/in/giddynita',
  },
]

export const contactInfo = [
  {
    title: 'Email',
    info: 'onitagideon30@gmail.com',
    icon: <MdEmail />,
    href: 'mailto:onitagideon30@gmail.com',
  },
  {
    title: 'Phone',
    info: '+234(0) 808-964-6300',
    icon: <MdLocalPhone />,
    href: 'tel:+2348089646300',
  },
  {
    title: 'Location',
    info: 'Osogbo, Nigeria.',
    icon: <MdLocationOn />,
    href: '',
  },
]
