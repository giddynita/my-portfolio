const Avatar = ({ img, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <figure className="w-30 h-30 md:w-38 md:h-38 rounded-full flex items-center justify-center border-4 border-primary/20 mb-4">
          <p className="text-3xl font-bold gradient-text"> G.O </p>
        </figure>
      ) : (
        <figure className="w-30 h-30 md:w-38 md:h-38 rounded-full border-4 border-primary/20">
          <img
            src={`${img}?w=112&h=112&fit=thumb`}
            srcSet={`
      ${img}?w=112&h=112&fit=thumb 1x,
      ${img}?w=224&h=224&fit=thumb 2x
    `}
            sizes="(max-width: 768px) 112px, 224px"
            alt="Gideon Onita"
            width={112}
            height={112}
            className="rounded-full aspect-square object-cover"
            decoding="async"
          />
        </figure>
      )}
    </>
  )
}
export default Avatar
