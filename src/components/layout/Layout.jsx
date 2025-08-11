import { Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const SideNavBar = lazy(() => import('../sidebar/SideNavBar'))
const ThemeToggle = lazy(() => import('../theme/ThemeToggle'))

const Layout = () => {
  return (
    <div className="min-h-screen w-full">
      <Suspense fallback={null}>
        <SideNavBar />
        <ThemeToggle />
      </Suspense>

      <div className="scrollable min-h-screen w-full">
        <Outlet />
      </div>
    </div>
  )
}
export default Layout
