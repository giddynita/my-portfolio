import { TypeAnimation } from 'react-type-animation'
import { IoArrowDownCircleOutline } from 'react-icons/io5'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { hero } from '../../data'

const Hero = () => {
  const { h1, name, profession, location, aboutBtn } = hero
  return (
    <section className=" relative bg-[url('./assets/images/hero-bg.jpg')] bg-cover flex flex-col justify-center items-center text-white gap-1 min-h-screen">
      <h1 className="text-5xl font-bold tracking-wider">{h1}</h1>
      <TypeAnimation
        sequence={[name, 100, profession, 100]}
        wrapper="h2"
        speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
        deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 100 }}
        style={{
          whiteSpace: 'pre-line',
          fontWeight: '400',
          marginBlock: '0.4rem 0.2rem',
          textAlign: 'center',
        }}
        repeat={Infinity}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl italic"
      />
      <small>{location}</small>
      <AnchorLink href="#contact">
        <button
          type=""
          className="mt-7 border-primary border-2 rounded-full py-2 px-6  hover:bg-primary text-white"
        >
          {aboutBtn}
        </button>
      </AnchorLink>
      <AnchorLink href="#about">
        <svg className="absolute bottom-2 move-down w-6 h-6 text-primary font-semibold">
          <IoArrowDownCircleOutline className="text-2xl" />
        </svg>
      </AnchorLink>
    </section>
  )
}
export default Hero
