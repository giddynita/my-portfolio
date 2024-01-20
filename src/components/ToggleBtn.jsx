import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import { IoMenuOutline } from 'react-icons/io5'
import { LiaTimesSolid } from 'react-icons/lia'

const ToggleBtn = () => {
  const { navMenu, showNavMenu } = useContext(GlobalContext)
  return (
    <button onClick={showNavMenu} class="text-2xl md:hidden">
      {navMenu ? <LiaTimesSolid /> : <IoMenuOutline />}
    </button>
  )
}
export default ToggleBtn
