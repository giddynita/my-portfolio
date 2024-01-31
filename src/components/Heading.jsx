const Heading = ({ sectionTitle, sectionSubtitle }) => {
  return (
    <section className="relative w-full h-max mt-2 mb-10 heading">
      <h1 className="  text-4xl sm:text-5xl md:text-6xl  uppercase text-base-content/5 font-semibold relative text-center whitespace-nowrap">
        {sectionTitle}
      </h1>
      <div className=" absolute w-full h-full flex flex-col items-center justify-center bottom-0 ">
        <p className="text-2xl font-semibold  text-base-content  whitespace-nowrap ">
          {sectionSubtitle}
        </p>
        <span className="block bg-primary h-1 w-24 sm:w-24 rounded-full "></span>
      </div>
    </section>
  )
}
export default Heading
