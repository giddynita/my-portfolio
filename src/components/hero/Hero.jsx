import { IoArrowDown } from 'react-icons/io5'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import LazyLoad from 'react-lazyload'
import { TypeAnimation } from 'react-type-animation'
import GradientButton from '../global/GradientButton'
import OutlineButton from '../global/OutlineButton'
import { useHeroContent } from '../../hooks'
import Avatar from '../global/Avatar'

const Hero = () => {
  const { data: hero, isLoading } = useHeroContent()

  return (
    <section
      id="hero"
      className=" relative flex flex-col justify-center items-center gap-1 min-h-screen pt-[100px] pb-10 container"
    >
      <div className="mb-4">
        <Avatar img={hero?.image?.fields?.file?.url} isLoading={isLoading} />
      </div>

      <h2 className="text-3xl md:text-5xl font-bold tracking-wider gradient-text">
        Welcome,
      </h2>
      {!isLoading && (
        <LazyLoad>
          <TypeAnimation
            sequence={[hero?.name, 100, hero?.profession, 100]}
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
      )}

      <p className="font-medium text-center text-sm sm:text-lg text-muted-foreground max-w-xl">
        {hero?.intro}
      </p>
      {hero?.projectBtn && hero?.aboutBtn && (
        <div className="flex flex-col sm:flex-row gap-4 items-center my-6">
          <AnchorLink href="#projects" className="w-64">
            <GradientButton text={hero?.projectBtn} type="button" />
          </AnchorLink>
          <AnchorLink href="#contact" className="w-64">
            <OutlineButton text={hero?.aboutBtn} type="button" />
          </AnchorLink>
        </div>
      )}

      <AnchorLink href="#about">
        <span className="sr-only">about</span>
        <IoArrowDown className="absolute  bottom-2 left-1/2 -translate-x-1/2  animate-bounce text-2xl w-6 h-6 text-accent" />
      </AnchorLink>
    </section>
  )
}
export default Hero
