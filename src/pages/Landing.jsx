import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'

const Landing = () => {
  const { recentProfile } = useContext(GlobalContext)
  return (
    <div /* className="hero h-screen absolute top-0 bg-[url('./assets/images/bg-image.jpg')] bg-bottom bg-cover" */
    >
      <div /* className="absolute h-screen w-screen top-0 bg-neutral/35" */
      ></div>
      <h3 className=" w-max text border-r-6 border-secondary ">
        {recentProfile}
      </h3>
    </div>
  )
}
export default Landing
