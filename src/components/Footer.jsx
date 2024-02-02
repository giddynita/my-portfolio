import { FaCopyright } from 'react-icons/fa6'
import { GoMoveToTop } from 'react-icons/go'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className=" relative section m-auto flex flex-col md:flex-row justify-between items-center gap-3 py-3 bg-base-200">
      <div>
        <p className="flex flex-row items-center pt-2">
          Copyright
          <span className="px-1 text-neutral-600">
            <FaCopyright />
          </span>
          2024
          <span className="px-1 text-primary">Gideon.</span>
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <p>Terms & Policy</p>
        <p>Disclaimer</p>
      </div>
      <div className="absolute -top-10 right-0">
        <AnchorLink href="#landing">
          <button
            type="button"
            className=" p-1 text-3xl text-secondary animateUp"
          >
            <GoMoveToTop />
          </button>
        </AnchorLink>
      </div>
    </div>
  )
}
export default Footer
