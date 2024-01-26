import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import Skills from '../components/Skills'
import About from '../components/About'
import Hero from '../components/Hero'

const Landing = () => {
  const { navbar } = useContext(GlobalContext)
  return (
    <div
      id="landing"
      className=" absolute top-0 right-0 landing "
      style={{ width: navbar ? '75%' : '100%' }}
    >
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
export default Landing
