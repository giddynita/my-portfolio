import { skills } from '../data'
import Heading from './Heading'
import EachSkill from './EachSkill'

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-base-200 section">
      <Heading sectionTitle="my skills" sectionSubtitle="My Expertise" />
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-x-12 place-items-center skill-grid">
        {skills.map((skill) => {
          return <EachSkill key={skill.id} {...skill} />
        })}
      </ul>
    </section>
  )
}
export default Skills
