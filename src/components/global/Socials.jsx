import { socials } from '../../data'
import { useMemo } from 'react'

const Socials = () => {
  const socialLinks = useMemo(() => {
    return socials
  }, [])
  return (
    <ul className="flex gap-x-2 lg:pb-3">
      {socialLinks.map(({ id, icon, href }) => {
        return (
          <li
            key={id}
            className="hover:text-primary text-muted-foreground cursor-pointer "
          >
            <a href={href} target="_blank">
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default Socials
