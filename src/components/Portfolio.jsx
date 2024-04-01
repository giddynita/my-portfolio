import Heading from './Heading'
import SingleProject from './SingleProject'
import { useLoaderData } from 'react-router-dom'

const Portfolio = () => {
  const { response } = useLoaderData()
  const contentItems = response.items.map((content) => {
    const { framework, github, preview, image, title } = content.fields
    const id = content.sys.id
    const img = image?.fields?.file?.url
    return {
      id,
      framework,
      github,
      preview,
      img,
      title,
    }
  })
  const projects = contentItems.filter((items) => items.preview !== undefined)

  return (
    <section id="portfolio" className="pt-14 pb-14 section m-auto bg-base-100 ">
      <Heading sectionTitle="portfolio" sectionSubtitle="My Projects" />
      <ul className=" grid gap-8  sm:grid-cols-2 xl:grid-cols-3 max-w-screen-sm md:max-w-screen-xl mx-auto">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />
        })}
      </ul>
    </section>
  )
}
export default Portfolio
