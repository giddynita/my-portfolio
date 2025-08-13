import Heading from '../global/Heading'
import SingleProject from './SingleProject'
import image from '../../assets/images/giddynita.jpg'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'TaskFlow Dashboard',
      description:
        'A comprehensive project management dashboard built with React, TypeScript, and a modern design system. Features real-time collaboration, drag-and-drop task management, and advanced analytics.',
      image: image,
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Socket.io',
      ],
      liveUrl: 'https://taskflow-demo.com',
      githubUrl: 'https://github.com/alexchen/taskflow',
      featured: true,
    },
    {
      id: 1,
      title: 'TaskFlow Dashboard',
      description:
        'A comprehensive project management dashboard built with React, TypeScript, and a modern design system. Features real-time collaboration, drag-and-drop task management, and advanced analytics.',
      image: image,
      technologies: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Socket.io',
      ],
      liveUrl: 'https://taskflow-demo.com',
      githubUrl: 'https://github.com/alexchen/taskflow',
      featured: true,
    },
  ]
  return (
    <section id="projects" className="pt-[80px] container ">
      <Heading sectionTitle="recent projects" />
      <ul className="space-y-20">
        {projects.map((project, index) => {
          return (
            <SingleProject key={project.id} project={project} index={index} />
          )
        })}
      </ul>
    </section>
  )
}
export default Projects
