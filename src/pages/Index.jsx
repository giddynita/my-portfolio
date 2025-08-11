import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import { createClient } from 'contentful'

const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})
const queryData = {
  queryKey: ['portfolio'],
  queryFn: async () => {
    const data = await client.getEntries({ content_type: 'portfolio' })
    return data
  },
}

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(queryData)
  return null
}
const Index = () => {
  const { navbar, setNavMenu } = useContext(GlobalContext)
  /* const { data: response, isLoading } = useQuery(queryData) */

  return (
    <div
      id="landing"
      className={`${navbar ? 'lg:w-[80%]' : 'lg:w-[100%]'} ${
        navbar ? 'lg:ml-[20%]' : 'lg:ml-0'
      } landing`}
      onClick={() => setNavMenu(false)}
    >
      {/* <Hero />
      <About />
      <Skills />
       <Portfolio response={[]} />
      <Reviews response={[]} />
      <Contact />
      <Footer /> */}
    </div>
  )
}
export default Index

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
