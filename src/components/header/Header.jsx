import { lazy, Suspense, useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../assets/globalContext'
import ToggleMenu from './ToggleMenu'
import { navlinks } from '../../data'
import Logo from '../global/Logo'
const Menu = lazy(() => import('./Menu'))
const Navlinks = lazy(() => import('../navlinks/HeaderNavlinks'))
const Socials = lazy(() => import('../global/Socials'))

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
          const isMobile = window.innerWidth < 768
          const currentScrollY = isMobile
            ? window.scrollY + 64
            : window.scrollY + 72
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
      className={`fixed top-0 w-full z-50 header transition-transform transition-300 ${
        !menu && 'shadow-lg'
      }  py-4 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container flex items-center gap-6 justify-between  w-full ">
        <Logo activeSection={activeSection} />
        <Suspense fallback={<div className="flex-1 h-[36px]" />}>
          <Navlinks activeSection={activeSection} />
        </Suspense>
        <div className="flex gap-6 items-center ">
          <Suspense fallback={<div className="w-[64px] h-[36px]" />}>
            <Socials />
          </Suspense>

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
