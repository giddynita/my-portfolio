import { useContext, useEffect, useState } from 'react'
import Menu from './Menu'
import Navlinks from './Navlinks'
import Socials from '../Socials'
import ToggleBtn from './ToggleBtn'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GlobalContext } from '../../assets/globalContext'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { setNavMenu } = useContext(GlobalContext)
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const isMobile = window.innerWidth < 1024
          if (isMobile) {
            if (currentScrollY > 200 && currentScrollY > lastScrollY) {
              setShowHeader(false), setNavMenu(false)
            } else {
              setShowHeader(true)
            }
          } else {
            setShowHeader(false)
          }
          setLastScrollY(currentScrollY)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  return (
    <header
      className={` text-base-content bg-base-100 navbar justify-between lg:hidden  border-b border-base-300 fixed top-0 z-50 transition transition-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <h1 className="font-bold tracking-wide text-2xl">
        <AnchorLink href="#landing">giddynita</AnchorLink>
      </h1>

      <Navlinks />
      <div className="flex gap-6 ">
        <Socials />
        <ToggleBtn />
      </div>
      <Menu />
    </header>
  )
}
export default Header
