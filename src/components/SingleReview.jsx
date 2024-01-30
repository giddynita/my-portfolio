import { TiStarFullOutline } from 'react-icons/ti'

const SingleReview = ({ about, img, name, review }) => {
  return (
    <article className="bg-base-300 rounded-md text-base-content relative p-8 w-64  ">
      <figure className="flex gap-3 items-center">
        <img src={img} alt={name} className="rounded-full  h-12 w-12" />
        <figcaption>
          <h4 className=" text-xs pb-0.5">{name}</h4>
          <p className="text-xs text-base-content/50">{about}</p>
        </figcaption>
      </figure>
      <p className="py-4 text-xs">{review}</p>

      <div className="flex text-yellow-500">
        <span>
          <TiStarFullOutline />
        </span>
        <span>
          <TiStarFullOutline />
        </span>
        <span>
          <TiStarFullOutline />
        </span>
        <span>
          <TiStarFullOutline />
        </span>
        <span>
          <TiStarFullOutline />
        </span>
      </div>
    </article>
  )
}
export default SingleReview
