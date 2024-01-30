const SingleProject = ({ framework, github, img, preview, title }) => {
  return (
    <li className="relative hover:-rotate-1 project">
      <article className=" relative shadow-sm shadow-neutral-300  rounded-md">
        <div className="relative p-5 pb-0 bg-base-100 z-40 rounded-t-md ">
          <figure>
            <img src={img} alt="project" className="rounded-t-md w-full" />
          </figure>
          <figcaption className=" opacity-0 origin-center top-5 left-0 absolute  w-full h-full rounded-b-md bg-base-100 flex flex-col items-center justify-center text-white gap-y-3 capitalize upper-layer ">
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
        <div className=" relative rounded-b-md bg-base-100 z-40 p-5">
          <h2 className="text-2xl text-base-content pb-4">{title}</h2>
          <div className="flex gap-2 justify-start flex-wrap">
            {framework?.map((item, index) => {
              return (
                <p
                  key={index}
                  className="bg-base-300 text-white rounded-sm text-sm  px-2 py-0.5 whitespace-nowrap"
                >
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <div className="absolute opacity-0 origin-center top-2 left-4 w-full h-full bottom-0 left-0 bg-neutral-300 rounded-md lower-layer"></div>
      </article>
    </li>
  )
}
export default SingleProject
