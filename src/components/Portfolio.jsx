import Heading from './Heading'
import { portfolioSection } from '../data'
import SingleProject from './SingleProject'

const Portfolio = ({ projects }) => {
  const { sectionTitle, sectionSubtitle } = portfolioSection

  return (
    <section id="portfolio" className="pt-14 pb-14 section m-auto bg-base-100 ">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <ul className=" grid gap-8  sm:grid-cols-2 xl:grid-cols-3 max-w-screen-sm md:max-w-screen-xl mx-auto">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />
        })}
      </ul>
    </section>
  )
}
export default Portfolio
