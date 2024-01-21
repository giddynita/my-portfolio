import AppContext from '../assets/globalContext'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import SideNavBar from '../components/SideNavBar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <AppContext>
      <Navbar />
      <SideNavBar />
      <div>
        <Outlet />
      </div>
    </AppContext>
  )
}
export default HomeLayout
