import updateText from '../assets/autoTextAnimation'

const Landing = () => {
  const { animatedText } = updateText()
  console.log(animatedText)
  return (
    <div /* className="hero h-screen absolute top-0 bg-[url('./assets/images/bg-image.jpg')] bg-bottom bg-cover" */
    >
      <div /* className="absolute h-screen w-screen top-0 bg-neutral/35" */
      ></div>
      {animatedText}
    </div>
  )
}
export default Landing
