import { FaCopyright } from 'react-icons/fa6'
import { GoArrowUp } from 'react-icons/go'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../global/Logo'
import FooterNavlinks from '../navlinks/FooterNavlinks'

const Footer = () => {
  return (
    <footer className=" relative header py-8 mt-16  ">
      <div className="container flex flex-col items-center space-y-2 ">
        <Logo />
        <FooterNavlinks />
        <p className="flex flex-row items-center justify-center text-xs font-medium">
          <span className=" flex items-center gap-1 text-muted-foreground pr-0.5">
            <FaCopyright />
            2025
          </span>
          <span className="px-1 text-primary">Gideon Onita.</span>
          All rights reserved.
        </p>
      </div>
      <div className="absolute -top-8 right-4">
        <AnchorLink href="#hero">
          <button
            type="button"
            className="bg-accent text-accent-foreground p-0.5 rounded-full text-2xl animate-bounce cursor-pointer"
          >
            <span className="sr-only">go to top</span>
            <GoArrowUp />
          </button>
        </AnchorLink>
      </div>
    </footer>
  )
}
export default Footer
