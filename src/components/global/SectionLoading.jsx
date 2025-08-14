function SectionLoading({ height }) {
  return (
    <div className={` flex items-center justify-center gap-1 w-full ${height}`}>
      <span className="loading loading-spin loading-sm"></span>
    </div>
  )
}
export default SectionLoading
