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
    const content = await client.getEntries({ content_type: 'portfolioAbout' })
    return content.items[0].fields
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
      content_type: 'portfolioSkills',
    })
    const skills = content.items
      .sort((a, b) => {
        const createdA = new Date(a.sys.createdAt)
        const createdB = new Date(b.sys.createdAt)
        return createdA - createdB
      })
      .map((item) => {
        const fields = item.fields

        return { ...fields }
      })

    return skills
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
      content_type: 'portfolioProjects',
    })
    const projects = content.items.map((item) => {
      const fields = item.fields
      const image = item.fields.image?.fields?.file?.url
      return { ...fields, image }
    })
    return projects
  }
  const queryData = useQuery({
    queryKey: ['portfolio-projects'],
    queryFn: fetchedProjects,
  })

  return queryData
}
