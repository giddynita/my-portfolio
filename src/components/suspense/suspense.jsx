import { Suspense } from 'react'
import LazyLoad from 'react-lazyload'

export const sectionSuspense = (Component) => (
  <LazyLoad>
    <Suspense fallback={<div className="container py-20" />}>
      {Component}
    </Suspense>
  </LazyLoad>
)
