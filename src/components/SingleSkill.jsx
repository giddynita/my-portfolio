const SingleSkill = ({ type, progress, level }) => {
  return (
    <li className="grid gap-2 ">
      <div className="flex justify-between text-lg">
        {type} <span className="text-base-content">{level}</span>
      </div>
      <progress
        className="progress progress-primary w-full bg-base-300/75"
        value={progress}
        max="100"
      />
    </li>
  )
}
export default SingleSkill
