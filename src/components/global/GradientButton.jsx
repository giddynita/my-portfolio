const GradientButton = ({ text, type, icon }) => {
  return (
    <button
      type={type}
      className={`w-full gradient-primary py-3 hover:scale-101 transition-all duration-300 hover-glow-primary text-white font-semibold text-lg cursor-pointer rounded-md ${
        icon && 'flex items-center justify-center gap-2'
      }`}
    >
      <span>{icon}</span>
      {text}
    </button>
  )
}
export default GradientButton
