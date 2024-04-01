import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, SideNavBar, Theme, Loading } from '../components'

const Layout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <Navbar />
      <SideNavBar />
      <Theme />
      {isPageLoading ? <Loading /> : <Outlet />}
    </div>
  )
}
export default Layout
