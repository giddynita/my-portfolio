import { Link, useRouteError } from 'react-router-dom'
import pageNotFound from '../assets/images/page_not_found.svg'
import GradientButton from '../components/global/GradientButton'
import OutlineButton from '../components/global/OutlineButton'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <div className="min-h-screen flex flex-col gap-y-8 items-center justify-center py-20">
        <img src={pageNotFound} alt="pageNotFound" className=" w-1/3" />
        <h3 className="text-xl font-bold">This page can't be found</h3>
        <Link to="/" className="text-secondary text-lg font-medium w-48">
          <GradientButton text="Back to Home" type="button" />
        </Link>
      </div>
    )
  }
  return (
    <div className="min-h-screen flex flex-col gap-y-8 items-center justify-center py-16">
      <h3 className="text-xl font-bold">Something went wrong</h3>
      <a href={window.location.href} className="w-48">
        <OutlineButton text="Reload Page" type="button" />
      </a>
    </div>
  )
}
export default Error
