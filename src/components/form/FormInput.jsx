const FormInput = ({ type, name, id, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className=" p-3 w-full border focus:border-primary focus:outline-none rounded-lg text-sm sm:text-base placeholder:text-muted-foreground focus:border-2 "
      required
    />
  )
}
export default FormInput
