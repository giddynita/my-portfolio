import { useQuery } from '@tanstack/react-query'
import { client } from './contentful'

export const useHeroContent = () => {
  const fetchedHero = async () => {
    const content = await client.getEntries({ content_type: 'portfolioHero' })
    return content.items[0].fields
  }
  const queryData = useQuery({
    queryKey: ['portfolio-hero'],
    queryFn: fetchedHero,
  })

  return queryData
}
export const useAboutContent = () => {
  const fetchedAbout = async () => {
    const content = await client.getEntries({ content_type: 'portfolio-about' })
    return content
  }
  const queryData = useQuery({
    queryKey: ['portfolio-about'],
    queryFn: fetchedAbout,
  })

  return queryData
}
export const useSkillsContent = () => {
  const fetchedSkills = async () => {
    const content = await client.getEntries({
      content_type: 'portfolio-skills',
    })
    return content
  }
  const queryData = useQuery({
    queryKey: ['portfolio-skills'],
    queryFn: fetchedSkills,
  })

  return queryData
}
export const useProjectsContent = () => {
  const fetchedProjects = async () => {
    const content = await client.getEntries({
      content_type: 'portfolio-projects',
    })
    return content
  }
  const queryData = useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: fetchedProjects,
  })

  return queryData
}
