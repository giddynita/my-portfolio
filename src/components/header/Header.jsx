import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import Navlinks from './Navlinks'
import { GlobalContext } from '../../assets/globalContext'
import Socials from '../global/Socials'
import ToggleMenu from './ToggleMenu'
import { navlinks } from '../../data'
import Logo from './Logo'
const Menu = lazy(() => import('./Menu'))

const Header = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('index')

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
              } else {
                setActiveSection('index')
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
      className={`fixed top-0 w-full z-50 header transition-transform transition-300 ${
        !menu && 'shadow-lg'
      }  py-4 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container flex items-center gap-6 justify-between  w-full ">
        <Logo activeSection={activeSection} />
        <Navlinks activeSection={activeSection} />
        <div className="flex gap-6 items-center ">
          <Socials />
          <ToggleMenu />
        </div>
        <Suspense fallback={null}>
          <Menu />
        </Suspense>
      </div>
    </header>
  )
}
export default Header
