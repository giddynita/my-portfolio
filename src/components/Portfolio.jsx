import Heading from './Heading'
import { portfolioSection } from '../data'
/* import useFetchProjects from '../assets/reactQueryCustomHook' */
import SingleProject from './SingleProject'

const Portfolio = ({ projects }) => {
  const { sectionTitle, sectionSubtitle } = portfolioSection
  /* const { data, isLoading } = useFetchProjects()

  if (isLoading) {
    return <div>loading...</div>
  } */
  return (
    <section id="portfolio" className="pt-14 pb-14 section m-auto ">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <ul
        className=" grid gap-8  sm:grid-cols-2 xl:grid-cols-3 max-w-screen-sm md:max-w-screen-xl mx-auto" /* className=" grid gap-8 sm:grid-cols-2 md: max-w-screen-sm xl:grid-cols-3 lg:max-w-screen-xl m-auto" */
      >
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />
        })}
      </ul>
    </section>
  )
}
export default Portfolio
