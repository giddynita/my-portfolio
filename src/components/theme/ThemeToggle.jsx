import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useTheme } from './theme-provider'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="fixed top-1/3 right-0 z-50">
      <button
        type="button"
        className="rounded-l-full p-2 bg-muted hover:bg-muted/80 cursor-pointer "
        onClick={() => {
          return (
            (theme == 'light' && setTheme('dark')) ||
            (theme == 'dark' && setTheme('light'))
          )
        }}
      >
        <MdLightMode className="h-[1.2rem] w-[1.2rem] scale-100 opacity-100 transition-all dark:scale-0 dark:opacity-100  text-muted-foreground " />
        <MdDarkMode className="absolute top-1/2 -translate-y-1/2 h-[1.2rem] w-[1.2rem] scale-0 opacity-0 transition-all dark:scale-100 dark:opacity-100 text-muted-foreground" />
      </button>
    </div>
  )
}
export default ThemeToggle
