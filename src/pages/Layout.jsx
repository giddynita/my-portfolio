import { GlobalContext } from '../assets/globalContext'
import Navbar from '../components/Navbar'
import SideNavBar from '../components/SideNavBar'
import { Outlet, useNavigation } from 'react-router-dom'
import Theme from '../components/Theme'
import { useContext } from 'react'

const HomeLayout = () => {
  const { theme } = useContext(GlobalContext)
  const navigation = useNavigation()
  const pageLoading = navigation.state === 'loading'
  return (
    <div data-theme={theme}>
      <Navbar />
      <SideNavBar />
      <Theme />
      <div className="bg-base-300 min-h-screen">
        {pageLoading ? (
          <div className="loading loading-dots loading-sm" />
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  )
}
export default HomeLayout
