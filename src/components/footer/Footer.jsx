import { FaCopyright } from 'react-icons/fa6'
import { GoArrowUp, GoMoveToTop } from 'react-icons/go'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { navlinks } from '../../data'

const Footer = () => {
  return (
    <div className=" relative section m-auto flex flex-col items-center pt-5 bg-base-200 text-base-content">
      <div className="flex gap-x-3 items-center ">
        <AnchorLink href="#landing">
          <h3 className="logo text-sky-600 font-bold tracking-wide text-2xl">
            De<span className="text-emerald-600">Coda</span>
          </h3>
        </AnchorLink>
      </div>
      <ul className="flex flex-row justify-between capitalize text mt-3 w-[280px]">
        {navlinks
          .filter(({ section }) => section !== 'reviews')
          .map(({ id, section, href }) => {
            return (
              <li key={id} className="hover:text-primary">
                <a href={href}> {section}</a>
              </li>
            )
          })}
      </ul>
      <p className="flex flex-row items-center justify-center text-primary mt-2 mb-4 text-xs">
        <span className=" text-primary pr-0.5">
          <FaCopyright />
        </span>
        2024
        <span className="px-1 text-base-content">Gideon Onita.</span>
        All rights reserved.
      </p>

      <div className="absolute -top-8 right-4">
        <AnchorLink href="#landing">
          <button
            type="button"
            className="bg-primary-content text-primary p-0.5 rounded-full text-2xl animateUp"
          >
            <GoArrowUp className="" />
          </button>
        </AnchorLink>
      </div>
    </div>
  )
}
export default Footer
