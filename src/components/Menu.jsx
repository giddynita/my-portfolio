import { navlinks } from '../data'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Menu = () => {
  const { navMenu, showNavMenu } = useContext(GlobalContext)

  return (
    <div
      className="md:hidden nav-menu origin-top shadow-lg py-4 absolute top-full left-0 w-screen bg-base-100 "
      style={{ transform: navMenu ? 'scaleY(1)' : 'scaleY(0)' }}
    >
      <ul className="flex flex-col capitalize gap-y-1 ">
        {navlinks.map(({ id, section, href }) => {
          return (
            <li
              key={id}
              className="hover:text-primary max-w-max"
              onClick={showNavMenu}
            >
              <AnchorLink href={href}>{section}</AnchorLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Menu
