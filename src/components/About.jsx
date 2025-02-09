import { aboutSection } from '../data'
import Heading from './Heading'

const About = () => {
  const { profile, img, title, about, about2, about3, about4 } = aboutSection
  return (
    <section id="about" className="py-12 bg-base-100 text-base-content section">
      <Heading sectionTitle="about me" sectionSubtitle="Know Me More" />
      <div className="  flex flex-col items-center md:block justify-center gap-4 mx-auto">
        <figure>
          <img
            src={img}
            alt={title}
            className="rounded-full w-36 h-36 md:float-left md:mr-10 md:mb-6"
            loading="lazy"
          />
        </figure>
        <div>
          <p className="text-xl sm:text-2xl font-semibold text-center md:text-start  mb-5 w-3/4 mx-auto md:w-full md:pt-4 md:mb-3 md:text-lg">
            {profile.iam}
            <span className="text-primary capitalize"> {profile.name}</span>
            <span> {profile.profession}</span>
          </p>
          <p className="text-lg/6 my-1.5 ">{about}</p>
          <p className="text-lg/6  my-1.5">{about2}</p>
          <p className="text-lg/6  my-1.5">{about3}</p>
          <p className="text-lg/6  my-1.5">{about4}</p>
          {/* <a href="/" download>
            <button
              className="bg-primary px-6 py-3 rounded-full text-white mt-5 hover:text-primary-content text-lg cursor-not-allowed "
              disabled
            >
              Download CV
            </button>
          </a> */}
        </div>
      </div>
    </section>
  )
}
export default About
