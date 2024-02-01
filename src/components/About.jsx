import { aboutSection } from '../data'
import Heading from './Heading'

const About = () => {
  const { sectionTitle, sectionSubtitle, profile, img, title, about } =
    aboutSection
  return (
    <section id="about" className=" pt-14 pb-14 bg-base-100 section  ">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <div className="  flex flex-col items-center md:items-start justify-center gap-4 md:gap-12 md:flex-row max-w-screen-sm md:max-w-screen-xl mx-auto">
        <figure className="rounded-md w-3/4 md:w-1/2 lg:w-1/3 ">
          <img src={img} alt={title} className="rounded-md" loading="lazy" />
        </figure>

        <div className="md:w-1/2">
          <p className="text-xl sm:text-2xl font-semibold text-center mb-5 w-3/4 mx-auto md:w-full md:text-lg">
            {profile.iam} {''}
            <span className="text-primary capitalize">{profile.name}</span> {''}
            {profile.profession}
          </p>
          <p className="text-lg leading-relaxed">{about}</p>
          <a href="/" download>
            <button
              className="bg-primary px-6 py-3 rounded-full text-white mt-5 hover:text-primary-content hover:text- text-lg cursor-not-allowed "
              disabled
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
export default About
