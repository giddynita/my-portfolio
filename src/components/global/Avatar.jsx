import { Suspense } from 'react'

const Avatar = ({ img }) => {
  return (
    <Suspense
      fallback={
        <figure className="w-30 h-30 md:w-38 md:h-38 rounded-full flex items-center justify-center border-4 border-primary/20 mb-4">
          <p className="text-3xl font-bold gradient-text"> G.O </p>
        </figure>
      }
    >
      <figure className="w-30 h-30 md:w-38 md:h-38 rounded-full border-4 border-primary/20">
        <img
          src={img}
          alt="Gideon Onita"
          loading="lazy"
          width={250}
          height={250}
          className="rounded-full w-full h-full object-cover "
        />
      </figure>
    </Suspense>
  )
}
export default Avatar
