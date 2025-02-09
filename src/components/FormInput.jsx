const FormInput = ({ type, name, id, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className=" p-3 lg:w-1/2  border border-base-300 focus:border-primary focus:outline-none bg-base-300 "
      required
    />
  )
}
export default FormInput
