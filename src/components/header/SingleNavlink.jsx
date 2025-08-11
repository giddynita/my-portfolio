import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'

const SingleNavlink = ({ section, href }) => {
  const { showNavMenu } = useContext(GlobalContext)
  return (
    <AnchorLink
      href={href}
      className="after:hidden md:after:block transition transition-300 md:after:bg-primary lg:after:hidden hover:text-white hover:bg-primary md:hover:bg-base-100 lg:hover:bg-base-content  md:hover:text-base-content/80 lg:hover:text-base-100 nav-link  p-1 md:p-0 lg:p-2 lg:w-32 lg:text-center rounded"
      onClick={showNavMenu}
    >
      {section}
    </AnchorLink>
  )
}
export default SingleNavlink
