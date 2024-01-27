import Heading from './Heading'
import { portfolioSection } from '../data'
import useFetchProjects from '../assets/reactQueryCustomHook'
import SingleProject from './SingleProject'

const Portfolio = () => {
  const { sectionTitle, sectionSubtitle } = portfolioSection
  const { data } = useFetchProjects()
  return (
    <section id="portfolio" className="pt-14 pb-14">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <ul>
        {data.map((project) => {
          return <SingleProject key={project.id} {...project} />
        })}
      </ul>
    </section>
  )
}
export default Portfolio
