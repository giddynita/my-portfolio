import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'

const SingleNavlink = ({ id, section, href }) => {
  const { showNavMenu } = useContext(GlobalContext)
  return (
    <li
      className="after:hidden md:after:block md:after:bg-primary lg:after:hidden hover:text-primary md:hover:text-base-content/80 lg:hover:text-primary max-w-max nav-link"
      onClick={showNavMenu}
    >
      <AnchorLink href={href}>{section}</AnchorLink>
    </li>
  )
}
export default SingleNavlink
