import Heading from '../global/Heading'
import SingleProject from './SingleProject'

const Projects = () => {
  return (
    <section id="projects" className="pt-[80px] container ">
      <Heading sectionTitle="featured projects" />
      {/* <ul className=" grid place-items-center gap-8 sm:grid-cols-2  ">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />
        })}
      </ul> */}
    </section>
  )
}
export default Projects
