function Logo({ activeSection }) {
  return (
    <h1
      className={`font-bold tracking-wide text-xl hover:scale-105 ${
        activeSection == 'index' && 'scale-105'
      }`}
    >
      <AnchorLink href="#index" className="gradient-text">
        giddynita
      </AnchorLink>
    </h1>
  )
}
export default React.memo(Logo)
