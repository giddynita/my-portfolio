import { IoArrowDown } from 'react-icons/io5'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { hero } from '../../data'
import { lazy } from 'react'
import LazyLoad from 'react-lazyload'
import { TypeAnimation } from 'react-type-animation'
const Avatar = lazy(() => import('../global/Avatar'))
import avatar from '../../assets/images/giddynita.jpg'

const Hero = () => {
  const { name, profession, intro, aboutBtn, projectBtn } = hero
  return (
    <section
      id="index"
      className=" relative bg-[url('./asets/images/hero-bg.jpg')] bg-cover flex flex-col justify-center items-center gap-1 min-h-screen pt-[100px] pb-10 container"
    >
      <div className="mb-4">
        <Avatar img={avatar} />
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-wider gradient-text">
        Welcome,
      </h2>
      <LazyLoad>
        <TypeAnimation
          sequence={[name, 100, profession, 100]}
          wrapper="p"
          speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
          deletionSpeed={{ type: 'keyStrokeDelayInMs', value: 200 }}
          style={{
            whiteSpace: 'pre-line',
            fontWeight: '600',
            marginBlock: '0.4rem 0.2rem',
            textAlign: 'center',
            fontSize: '1.5rem',
          }}
          repeat={5}
        />
      </LazyLoad>

      <p className="font-medium text-center text-sm sm:text-base text-muted-foreground max-w-xl">
        {intro}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center my-6">
        <AnchorLink href="#projects">
          <button
            type="button"
            className="gradient-primary hover:scale-101 transition-all duration-300 hover-glow-primary text-white font-semibold px-8 py-3 text-lg cursor-pointer rounded-md"
          >
            {projectBtn}
          </button>
        </AnchorLink>
        <AnchorLink href="#contact">
          <button
            type="button"
            className="border border-primary/50 hover:border-primary hover-glow-accent hover:bg-primary/10 hover:scale-101 transition-all duration-300 px-8 py-3 text-lg font-semibold cursor-pointer rounded-md"
          >
            {aboutBtn}
          </button>
        </AnchorLink>
      </div>
      <AnchorLink href="#about">
        <IoArrowDown className="absolute  bottom-2 left-1/2 -translate-x-1/2  animate-bounce text-2xl w-6 h-6 text-accent" />
      </AnchorLink>
    </section>
  )
}
export default Hero
