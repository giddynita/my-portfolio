import Menu from './Menu'
import Navlinks from './Navlinks'
import Socials from './Socials'
import ToggleBtn from './ToggleBtn'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <nav className=" bg-base-100 navbar justify-between lg:hidden fixed border-b border-base-300 z-50">
      <div className="flex gap-x-3 items-center ">
        <AnchorLink href="#landing">
          <h3 className="logo text-sky-600 font-bold tracking-wide text-2xl">
            De<span className="text-emerald-600">Coda</span>
          </h3>
        </AnchorLink>
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
