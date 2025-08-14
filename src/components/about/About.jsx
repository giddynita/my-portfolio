import { lazy } from 'react'
import Heading from '../global/Heading'
import { useAboutContent } from '../../hooks'
const Avatar = lazy(() => import('../global/Avatar'))

const About = () => {
  const { data: about } = useAboutContent()

  return (
    <section id="about" className=" pt-[80px] container">
      <Heading sectionTitle="about me" />
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Avatar img={about?.image?.fields?.file?.url} />
          <div>
            <h3 className="gradient-text text-2xl sm:text-3xl font-bold">
              {about?.name}
            </h3>
            <p className="font-medium sm:text-xl text-muted-foreground">
              {about?.profession}
            </p>
          </div>
        </div>
        <div className="text-sm sm:text-lg space-y-4">
          <p>{about?.firstParagraph}</p>
          <p>{about?.secondParagraph}</p>
          <p>{about?.thirdParagraph}</p>
          <p>{about?.fourthParagraph}</p>
        </div>

        {/* <a href="/" download>
            <button
              className="bg-primary px-6 py-3 rounded-full text-white mt-5 hover:text-primary-content text-lg cursor-not-allowed "
              disabled
            >
              Download CV
            </button>
          </a> */}
      </div>
    </section>
  )
}
export default About
