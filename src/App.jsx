import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout, Error, Landing } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
