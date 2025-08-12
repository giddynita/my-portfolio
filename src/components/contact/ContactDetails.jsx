const ContactDetails = ({ details }) => {
  const { title, info, icon, href } = details

  return (
    <div className=" p-6 group flex flex-row items-center rounded-lg gap-5 mb-4  hover-glow-accent">
      <div className="bg-primary/10 p-2 text-primary rounded-full text-xl group-hover:bg-accent/10 group-hover:text-accent ">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold group-hover:text-accent md:text-lg">
          {title}
        </h4>
        {href ? (
          <a
            href={href}
            on
            className="font-semibold text-sm md:text-base text-muted-foreground hover:text-accent
            "
          >
            {info}
          </a>
        ) : (
          <p
            className="font-semibold text-sm md:text-base  text-muted-foreground pt-0.5
            "
          >
            {info}
          </p>
        )}
      </div>
    </div>
  )
}
export default ContactDetails
