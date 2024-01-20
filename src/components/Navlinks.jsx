import { sections } from '../data'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    <ul class="hidden md:flex flex-row gap-x-3 lg:gap-y-1 capitalize lg:flex-col">
      {sections.map(({ id, section, href }) => {
        return (
          <li
            key={id}
            class="md:hover:after:bg-primary lg:after:hidden  md:hover:text-neutral-500 lg:hover:text-primary hover:text-primary max-w-max nav-link"
          >
            <NavLink to={href}>{section}</NavLink>
          </li>
        )
      })}
    </ul>
  )
}
export default Navlinks
