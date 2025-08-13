import { FaGithub } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa'
import picture from './assets/images/giddynita.jpg'
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'

export const navlinks = [
  { section: 'index', href: '#index' },
  { section: 'about', href: '#about' },
  { section: 'skills', href: '#skills' },
  { section: 'projects', href: '#projects' },
  { section: 'contact', href: '#contact' },
]

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

//contentful
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
    'I have developed applications that featured secure authentication, payment processing, advanced search and filtering, real-time updates, role-based access control, interactive dashboards, analytics integration, headless content management systems, and cross-browser compatibility. Every feature is thoughtfully integrated to work seamlessly together, enhancing both usability and business impact.',
    'My toolkit includes React, Next.js, TypeScript, styling frameworks, UI component libraries, Redux, and tools for handling API data. I also implement CI/CD pipelines, automated testing, and performance optimization to ensure that every solution is robust, maintainable, and scalable.',
    'Beyond technical execution, I recognize that great products result from effective collaboration. I work closely with designers, backend engineers, and project stakeholders to ensure that each solution aligns with brand goals, user needs, and market demands.',
    "If you need a developer who can build a platform from the ground up, add advanced functionality to an existing site, or optimize a web application for speed and scalability, let's connect as I bring a strategic, detail-oriented approach to every project.",
  ],
}

export const skills = [
  {
    category: 'Core Languages',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    category: 'Frameworks',
    technologies: ['React', 'Next.js'],
  },
  {
    category: 'UI Styling & CSS Frameworks',
    technologies: ['Tailwind CSS', 'CSS Modules'],
  },
  {
    category: 'Component Libraries ',
    technologies: ['ShadCN UI', 'Daisy UI'],
  },
  {
    category: 'API & Database Integration',
    technologies: ['REST APIs', 'React Query', 'Axios', 'Firebase', 'Supabase'],
  },
  {
    category: 'State & Data Management',
    technologies: ['Redux/Redux Toolkit', 'React Query', 'Zod'],
  },
  {
    category: 'Performance Optimization',
    technologies: ['Lighthouse', 'Core Web Vitals'],
  },
  {
    category: 'Accessibility',
    technologies: ['Lighthouse Accessibility'],
  },
  {
    category: 'SEO',
    technologies: [
      'WCAG Guidelines',
      'Server-Side Rendering',
      'Meta Tags',
      'Sitemap Generation',
    ],
  },
  {
    category: 'Testing & Quality Assurance',
    technologies: ['Jest', 'React Testing Library'],
  },
  {
    category: 'Deployment & CI/CD',
    technologies: ['GitHub', 'Netlify', 'Vercel'],
  },
]

const projects = [
  {
    title: 'giddynita',
    description:
      'Giddynita is a personal portfolio website organized into four sections—About, Skills, Projects, and Contact—designed to showcase my work and expertise.. It features intuitive navigation, smooth animations, headless CMS, and speed-optimized, accessible, SEO-friendly and responsive UI.',
    image: '',
    technologies: [
      'React JS',
      'Tailwind CSS',
      'Daisy UI',
      'React Query',
      'Contentful',
      'REST API',
      'Netlify',
      'Github',
    ],
    liveUrl: 'https://www.giddynita.netlify.app',
    githubUrl: 'https://github.com/giddynita/my-portfolio',
  },
  {
    title: 'STYLINKED',
    description:
      'Stylinked is a fashion marketplace platform where buyers discover unique items, sellers showcase their collections, and logistics partners ensure seamless delivery. It features secure authentication,role-based access control, advanced search and filtering, payment processing, account management,real-time data updates, analytics integration, advanced image handling with order preservation, and speed-optimized, accessible, SEO-friendly and responsive UI.',
    image: '',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'ShadCN UI',
      'Daisy UI',
      'Redux',
      'React Query',
      'Supabase',
      'REST APIs',
      'Netlify',
      'Github',
      'React Testing Library',
    ],
    liveUrl: 'https://www.stylinked.netlify.app',
    githubUrl: 'https://github.com/giddynita/stylinked',
  },
]
