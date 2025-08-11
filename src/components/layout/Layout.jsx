import { Outlet } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from '../header/Header'
const ThemeToggle = lazy(() => import('../theme/ThemeToggle'))

const Layout = () => {
  return (
    <div className="min-h-screen w-full">
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
