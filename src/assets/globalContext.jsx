import { createContext, useEffect, useState } from 'react'
import { profile } from '../data'

export const GlobalContext = createContext()
const AppContext = ({ children }) => {
  const [navMenu, setNavMenu] = useState(false)
  const [navbar, setNavbar] = useState(true)
  const [heroContent, setHeroContent] = useState(profile)
  const [textIndex, setTextIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const updateProfile = () => {
    const increaseLetterIndex =
      letterIndex + 1 /* ) % (heroContent[textIndex].length + 1) */

    setLetterIndex(increaseLetterIndex)

    if (
      letterIndex === heroContent[textIndex].length /* &&
      letterIndex < heroContent[textIndex].length */
    ) {
      const newTextIndex = (textIndex + 1) % heroContent.length
      setTextIndex(newTextIndex)
      setLetterIndex(0)
    }
  }
  const showNavMenu = () => {
    setNavMenu(!navMenu)
  }
  const openSideNavbar = () => {
    setNavbar(!navbar)
  }
  useEffect(() => {
    let textAutoChange = setTimeout(() => {
      updateProfile()
    }, 200)
    return () => {
      clearInterval(textAutoChange)
    }
  }, [letterIndex])

  {
    console.log(textIndex, letterIndex)
  }

  const recentProfile = heroContent[textIndex].slice(0, letterIndex)

  return (
    <GlobalContext.Provider
      value={{ navMenu, showNavMenu, navbar, openSideNavbar, recentProfile }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
