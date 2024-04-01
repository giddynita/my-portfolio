const Heading = ({ sectionTitle, sectionSubtitle }) => {
  return (
    <section className="relative w-full h-max mt-3 mb-8 heading">
      <h1 className="  text-4xl sm:text-5xl md:text-6xl  uppercase text-base-content/10 font-semibold relative text-center whitespace-nowrap z-30 mb-6">
        {sectionTitle}
      </h1>
      <div className=" w-max flex flex-col items-center gap-1 relative">
        <p className="text-lg font-semibold  text-base-content  whitespace-nowrap ">
          {sectionSubtitle}
        </p>
        <span className="absolute bg-primary h-1 w-2/3 rounded-full bottom-0"></span>
      </div>
    </section>
  )
}
export default Heading
