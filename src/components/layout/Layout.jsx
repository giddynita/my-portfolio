import { Outlet } from 'react-router-dom'
import { lazy, Suspense, useContext } from 'react'
import { GlobalContext } from '../../assets/globalContext'
const ThemeToggle = lazy(() => import('../theme/ThemeToggle'))

const Layout = () => {
  const { menuRef, menu, setMenu } = useContext(GlobalContext)
  const hideMenu = (e) => {
    const dropMenu = menuRef.current
    const { top, bottom } = dropMenu.getBoundingClientRect()
    const { clientY } = e
    if (clientY < top || clientY > bottom) {
      if (menu == true) {
        setMenu(false)
      }
    }
  }
  return (
    <div className="min-h-screen w-full" onClick={hideMenu}>
      <Suspense fallback={null}>
        <ThemeToggle />
      </Suspense>
      <div className="scrollable min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}
export default Layout
