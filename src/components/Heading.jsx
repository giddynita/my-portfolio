const Heading = ({ sectionTitle, sectionSubtitle }) => {
  return (
    <section className="relative heading">
      <h1 className="  text-6xl sm:text-7xl md:text-8xl  uppercase pt-1 text-base-content/5 font-semibold relative text-center  mb-10 whitespace-nowrap">
        {sectionTitle}
      </h1>
      <div className=" absolute top-1/2 -translate-y-1/2 w-full">
        <p className="text-4xl font-semibold capitalize  text-base-content w-full text-center whitespace-nowrap mb-2 ">
          {sectionSubtitle}
        </p>
        <span className="block bg-primary h-1 w-24 sm:w-24 rounded-full m-auto -mb-4 "></span>
      </div>
    </section>
  )
}
export default Heading
