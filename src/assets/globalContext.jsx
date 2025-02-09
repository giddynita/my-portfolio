import { createContext, useState } from 'react'

export const GlobalContext = createContext()

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme' || 'light')
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}
const AppContext = ({ children }) => {
  const [navMenu, setNavMenu] = useState(false)
  const [navbar, setNavbar] = useState(true)
  const [theme, setTheme] = useState(getThemeFromLocalStorage())
  const [pageLoading, setPageLoading] = useState(true)
  const pageLoaded = (loadingStatus) => {
    setPageLoading(loadingStatus)
  }
  const showNavMenu = () => {
    setNavMenu(!navMenu)
  }
  const closeSideNavbar = () => {
    setNavbar(!navbar)
  }
  const handleTheme = (newTheme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }
  return (
    <GlobalContext.Provider
      value={{
        navMenu,
        showNavMenu,
        navbar,
        closeSideNavbar,
        handleTheme,
        theme,
        pageLoading,
        pageLoaded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext

/* const [heroContent, setHeroContent] = useState(profile)
  const [textIndex, setTextIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0) */
/* const updateProfile = () => {
    const increaseLetterIndex =
      (letterIndex + 1) % (heroContent[textIndex].length + 1)

    setLetterIndex(increaseLetterIndex)

    if (letterIndex === heroContent[textIndex].length) {
      const newTextIndex = (textIndex + 1) % heroContent.length
      setTextIndex(newTextIndex)
      setLetterIndex(0)
    }
  } */

/*  useEffect(() => {
    let textAutoChange = setTimeout(() => {
      updateProfile()
    }, 200)
    return () => {
      clearInterval(textAutoChange)
    }
  }, [letterIndex]) */

/* const recentProfile = heroContent[textIndex].slice(0, letterIndex) */
