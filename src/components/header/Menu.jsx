import { navlinks } from '../../data'
import { useContext } from 'react'
import { GlobalContext } from '../../assets/globalContext'

import MenuLink from './MenuLink'

const Menu = () => {
  const { menu, menuRef } = useContext(GlobalContext)

  return (
    <div
      className="md:hidden origin-top shadow-lg absolute top-full left-0 w-full transition-transform text-secondary-foreground bg-secondary"
      style={{ transform: menu ? 'scaleY(1)' : 'scaleY(0)' }}
      ref={menuRef}
    >
      <ul className="flex flex-col capitalize text-center w-full">
        {navlinks.map((navlink) => {
          return <MenuLink key={navlink.section} {...navlink} />
        })}
      </ul>
    </div>
  )
}
export default Menu
