const SingleProject = ({ framework, github, img, preview }) => {
  return (
    <li className="relative hover:-rotate-2 project">
      <article className=" relative shadow-sm shadow-neutral-300 hover:-rotate-1 rounded-md">
        <div className="relative p-5 pb-0 bg-base-100 z-40 rounded-t-md ">
          <figure>
            <img src={img} alt="project" className="rounded-md w-full" />
          </figure>
          <figcaption className=" opacity-0 origin-center top-5 left-0 absolute  w-full h-full rounded-b-md bg-base-100 flex flex-col items-center justify-center text-neutral-900 gap-y-3 capitalize upper-layer ">
            <a
              href={github}
              className="bg-primary/10 px-2 pb-1 rounded-md text-lg hover:text-primary"
            >
              source code
            </a>
            <a
              href={preview}
              className="bg-primary/10 px-2 py-0.5 pb-1 rounded-md text-lg hover:text-primary"
            >
              visit site
            </a>
          </figcaption>
        </div>
        <div className=" relative rounded-b-md bg-base-100 z-40 p-5">
          <h2 className="text-2xl text-neutral-800 pb-4">Project</h2>
          <div className="flex gap-2 justify-start flex-wrap">
            {framework.map((item) => {
              return (
                <p className="bg-neutral-300/50 text-neutral-600 rounded-sm text-sm  px-2 py-0.5 flex items-center whitespace-nowrap">
                  {item}
                </p>
              )
            })}
          </div>
        </div>
        <div className="absolute opacity-0 origin-center top-2 left-4 w-full h-full bottom-0 left-0 bg-neutral-300/70 rounded-md lower-layer"></div>
      </article>
    </li>
  )
}
export default SingleProject
