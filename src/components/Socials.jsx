import { socials } from '../data'

const Socials = () => {
  return (
    <ul className="flex gap-x-2 text-neutral-500 lg:pb-3">
      {socials.map(({ id, icon, href }) => {
        return (
          <li key={id} className="hover:text-primary cursor-pointer text-">
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
