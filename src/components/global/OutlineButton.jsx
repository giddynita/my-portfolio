function OutlineButton({ text, type, icon }) {
  return (
    <button
      type={type}
      className={`w-full border border-primary/50 hover:border-primary hover-glow-accent hover:bg-primary/10 hover:scale-101 transition-all duration-300 py-3 text-lg font-semibold cursor-pointer rounded-md ${
        icon && 'flex items-center justify-center gap-2'
      }`}
    >
      <span>{icon}</span>
      {text}
    </button>
  )
}
export default OutlineButton
