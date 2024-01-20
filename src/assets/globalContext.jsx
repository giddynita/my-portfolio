import { createContext, useState } from 'react'

export const GlobalContext = createContext()

const AppContext = ({ children }) => {
  const [navMenu, setNavMenu] = useState(false)

  const showNavMenu = () => {
    setNavMenu(!navMenu)
  }
  return (
    <GlobalContext.Provider value={{ navMenu, showNavMenu }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default AppContext
