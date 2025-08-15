import Header from '../components/header/Header'
import { sectionSuspense } from '../components/suspense/suspense'
import { lazy, useContext } from 'react'
const About = lazy(() => import('../components/about/About'))
const Skills = lazy(() => import('../components/skills/Skills'))
const Projects = lazy(() => import('../components/projects/Projects'))
const Contact = lazy(() => import('../components/contact/Contact'))
const Footer = lazy(() => import('../components/footer/Footer'))
import Hero from '../components/hero/Hero'
import { GlobalContext } from '../assets/globalContext'

const Index = () => {
  const { menuRef, menu, setMenu } = useContext(GlobalContext)
  const hideMenu = (e) => {
    const dropMenu = menuRef.current
    const { top, bottom } = dropMenu.getBoundingClientRect()
    const { clientY } = e
    if (clientY < top || clientY > bottom) {
      if (menu == true) {
        setMenu(false)
      }
    }
  }
  return (
    <div onClick={hideMenu}>
      <Header />
      <main id="hero container">
        <Hero />
        {sectionSuspense(<About />)}
        {sectionSuspense(<Skills />)}
        {sectionSuspense(<Projects />)}
        {sectionSuspense(<Contact />)}
        {sectionSuspense(<Footer />)}
      </main>
    </div>
  )
}
export default Index
