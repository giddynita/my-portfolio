import { skillSection } from '../data'
import Heading from './Heading'
import SingleSkill from './SIngleSkill'

const Skills = () => {
  const { sectionTitle, sectionSubtitle, skills } = skillSection
  return (
    <section id="skills" className="pt-14 pb-14 bg-base-200/50   section">
      <Heading sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-12 max-w-screen-sm md:max-w-screen-lg  mx-auto">
        {skills.map((skill) => {
          return <SingleSkill key={skill.id} {...skill} />
        })}
      </ul>
    </section>
  )
}
export default Skills
