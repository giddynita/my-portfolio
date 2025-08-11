import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import LazyLoad from 'react-lazyload'
import Loading from './components/global/Loading'
const Layout = lazy(() => import('./pages/Layout'))
const Index = lazy(() => import('./pages/Index'))
const Projects = lazy(() => import('./pages/Projects'))
const Error = lazy(() => import('./pages/Error'))

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
    element: (
      <LazyLoad>
        <Layout />
      </LazyLoad>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Index />
          </Suspense>
        ),
      },
      {
        path: 'projects/:project_name',
        element: (
          <Suspense fallback={<Loading />}>
            <Projects />
          </Suspense>
        ),
      },
    ],
  },
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </QueryClientProvider>
  )
}
export default App
