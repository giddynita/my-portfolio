import Heading from '../global/Heading'
import SingleProject from './SingleProject'

const Portfolio = ({ response }) => {
  const contentItems = response?.items.map((content) => {
    const { preview, image, title } = content.fields
    const id = content.sys.id
    const img = image?.fields?.file?.url
    return {
      id,
      preview,
      img,
      title,
    }
  })
  const projects = contentItems.filter((items) => items.preview !== undefined)

  return (
    <section id="portfolio" className="py-12 section m-auto bg-base-100 ">
      <Heading sectionTitle="my recent works" />
      <ul className=" grid place-items-center gap-8 sm:grid-cols-2  ">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />
        })}
      </ul>
    </section>
  )
}
export default Portfolio
