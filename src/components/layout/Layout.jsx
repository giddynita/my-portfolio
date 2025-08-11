import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, SideNavBar, Theme, Loading } from '../components'

const Layout = () => {
  const navigation = useNavigation()
  console.log(navigation.state)
  const isPageLoading = navigation.state === 'loading'

  return (
    <div className="scrollable min-h-screen w-full">
      <Navbar />
      <SideNavBar />
      <Theme />
      {isPageLoading ? <Loading /> : <Outlet />}
    </div>
  )
}
export default Layout
