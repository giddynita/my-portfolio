const Heading = ({ sectionTitle }) => {
  const [first, second] = sectionTitle.split(' ')
  return (
    <h2 className="text-4xl sm:text-4xl md:text-6xl  uppercase font-bold text-center whitespace-nowrap mb-8  relative">
      {first} <span className="gradient-text">{second}</span>
    </h2>
  )
}
export default Heading
