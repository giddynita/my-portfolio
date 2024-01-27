import { aboutSection } from '../data'
import Heading from './Heading'

const About = () => {
  const { sectionTitle, sectionSubtitle, profile, img, title, about } =
    aboutSection
  return (
    <section
      id="about"
      className=" pt-14 pb-14 bg-base-100 section max-w-screen-sm md:max-w-screen-lg  mx-auto "
    >
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <div className="flex flex-col items-center md:items-start justify-center gap-4 md:gap-12 md:flex-row">
        <figure className="rounded-lg w-3/4 md:w-1/2">
          <img src={img} alt={title} className="rounded-lg" />
        </figure>

        <div className="md:w-1/2">
          <p className="text-xl sm:text-2xl font-semibold text-center mb-5 w-3/4 mx-auto md:w-full md:text-lg">
            {profile.iam} {''}
            <span className="text-primary capitalize">{profile.name}</span> {''}
            {profile.profession}
          </p>
          <p className="text-lg leading-relaxed">{about}</p>

          <button className="bg-primary px-6 py-3 rounded-full text-white mt-5 hover:text-primary-content hover:text- text-lg">
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}
export default About
