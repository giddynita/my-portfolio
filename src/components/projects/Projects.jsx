import Heading from '../global/Heading'
import SingleProject from './SingleProject'
import { useProjectsContent } from '../../hooks'
const Projects = () => {
  const { data: projects } = useProjectsContent()

  return (
    <section id="projects" className="pt-[80px] container ">
      <Heading sectionTitle="Featured Projects" />
      <ul className="space-y-20">
        {projects?.map((project, index) => {
          return (
            <SingleProject
              key={project.title}
              project={project}
              index={index}
            />
          )
        })}
      </ul>
    </section>
  )
}
export default Projects
