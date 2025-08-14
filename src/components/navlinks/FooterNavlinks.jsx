import { filteredNavlinks } from '../../data'
import SingleNavlink from './SingleNavlink'

const FooterNavlinks = () => {
  return (
    <ul className="flex flex-wrap justify-center flex-row capitalize">
      {filteredNavlinks.map((navlink) => {
        return <SingleNavlink key={navlink.section} navlink={navlink} />
      })}
    </ul>
  )
}
export default FooterNavlinks
