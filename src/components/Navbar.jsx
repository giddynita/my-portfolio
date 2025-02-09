import { useEffect, useState } from 'react'
import Menu from './Menu'
import Navlinks from './Navlinks'
import Socials from './Socials'
import ToggleBtn from './ToggleBtn'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isMobile = window.innerWidth < 1024
      if (isMobile) {
        if (currentScrollY > 200 && currentScrollY > lastScrollY) {
          setShowNavbar(false)
        } else {
          setShowNavbar(true)
        }
      } else {
        setShowNavbar(false)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])
  return (
    <nav
      className={` text-base-content bg-base-100 navbar justify-between lg:hidden  border-b border-base-300 fixed top-0 z-50 transition transition-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex gap-x-3 items-center ">
        <AnchorLink href="#landing">
          <h3 className="logo text-sky-600 font-bold tracking-wide text-2xl">
            De<span className="text-emerald-600">Coda</span>
          </h3>
        </AnchorLink>
      </div>
      <Navlinks />
      <div className="flex gap-6 ">
        <Socials />
        <ToggleBtn />
      </div>
      <Menu />
    </nav>
  )
}
export default Navbar
