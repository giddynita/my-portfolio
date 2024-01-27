import AppContext from '../assets/globalContext'
import Navbar from '../components/Navbar'
import SideNavBar from '../components/SideNavBar'
import { Outlet, useNavigation } from 'react-router-dom'

const HomeLayout = () => {
  const navigation = useNavigation()
  const pageLoading = navigation.state === 'loading'
  return (
    <AppContext>
      <Navbar />
      <SideNavBar />
      <div className="bg-base-300 min-h-screen">
        {pageLoading ? (
          <div className="loading loading-dots loading-sm" />
        ) : (
          <Outlet />
        )}
      </div>
    </AppContext>
  )
}
export default HomeLayout
