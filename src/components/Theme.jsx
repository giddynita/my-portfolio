import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Theme = () => {
  const { handleTheme, theme } = useContext(GlobalContext)

  return (
    <div className="fixed top-1/3 right-0 z-50 theme">
      <button
        type="button"
        className="flex flex-row items-center gap-1 z-50 p-1.5 text-white rounded-l-full bg-primary/80 hover:bg-primary "
        onClick={() => {
          return (
            (theme == 'light' && handleTheme('dark')) ||
            (theme == 'dark' && handleTheme('light'))
          )
        }}
      >
        <span className="text-[0.9rem]">
          {theme == 'light' ? <MdLightMode /> : <MdDarkMode />}
        </span>
        <span className="text-[0.5rem] capitalize">
          {theme == 'light' ? 'light' : 'dark'}
        </span>
      </button>
    </div>
  )
}
export default Theme
