import { socials } from '../data'

const Socials = () => {
  return (
    <ul class="flex gap-x-2 text-neutral-500">
      {socials.map(({ id, icon, href }) => {
        return (
          <li key={id} class="hover:text-primary cursor-pointer text-">
            <a href={href}>{icon}</a>
          </li>
        )
      })}
    </ul>
  )
}
export default Socials
