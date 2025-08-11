import { socials } from '../../data'

const Socials = () => {
  return (
    <ul className="flex gap-x-2 lg:pb-3">
      {socials.map(({ id, icon, href }) => {
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
