import AppContext from '../assets/globalContext'
import Navbar from '../components/Navbar'
import SideNavBar from '../components/SideNavBar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <AppContext>
      <Navbar />
      <SideNavBar />
      <div className="bg-base-300 min-h-screen">
        <Outlet />
      </div>
    </AppContext>
  )
}
export default HomeLayout
