import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout, Error, Landing } from './pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { loader } from './pages/Landing'
import AppContext from './assets/globalContext'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: loader(queryClient),
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
