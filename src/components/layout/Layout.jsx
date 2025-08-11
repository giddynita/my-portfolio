import { Outlet } from 'react-router-dom'
import { SideNavBar, Theme } from '../components'

const Layout = () => {
  return (
    <div className="min-h-screen w-full">
      <SideNavBar />
      <Theme />
      <div className="scrollable min-h-screen w-full">
        <Outlet />
      </div>
    </div>
  )
}
export default Layout
