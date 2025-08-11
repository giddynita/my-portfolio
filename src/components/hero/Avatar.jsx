import avatar from '../../assets/images/giddynita.jpg'

const Avatar = () => {
  return (
    <figure className="w-30 h-30 md:w-38 md:h-38 rounded-full border-4 border-primary/20 mb-4">
      <img
        src={avatar}
        alt="Gideon Onita"
        loading="lazy"
        width={300}
        height={300}
        className="rounded-full object-cover "
      />
    </figure>
  )
}
export default Avatar
