import { createContext, useState } from 'react'

export const GlobalContext = createContext()
const AppContext = ({ children }) => {
  const [navMenu, setNavMenu] = useState(false)
  const [navbar, setNavbar] = useState(true)
  const showNavMenu = () => {
    setNavMenu(!navMenu)
  }

  const openSideNavbar = () => {
    setNavbar(!navbar)

    setLocalStorage(show)
  }

  return (
    <GlobalContext.Provider
      value={{ navMenu, showNavMenu, navbar, openSideNavbar }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
