import { filteredNavlinks } from '../../data'
import SingleNavlink from './SingleNavlink'

const HeaderNavlinks = ({ activeSection }) => {
  return (
    <ul className="hidden md:flex flex-1 justify-center flex-row gap-x-2  capitalize">
      {filteredNavlinks.map((navlink) => {
        return (
          <SingleNavlink
            key={navlink.section}
            navlink={navlink}
            activeSection={activeSection}
          />
        )
      })}
    </ul>
  )
}
export default HeaderNavlinks
