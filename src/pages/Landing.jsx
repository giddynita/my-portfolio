import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import { createClient } from 'contentful'
import {
  About,
  Contact,
  Footer,
  Hero,
  Portfolio,
  Reviews,
  Skills,
} from '../components'

const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})
const queryData = {
  queryKey: ['portfolio'],
  queryFn: () => client.getEntries({ content_type: 'portfolio' }),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(queryData)
  return { response }
}
const Landing = () => {
  const { navbar } = useContext(GlobalContext)
  return (
    <div
      id="landing"
      className="landing"
      style={{
        width: navbar ? '80%' : '100%',
        marginLeft: navbar ? '20%' : '0',
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}
export default Landing

/* const contentItems = response.items.map((content) => {
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
const projects = contentItems.filter((items) => items.preview !== undefined)
const reviews = contentItems.filter((items) => items.about !== undefined) */
