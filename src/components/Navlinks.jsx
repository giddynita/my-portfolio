import { navlinks } from '../data'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navlinks = () => {
  return (
    <ul className="hidden md:flex flex-row gap-x-3 lg:gap-y-1 capitalize lg:flex-col lg:items-center">
      {navlinks.map(({ id, section, href }) => {
        return (
          <li
            key={id}
            className="md:hover:after:bg-primary lg:after:hidden  md:hover:text-neutral-500 lg:hover:text-primary hover:text-primary max-w-max nav-link"
          >
            <AnchorLink href={href}>{section}</AnchorLink>
          </li>
        )
      })}
    </ul>
  )
}
export default Navlinks
