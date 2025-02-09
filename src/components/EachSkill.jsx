const EachSkill = ({ logo, title, level }) => {
  return (
    <li className="">
      <div className="bg-base-300 pt-5 pb-3 w-[170px] h-[130px] rounded-2xl border border-base-300 hover:border hover:border-primary hover:bg-primary/5 skill-card transition transition-300">
        <figure className=" card-image w-[60px] h-[60px] mx-auto">
          <img
            src={logo}
            alt={title}
            className="w-full h-full logo grayscale z-40"
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
export default EachSkill
