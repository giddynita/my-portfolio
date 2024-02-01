import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import Skills from '../components/Skills'
import About from '../components/About'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'
import { Link, useLoaderData, useNavigation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { createClient } from 'contentful'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})
const queryData = () => {
  return {
    queryKey: ['portfolio'],
    queryFn: async () => {
      const response = await client.getEntries({ content_type: 'portfolio' })
      const contents = response.items.map((content) => {
        const {
          framework,
          github,
          preview,
          image,
          title,
          about,
          name,
          rating,
          review,
        } = content.fields
        const id = content.sys.id
        const img = image?.fields?.file?.url
        return {
          id,
          framework,
          github,
          preview,
          img,
          title,
          about,
          name,
          rating,
          review,
        }
      })
      return contents
    },
  }
}

const Landing = () => {
  const { data } = useQuery(queryData())
  const projects = data?.filter((items) => items.preview !== undefined)
  const reviews = data?.filter((items) => items.about !== undefined)
  const navigation = useNavigation()
  const isFetching = navigation.state === 'loading'
  const { navbar } = useContext(GlobalContext)
  if (!data) {
    return (
      <div
        className=" absolute right-0 top-0 w-screen h-screen bg-base-100 text-base-content flex flex-col gap-3 justify-center items-center pt-32  landing"
        style={{ width: navbar ? '80%' : '100%' }}
      >
        <div className="loading loading-spinner loading-sm text-primary "></div>
        <h4 className="tracking-wide">LOADING</h4>
      </div>
    )
  }

  return (
    <div
      id="landing"
      className=" absolute top-0 right-0 landing "
      style={{ width: navbar ? '80%' : '100%' }}
    >
      <Hero />
      <About />
      <Skills />
      <Portfolio projects={projects} />
      <Reviews reviews={reviews} />

      <Contact />
      <Footer />
    </div>
  )
}
export default Landing
