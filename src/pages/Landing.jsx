import { TypeAnimation } from 'react-type-animation'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../assets/globalContext'
import About from './About'

const Landing = () => {
  const { navbar } = useContext(GlobalContext)
  return (
    <>
      <div
        className="absolute top-0 right-0 h-screen w-screen  flex flex-col justify-center items-center text-white bg-[url('./assets/images/hero-bg.jpg')] bg-cover hero-bg"
        style={{ width: navbar ? '75%' : '100%' }}
      >
        <h1 className="text-xl ">Welcome</h1>
        <TypeAnimation
          sequence={[
            "I'm Gideon Onita.",
            100,
            "I'm a Front-end developer.",
            100,
          ]}
          wrapper="h2"
          speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          style={{
            whiteSpace: 'pre-line',
            fontSize: '2.25rem',
            fontWeight: '600',
            marginBlock: '0.4rem 0.2rem',
          }}
          repeat={Infinity}
        />
        <small>based in Lagos, Nigeria</small>
        <button
          type=""
          className="mt-7 border-primary border-2 rounded-full py-2 px-6 text-primary hover:bg-primary hover:text-white"
        >
          About Me
        </button>
        <Link to="/#about">
          <svg className=" absolute bottom-0 animate-bounce w-4 h-6 text-primary">
            <IoArrowDownCircleOutline />
          </svg>
        </Link>
      </div>
    </>
  )
}
export default Landing
