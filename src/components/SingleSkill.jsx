import html from '../assets/images/figma.png'

const SingleSkill = ({ logo, title, level }) => {
  return (
    <li className="">
      {/* <div className="flex justify-between text-lg">
        {type} <span className="text-base-content">{level}</span>
      </div>
      <progress
        className="progress progress-secondary w-full bg-base-300/75"
        value={progress}
        max="100"
      /> */}
      <div className="bg-base-300 pt-5 pb-3 w-[170px] h-[130px] rounded-2xl border border-base-300 hover:border hover:border-primary hover:bg-primary/30 skill-card transition transition-300">
        <figure className=" card-image w-[60px] h-[60px] mx-auto">
          <img
            src={logo}
            alt={title}
            className="w-full h-full logo grayscale"
          />
        </figure>
        <p className="text-center font-bold text-lg mt-2 text-primary grayscale card-level">
          {level}
        </p>
      </div>
      <h5 className="text-center mt-1 text-primary">{title}</h5>
    </li>
  )
}
export default SingleSkill
