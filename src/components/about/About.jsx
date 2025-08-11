import { lazy } from 'react'
import { aboutSection } from '../../data'
import Heading from '../global/Heading'
const Avatar = lazy(() => import('../global/Avatar'))

const About = () => {
  const { profile, img, name, profession, essay } = aboutSection
  return (
    <section id="about" className="py-10 container">
      <Heading sectionTitle="about me" />
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Avatar img={img} />
          <div>
            <p className="gradient-text text-2xl sm:text-3xl font-bold">
              {name}
            </p>
            <p className="font-medium sm:text-xl text-muted-foreground">
              {profession}
            </p>
          </div>
        </div>
        <ul className="flex flex-col gap-4">
          {essay.map((paragraph, index) => (
            <p key={index} className="text-sm/6 sm:text-lg/8">
              {paragraph}
            </p>
          ))}
        </ul>

        <div>
          {/* <p className="text-lg/6 my-1.5 ">{about}</p>
          <p className="text-lg/6  my-1.5">{about2}</p>
          <p className="text-lg/6  my-1.5">{about3}</p>
          <p className="text-lg/6  my-1.5">{about4}</p> */}
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
