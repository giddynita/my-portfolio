import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { GlobalContext } from '../../assets/globalContext'

const MenuLink = ({ navlink, activeSection }) => {
  const { section, href } = navlink
  const { handleMenu } = useContext(GlobalContext)
  return (
    <li onClick={handleMenu} className="border-b last:border-b-0">
      <AnchorLink href={href}>
        <button
          className={`py-4 capitalize text-sm font-medium transition-colors  w-full cursor-pointer  transition-color duration-150 ${
            activeSection == section
              ? 'text-primary bg-background/50'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/10'
          }`}
        >
          {section}
        </button>
      </AnchorLink>
    </li>
  )
}
export default MenuLink
