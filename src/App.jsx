import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout, Error, Landing } from './pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppContext from './assets/globalContext'

const queryClient = new QueryClient()

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
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </QueryClientProvider>
  )
}
export default App
