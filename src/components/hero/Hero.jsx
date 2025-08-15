import { IoArrowDown } from 'react-icons/io5'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LazyLoad from 'react-lazyload'
import { TypeAnimation } from 'react-type-animation'
import GradientButton from '../global/GradientButton'
import OutlineButton from '../global/OutlineButton'
import { heroData } from '../../data'
import heroImage from '../../assets/images/background.webp'

const Hero = () => {
  const { name, profession, intro } = heroData

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[100px] pb-10 flex items-center justify-center"
    >
      <div className="absolute inset-0 z-10">
        <img
          src={heroImage}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      <div className="space-y-8 flex flex-col items-center justify-center container z-30 animate-fade-in">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-wider gradient-text text-center">
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
        </div>

        <p className="font-medium text-center text-sm sm:text-lg text-muted-foreground max-w-xl">
          {intro}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center my-6">
          <AnchorLink href="#projects" className="w-64">
            <GradientButton text="View My Work" type="button" />
          </AnchorLink>
          <AnchorLink href="#contact" className="w-64">
            <OutlineButton text="Get in Touch" type="button" />
          </AnchorLink>
        </div>

        <AnchorLink href="#about">
          <span className="sr-only">about</span>
          <IoArrowDown className="absolute  bottom-2 left-1/2 -translate-x-1/2  animate-bounce text-2xl w-6 h-6 text-accent" />
        </AnchorLink>
      </div>
    </section>
  )
}
export default Hero
