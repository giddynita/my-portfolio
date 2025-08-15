import { useContext } from 'react'
import { GlobalContext } from '../../assets/globalContext'
import { IoMenuOutline } from 'react-icons/io5'
import { LiaTimesSolid } from 'react-icons/lia'

const ToggleMenu = () => {
  const { menu, handleMenu } = useContext(GlobalContext)

  return (
    <button
      className="text-2xl md:hidden text-secondary-foreground hover:bg-secondary rounded p-1 text-base-100 hover:scale-[1.05] cursor-pointer"
      onClick={handleMenu}
    >
      <span className="sr-only">toggle menu</span>
      {menu ? (
        <LiaTimesSolid className="h-6 w-6 font-bold" />
      ) : (
        <IoMenuOutline className="w-6 h-6" />
      )}
    </button>
  )
}
export default ToggleMenu
