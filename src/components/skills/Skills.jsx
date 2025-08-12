import { skills } from '../../data'
import Heading from '../global/Heading'
import EachSkill from './EachSkill'

const Skills = () => {
  return (
    <section id="skills" className=" pt-[80px] container">
      <Heading sectionTitle="my skills" />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <EachSkill key={skill.category} {...skill} />
        })}
      </ul>
    </section>
  )
}
export default Skills
