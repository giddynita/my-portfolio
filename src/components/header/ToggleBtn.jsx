import { useContext } from 'react'
import { GlobalContext } from '../../assets/globalContext'
import { IoMenuOutline } from 'react-icons/io5'
import { LiaTimesSolid } from 'react-icons/lia'

const ToggleBtn = () => {
  const { navMenu, showNavMenu } = useContext(GlobalContext)
  return (
    <button
      className="text-2xl md:hidden bg-primary rounded p-1 text-base-100 hover:scale-[1.05] hover:outline-base-content"
      onClick={showNavMenu}
    >
      {navMenu ? <LiaTimesSolid /> : <IoMenuOutline />}
    </button>
  )
}
export default ToggleBtn
