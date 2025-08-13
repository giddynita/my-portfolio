import { Link, useRouteError } from 'react-router-dom'
import pageNotFound from '../assets/images/page_not_found.svg'

const Error = () => {
  const error = useRouteError()
  console.log(error.message)
  if (error.status === 404) {
    return (
      <div className="h-screen flex flex-col gap-y-8 items-center justify-center">
        <img src={pageNotFound} alt="pageNotFound" className=" w-1/3" />
        <h3 className="text-xl font-bold">This page can't be found</h3>
        <Link to="/" className="text-secondary text-lg font-medium">
          Return to home
        </Link>
      </div>
    )
  }
  return (
    <div className="h-screen flex flex-col gap-y-8 items-center justify-center">
      <h3 className="text-xl font-bold">Something went wrong</h3>
    </div>
  )
}
export default Error
