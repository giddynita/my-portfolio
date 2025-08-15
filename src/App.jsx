import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import LazyLoad from 'react-lazyload'
import Loading from './components/global/Loading'
import Layout from './components/layout/Layout'
import { ThemeProvider } from './components/theme/theme-provider'
const Index = lazy(() => import('./pages/Index'))
const Error = lazy(() => import('./pages/Error'))
const ThankYou = lazy(() => import('./pages/ThankYou'))

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
        path: 'thank-you',
        element: (
          <Suspense fallback={<Loading />}>
            <ThankYou />
          </Suspense>
        ),
      },
    ],
  },
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true,
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default App
