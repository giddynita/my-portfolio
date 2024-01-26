import { skillSection } from '../data'
import Heading from './Heading'

const Skills = () => {
  const { sectionTitle, sectionSubtitle, skills, progress } = skillSection
  return (
    <section className="pt-14 pb-14 bg-base-200/50   section">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-sm md:max-w-screen-lg  mx-auto">
        {skills.map((skill) => {
          const { type, progress } = skill
          return (
            <div className="grid gap-2 ">
              <div className="flex justify-between">
                {type} <span>{`${progress}%`}</span>
              </div>
              <progress
                className="progress progress-primary w-full bg-base-300/75"
                value={progress}
                max="100"
              ></progress>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default Skills
