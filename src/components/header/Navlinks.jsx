import { navlinks } from '../../data'
import SingleNavlink from './SingleNavlink'

const Navlinks = ({ activeSection }) => {
  return (
    <ul className="hidden md:flex flex-1 justify-center flex-row gap-x-3  capitalize">
      {navlinks.map((navlink) => {
        return (
          <SingleNavlink
            key={navlink.id}
            navlink={navlink}
            activeSection={activeSection}
          />
        )
      })}
    </ul>
  )
}
export default React.memo(Navlinks)
