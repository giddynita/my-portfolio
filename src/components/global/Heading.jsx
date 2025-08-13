const Heading = ({ sectionTitle }) => {
  const [first, second] = sectionTitle.split(' ')
  return (
    <h2 className="text-3xl sm:text-4xl md:text-6xl  uppercase font-bold text-center whitespace-nowrap mb-10 flex flex-wrap items-center justify-center gap-2  relative">
      {first} <span className="gradient-text">{second}</span>
    </h2>
  )
}
export default Heading
