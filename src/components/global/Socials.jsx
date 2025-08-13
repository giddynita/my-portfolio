import { socials } from '../../data'
import React from 'react'

const Socials = () => {
  return (
    <ul className="flex items-center gap-x-4">
      {socials.map(({ id, icon, href }) => {
        return (
          <li
            key={id}
            className="hover:text-primary hover:scale-103 text-muted-foreground cursor-pointer"
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl"
            >
              <span className="sr-only">{id}</span>
              {icon}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default React.memo(Socials)
