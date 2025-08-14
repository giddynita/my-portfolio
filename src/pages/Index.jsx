import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import { sectionSuspense } from '../components/suspense/suspense'
import { lazy } from 'react'
const About = lazy(() => import('../components/about/About'))
const Skills = lazy(() => import('../components/skills/Skills'))
const Projects = lazy(() => import('../components/projects/Projects'))
const Contact = lazy(() => import('../components/contact/Contact'))
const Footer = lazy(() => import('../components/footer/Footer'))

const Index = () => {
  return (
    <>
      <Header />
      <main id="hero container">
        <Hero />
        {sectionSuspense(<About />)}
        {sectionSuspense(<Skills />)}
        {sectionSuspense(<Projects />)}
        {sectionSuspense(<Contact />)}
        {sectionSuspense(<Footer />)}
      </main>
    </>
  )
}
export default Index
