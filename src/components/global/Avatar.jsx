const Avatar = ({ img, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <figure className="w-34 h-34 rounded-full flex items-center justify-center border-4 border-primary/20 mb-4">
          <p className="text-3xl font-bold gradient-text"> G.O </p>
        </figure>
      ) : (
        <figure className="w-34 h-34 rounded-full border-4 border-primary/20">
          <img
            src={img}
            alt="Gideon Onita"
            width={136}
            height={136}
            className="rounded-full aspect-square object-fit"
            loading="eager"
            fetchpriority="high"
          />
        </figure>
      )}
    </>
  )
}
export default Avatar
