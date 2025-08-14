import { createClient } from 'contentful'

export const client = createClient({
  space: 'dc28dkbw08sq',
  accessToken: `${import.meta.env.VITE_API_KEY}`,
})
