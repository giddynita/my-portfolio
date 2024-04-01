import { skills } from '../data'
import Heading from './Heading'
import SingleSkill from './SIngleSkill'

const Skills = () => {
  return (
    <section id="skills" className="pt-14 pb-14  bg-base-200   section">
      <Heading sectionTitle="skills" sectionSubtitle="My Expertise" />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-12 max-w-screen-sm md:max-w-screen-xl mx-auto">
        {skills.map((skill) => {
          return <SingleSkill key={skill.id} {...skill} />
        })}
      </ul>
    </section>
  )
}
export default Skills
