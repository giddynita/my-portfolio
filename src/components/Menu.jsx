import { sections } from '../data'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import { NavLink } from 'react-router-dom'
const Menu = () => {
  const { navMenu } = useContext(GlobalContext)

  return (
    <div
      className="md:hidden nav-menu origin-top shadow-lg py-4 absolute top-full left-0 w-screen "
      style={{ transform: navMenu ? 'scaleY(1)' : 'scaleY(0)' }}
    >
      <ul className="flex flex-col capitalize gap-y-1 bg-base-100 ">
        {sections.map(({ id, section, href }) => {
          return (
            <li key={id} className="hover:text-primary max-w-max">
              <NavLink to={href}>{section}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Menu