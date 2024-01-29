import { createClient } from 'contentful'
import { useQuery } from '@tanstack/react-query'

const client = createClient({
  space: 'dc28dkbw08sq',
  environment: 'master',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})

const useFetchProjects = () => {
  const { data, isLoading } = useQuery({
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
  })

  return { data, isLoading }
}

export default useFetchProjects
