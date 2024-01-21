import Menu from './Menu'
import Navlinks from './Navlinks'
import Socials from './Socials'
import ToggleBtn from './ToggleBtn'

const Navbar = () => {
  return (
    <nav className="relative bg-base-100 navbar justify-between lg:hidden z-50">
      <div className="flex gap-x-3 items-center ">
        <a href="/">
          <h3 className="logo text-sky-600 font-bold tracking-wide text-2xl">
            De<span className="text-emerald-600">Coda</span>
          </h3>
        </a>
      </div>
      <Navlinks />
      <div className="flex gap-6 ">
        <Socials />
        <ToggleBtn />
      </div>
      <Menu />
    </nav>
  )
}
export default Navbar
