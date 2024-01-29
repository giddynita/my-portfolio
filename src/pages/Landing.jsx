import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import Skills from '../components/Skills'
import About from '../components/About'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { createClient } from 'contentful'

const queryData = () => {
  const client = createClient({
    space: 'dc28dkbw08sq',
    environment: 'master',
    accessToken: `${import.meta.env.VITE_API_KEY}`,
  })

  return {
    queryKey: ['portfolio'],
    queryFn: async () => {
      const response = await client.getEntries({ content_type: 'portfolio' })
      const project = response.items.map((content) => {
        const { framework, github, preview, image } = content.fields
        const id = content.sys.id
        const img = image?.fields?.file?.url

        return { id, framework, github, preview, img }
      })

      return project
    },
  }
}

export const loader = (queryClient) => async () => {
  /* await queryClient.ensureQueryData(queryData()) */
  return 'something'
}

const Landing = () => {
  const date = useLoaderData()
  console.log(date)
  const { navbar } = useContext(GlobalContext)
  const { data: projects } = useQuery(queryData())
  console.log(projects)
  if (!projects) {
    return (
      <div
        className=" w-screen h-screen bg-base-100 text-base-content flex justify-center items-center pt-32  landing"
        style={{ width: navbar ? '80%' : '100%' }}
      >
        <div className="loading loading-spinner loading-sm"></div>
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
      <Testimonials />
    </div>
  )
}
export default Landing
