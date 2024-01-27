const SingleSkill = ({ type, progress }) => {
  return (
    <li className="grid gap-2 ">
      <div className="flex justify-between">
        {type} <span>{`${progress}%`}</span>
      </div>
      <progress
        className="progress progress-primary w-full bg-base-300/75"
        value={progress}
        max="100"
      ></progress>
    </li>
  )
}
export default SingleSkill
