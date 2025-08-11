import { useContext, useEffect, useState } from 'react'
import Navlinks from './Navlinks'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { GlobalContext } from '../../assets/globalContext'
import Socials from '../global/Socials'
import ToggleMenu from './ToggleMenu'
import Menu from './Menu'
import { navlinks } from '../../data'

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('about')

  const { menu, setMenu } = useContext(GlobalContext)
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isMobile = window.innerWidth < 1024
          const currentScrollY = isMobile ? window.scrollY + 64 : window.scrollY
          navlinks.forEach(({ section }) => {
            const element = document.getElementById(section)
            if (element) {
              const offsetTop = element.offsetTop
              const offsetHeight = element.offsetHeight
              if (
                currentScrollY >= offsetTop &&
                currentScrollY < offsetTop + offsetHeight
              ) {
                setActiveSection(section)
              }
            }
          })
          if (isMobile) {
            if (currentScrollY > 150 && currentScrollY > lastScrollY) {
              setShowHeader(false), setMenu(false)
            } else {
              setShowHeader(true)
            }
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
      className={`px-[2.5%] relative flex items-center gap-6 justify-between lg:hidden  w-full fixed top-0 z-50 transition-transform transition-300 ${
        !menu && 'shadow-lg'
      }  py-4 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <h1 className="font-bold tracking-wide text-xl hover:scale-105">
        <AnchorLink href="#index" className="gradient-text">
          giddynita
        </AnchorLink>
      </h1>
      <Navlinks activeSection={activeSection} />
      <div className="flex gap-6 items-center ">
        <Socials />
        <ToggleMenu />
      </div>
      <Menu />
    </header>
  )
}
export default Header
