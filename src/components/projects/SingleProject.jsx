import { MdArrowOutward } from 'react-icons/md'

const SingleProject = ({ img, preview, title }) => {
  return (
    <li className="rounded-lg project-card">
      <figure className="overflow-hidden rounded-t-lg border border-base-200 rounded-lg">
        <img src={img} alt={title} className="rounded-t-lg project-img " />
        <figcaption>
          <a
            href={preview}
            className="bg-base-content text-primary-content rounded-b-lg flex justify-between items-center py-3 px-4 after:block after:bg-primary project-link relative transition transition-300 after:rounded-b-lg after:w-0 after:h-full after:absolute "
          >
            <h4 className=" text-2xl font-bold tracking-wider z-40">{title}</h4>
            <MdArrowOutward className="text-xl z-40" />
          </a>
        </figcaption>
      </figure>
    </li>
  )
}
export default SingleProject

{
  /* <li className="relative hover:-rotate-1 project">
      <article className=" relative shadow-sm shadow-neutral-300  rounded-md">
        <div className="relative p-5 pb-0 bg-base-content z-40 rounded-t-md ">
          <figure>
            <img
              src={img}
              alt="project"
              className="rounded-t-md w-full lazy"
              loading="lazy"
            />
          </figure>
          <figcaption className=" opacity-0 origin-center top-5 left-0 absolute  w-full h-full rounded-b-md bg-base-content flex flex-col items-center justify-center text-white gap-y-3 capitalize upper-layer ">
            <a
              href={github}
              className="bg-neutral-500/50 px-2 pb-1 rounded-md text-lg hover:text-black/50"
            >
              source code
            </a>
            <a
              href={preview}
              className="bg-neutral-500/50 px-2 pb-1 rounded-md text-lg hover:text-black/50"
            >
              visit site
            </a>
          </figcaption>
        </div>
        <div className=" relative rounded-b-md bg-primary z-40 p-5">
          <h2 className="text-2xl text-white font-bold pb-4 tracking-wider">
            {title}
          </h2>
            <div className="flex gap-2 justify-start flex-wrap">
            {framework?.map((item, index) => {
              return (
                <p
                  key={index}
                  className="bg-base-100 text-base-content rounded-sm text-sm  px-2 py-0.5 whitespace-nowrap"
                >
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <div className="absolute opacity-0 origin-center top-2 left-4 w-full h-full bottom-0 bg-base-content/30 rounded-md lower-layer "></div>
      </article>
    </li> */
}
