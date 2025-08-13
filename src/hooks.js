import { useQuery } from '@tanstack/react-query'

const useFetchedContent = () => {
  const fetchedContent = async () => {
    const data = await client.getEntries({ content_type: 'portfolio' })
    return data
  }
  const queryData = useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchedContent,
  })

  return queryData
}
