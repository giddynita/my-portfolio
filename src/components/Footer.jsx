import { FaCopyright } from 'react-icons/fa6'
import { GoMoveToTop } from 'react-icons/go'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className=" relative section m-auto flex flex-row justify-between py-6 bg-base-200">
      <div className="">
        <p className="flex flex-row items-center">
          Copyright
          <span className="px-1 text-neutral-600">
            <FaCopyright />
          </span>
          2024
          <span className="px-1 text-primary">Gideon.</span> All Rights Reserved
        </p>
      </div>
      <div className="flex flex-row items-center gap-4">
        <p>Terms & Policy</p>
        <p>Disclaimer</p>
      </div>
      <AnchorLink href="#landing">
        <button
          type="button"
          className="absolute -top-12 right-1 p-2 text-3xl text-primary-content animateUp"
        >
          <GoMoveToTop />
        </button>
      </AnchorLink>
    </div>
  )
}
export default Footer
