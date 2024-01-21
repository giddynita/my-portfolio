import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeLayout, Error, Landing } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
])
const App = () => {
  return <RouterProvider router={router} />
}
export default App
