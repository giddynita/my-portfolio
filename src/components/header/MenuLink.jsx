import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { GlobalContext } from '../../assets/globalContext'

const MenuLink = ({ section, href }) => {
  const { handleMenu } = useContext(GlobalContext)
  return (
    <AnchorLink
      href={href}
      className=" py-4 text-sm font-medium transition-colors border-b last:border-b-0"
      onClick={handleMenu}
    >
      {section}
    </AnchorLink>
  )
}
export default MenuLink
