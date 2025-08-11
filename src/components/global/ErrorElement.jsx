import { useContext } from 'react'
import { useRouteError } from 'react-router-dom'
import { GlobalContext } from '../../assets/globalContext'

const ErrorElement = () => {
  const error = useRouteError()
  const { navbar } = useContext(GlobalContext)
  console.log(error)
  return (
    <h4
      className=" text-center font-bold text-4xl text-red-500 landing mt-24 "
      style={{
        width: navbar ? '80%' : '100%',
        marginLeft: navbar ? '20%' : '0',
      }}
    >
      There was an error...
    </h4>
  )
}
export default ErrorElement
