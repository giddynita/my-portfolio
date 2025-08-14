import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Logo() {
  return (
    <h1 className={`font-bold tracking-wide text-xl hover:scale-105`}>
      <AnchorLink href="#hero" className="gradient-text">
        giddynita
      </AnchorLink>
    </h1>
  )
}
export default React.memo(Logo)
