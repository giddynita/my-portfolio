import { navlinks } from '../../data'
import SingleNavlink from '../SingleNavlink'

const Navlinks = () => {
  return (
    <ul className="hidden md:flex flex-row gap-x-3 lg:gap-y-1 capitalize lg:flex-col lg:items-center">
      {navlinks.map((navlink) => {
        return <SingleNavlink key={navlink.id} {...navlink} />
      })}
    </ul>
  )
}
export default Navlinks
