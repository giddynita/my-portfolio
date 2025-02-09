const Heading = ({ sectionTitle }) => {
  return (
    <section className="relative w-full h-max mb-8 heading">
      <div className=" w-max flex flex-col items-center mx-auto  relative">
        <h1 className="text-2xl sm:text-4xl md:text-6xl  uppercase text-base-content font-semibold relative text-center whitespace-nowrap mb-1  relative">
          {sectionTitle}
        </h1>
        <span className="absolute bg-primary h-1 w-2/4 rounded-full bottom-0"></span>
      </div>

      {/* <div className=" w-max flex flex-col items-center gap-1 relative">
        <p className="text-lg font-semibold  text-base-content  whitespace-nowrap ">
          {sectionSubtitle}
        </p>
        <span className="absolute bg-primary h-1 w-2/3 rounded-full bottom-0"></span>
      </div> */}
    </section>
  )
}
export default Heading
