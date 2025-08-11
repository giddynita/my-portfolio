import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
/* import { useContext } from 'react' */
/* import { GlobalContext } from '../../assets/globalContext' */
/* import Navlinks from './Navlinks'
import Socials from './Socials'
import AnchorLink from 'react-anchor-link-smooth-scroll' */

const SideNavBar = () => {
  /* const { navbar, closeSideNavbar } = useContext(GlobalContext) */
  return (
    <>
      <nav
        className=" hidden fixed top-0 lg:flex lg:justify-between lg:flex-col -left-1/2 bg-base-300 h-screen items-center side-bar z-50 "
        /* style={{ left: navbar && '0' }} */
      >
        {/* <AnchorLink href="#landing" className="w-full text-center ">
          <h3 className="logo text-sky-600 font-bold tracking-wide text-2xl bg-base-200 py-3">
            De<span className="text-emerald-600">Coda</span>
          </h3>
        </AnchorLink>
        <Navlinks />
        <Socials />
        <button
          className="absolute left-full bottom-7 lg:text-base-500 pr-1 py-0.5 lg:bg-base-300 rounded-r-full text-500 hidden lg:block"
          onClick={closeSideNavbar}
          style={{ left: navbar || '250%' }}
        >
          {navbar ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />}
        </button> */}
      </nav>
    </>
  )
}
export default SideNavBar
