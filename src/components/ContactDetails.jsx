const ContactDetails = ({ details }) => {
  const {
    title,
    info,
    icon,
    href,
    href1,
    href2,
    href3,
    social1,
    social2,
    social3,
  } = details
  return (
    <div className="flex flex-row items-center gap-5 mb-4 ">
      <div className="bg-primary p-3 text-white rounded-full text-xl ">
        {icon}
      </div>
      <div>
        <h5 className="mb-0.5 text-neutral-500">{title}</h5>
        <div className="flex flex-row gap-1 items-center">
          <a href={href} className="font-semibold text-base-content">
            {info}
          </a>
          <a href={href1} className="font-semibold text-base-content text-xl ">
            {social1}
          </a>
          <a href={href2} className="font-semibold text-base-content">
            {social2}
          </a>
          <a href={href3} className="font-semibold text-base-content text-xl">
            {social3}
          </a>
        </div>
      </div>
    </div>
  )
}
export default ContactDetails
