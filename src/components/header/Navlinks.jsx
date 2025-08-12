import { useMemo } from 'react'
import { navlinks } from '../../data'
import SingleNavlink from './SingleNavlink'

const Navlinks = ({ activeSection }) => {
  const filteredNavlinks = useMemo(() => {
    return navlinks.map((item) => {
      if (item.section == 'index') {
        return { ...item, section: '' }
      }
      return item
    })
  }, [])
  return (
    <ul className="hidden md:flex flex-1 justify-center flex-row gap-x-3  capitalize">
      {filteredNavlinks.map((navlink) => {
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
export default Navlinks
