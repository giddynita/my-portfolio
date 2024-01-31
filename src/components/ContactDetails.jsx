const ContactDetails = ({ details }) => {
  const { title, info, icon, href } = details
  return (
    <div className="flex flex-row items-center gap-5 mb-4 ">
      <div className="bg-primary p-5 text-white rounded-full text-xl ">
        {icon}
      </div>
      <div>
        <h5 className="mb-0.5 text-neutral-500">{title}</h5>
        <p>
          <a href={href} className="font-semibold text-base-content">
            {info}
          </a>
        </p>
      </div>
    </div>
  )
}
export default ContactDetails
