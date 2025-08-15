import { Suspense } from 'react'
import LazyLoad from 'react-lazyload'

export const sectionSuspense = (Component) => (
  <LazyLoad>
    <Suspense
      fallback={
        <div className="container h-[50vh] flex items-center justify-center">
          <span className="loading loading-spin loading-sm "></span>
        </div>
      }
    >
      {Component}
    </Suspense>
  </LazyLoad>
)
