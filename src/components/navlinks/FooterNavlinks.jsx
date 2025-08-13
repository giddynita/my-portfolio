import { useMemo } from 'react'
import { navlinks } from '../../data'
import SingleNavlink from './SingleNavlink'

const FooterNavlinks = () => {
  const filteredNavlinks = useMemo(() => {
    return navlinks.map((item) => {
      if (item.section == 'index') {
        return { ...item, section: '' }
      }
      return item
    })
  }, [])
  return (
    <ul className="flex flex-wrap justify-center flex-row gap  capitalize">
      {filteredNavlinks.map((navlink) => {
        return <SingleNavlink key={navlink.section} navlink={navlink} />
      })}
    </ul>
  )
}
export default FooterNavlinks
