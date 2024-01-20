import Navlinks from './Navlinks'
import Socials from './Socials'
import ToggleBtn from './ToggleBtn'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
const Navbar = () => {
  return (
    <>
      <nav class="bg-base-100 navbar justify-between lg:flex-col lg:items-center lg:bg-base-200 lg:fixed lg:w-max lg:h-screen lg:w-1/3">
        <div class="flex gap-x-3 items-center ">
          <ToggleBtn />
          <a href="/">
            <h3 class="logo text-sky-600 font-bold tracking-wide text-2xl">
              De<span class="text-emerald-600">Coda</span>
            </h3>
          </a>
        </div>
        <Navlinks />
        <Socials />
      </nav>
      <button class="absolute left-1/3 top-1/2 translate-x-1/4 bg-base-100 w-max rounded-l-full  hidden lg:block">
        <MdKeyboardArrowLeft />
      </button>
    </>
  )
}
export default Navbar
