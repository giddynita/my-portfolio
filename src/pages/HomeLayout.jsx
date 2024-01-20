import AppContext from '../assets/globalContext'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'

const HomeLayout = () => {
  return (
    <AppContext>
      <Navbar />
      <Menu />
    </AppContext>
  )
}
export default HomeLayout
