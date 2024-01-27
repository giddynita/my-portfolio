import { navlinks } from '../data'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'

import SingleNavlink from './SingleNavlink'

const Menu = () => {
  const { navMenu } = useContext(GlobalContext)

  return (
    <div
      className="md:hidden nav-menu origin-top shadow-lg py-4 absolute top-full left-0 w-screen bg-base-100 "
      style={{ transform: navMenu ? 'scaleY(1)' : 'scaleY(0)' }}
    >
      <ul className="flex flex-col capitalize gap-y-1 ">
        {navlinks.map((navlink) => {
          return <SingleNavlink key={navlink.id} {...navlink} />
        })}
      </ul>
    </div>
  )
}
export default Menu
