import { navlinks } from '../../data'
import { useContext } from 'react'
import { GlobalContext } from '../../assets/globalContext'

import MenuLink from './MenuLink'

const Menu = () => {
  const { menu } = useContext(GlobalContext)

  return (
    <div
      className="md:hidden origin-top shadow-lg absolute top-full left-0 w-full transition-transform bg-secondary text-secondary-foreground"
      style={{ transform: menu ? 'scaleY(1)' : 'scaleY(0)' }}
    >
      <ul className="flex flex-col capitalize text-center w-full">
        {navlinks.map((navlink) => {
          return <MenuLink key={navlink.id} {...navlink} />
        })}
      </ul>
    </div>
  )
}
export default Menu
