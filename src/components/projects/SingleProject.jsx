import { FaGithub } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import GradientButton from '../global/GradientButton'
import OutlineButton from '../global/OutlineButton'

const SingleProject = ({ project, index }) => {
  const {
    description,
    image,
    technologies,
    liveUrl,
    githubUrl,
    featured,
    title,
  } = project

  return (
    <li
      className={`grid md:grid-cols-2 gap-10 items-start ${
        index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
      }`}
    >
      <div
        className={`relative group overflow-hidden rounded-2xl  hover-glow-primary ${
          index % 2 === 1 ? 'md:col-start-2' : ''
        }`}
      >
        <img
          src={image}
          alt={title}
          className="bg-red-100 aspect-[4/3] transition-transform duration-700 group-hover:scale-105 "
          width={1600}
          height={1200}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay Links */}
        <div className="hidden absolute bottom-6 left-6 right-6 md:flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-primary/20 text-foreground hover:bg-primary  rounded-md hover:scale-105 ">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3"
            >
              <FiExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </button>
          <button className="bg-primary/20 text-foreground hover:bg-primary rounded-md hover:scale-105">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-3"
            >
              <FaGithub className="h-4 w-4 mr-2" />
              Code
            </a>
          </button>
        </div>
      </div>
      <div
        className={`space-y-4 animate-fade-in ${
          index % 2 === 1 ? 'md:col-start-1' : ''
        }`}
      >
        <div>
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 font-medium">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className=" flex flex-wrap gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-48"
          >
            <GradientButton
              text="Live Demo"
              icon={<FiExternalLink />}
              type="button"
            />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full lg:w-48"
          >
            <OutlineButton text="Code" icon={<FaGithub />} type="button" />
          </a>
        </div>
      </div>
    </li>
  )
}
export default SingleProject
