import Heading from './Heading'
import { testimonialSection } from '../data'

const Testimonials = () => {
  const { sectionTitle, sectionSubtitle } = testimonialSection

  return (
    <section id="testimonials" className="pt-14 pb-14 section m-auto ">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
    </section>
  )
}
export default Testimonials
