import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

const SingleReview = ({ about, img, name, review }) => {
  return (
    <article className="bg-base-300 rounded-md text-base-content relative px-8 pb-6 pt-10 carousel-single w-4/5  ">
      <figure className="flex gap-3 items-center">
        <img src={img} alt={name} className="rounded-full  h-12 w-12" />
        <figcaption>
          <h4 className=" text-xs font-bold tracking-wider pb-0.5">{name}</h4>
          <p className="text-xs text-base-content/70">{about}</p>
        </figcaption>
      </figure>
      <div className="my-4">
        <div className="text-2xl w-max -mb-4 text-primary">
          <FaQuoteLeft />
        </div>
        <p className="px-7 text-xs">{review}</p>
        <div className="text-2xl  w-max ml-auto -mt-4 text-primary">
          <FaQuoteRight />
        </div>
      </div>
    </article>
  )
}
export default SingleReview
