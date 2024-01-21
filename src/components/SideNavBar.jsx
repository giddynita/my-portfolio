import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import Navlinks from './Navlinks'
import Socials from './Socials'
const SideNavBar = () => {
  const { navbar, openSideNavbar } = useContext(GlobalContext)
  return (
    <>
      <nav
        className=" hidden  lg:flex justify-between flex-col bg-base-200 fixed -left-1/2 h-screen w-1/4 items-center side-bar z-50"
        style={{ left: navbar && '0' }}
      >
        <a href="/" className="w-full text-center ">
          <h3 className="logo text-sky-600 font-bold tracking-wide text-2xl bg-neutral-300 py-3">
            De<span className="text-emerald-600">Coda</span>
          </h3>
        </a>
        <Navlinks />
        <Socials />
        <button
          className="absolute left-full bottom-7 lg:text-neutral pr-1 py-0.5 lg:bg-neutral-300 rounded-r-full text-500 hidden lg:block"
          onClick={openSideNavbar}
          style={{ left: navbar || '200%' }}
        >
          {navbar ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </button>
      </nav>
    </>
  )
}
export default SideNavBar
