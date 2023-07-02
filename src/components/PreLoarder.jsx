// PreLoader
import React, { useEffect, useRef } from "react"

import { gsap } from "gsap"

const PreLoarder = ({ setLoading }) => {
  const preloader = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(preloader.current, {
        autoAlpha: 0,
        duration: 0.5,
        onComplete: () => setLoading(false),
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [setLoading])

  return (
    <div ref={preloader} className="pre-loader">
      <div className="container-grid">
        <p className="t1">
          G<span>abriel</span> M<span>orandi</span>
        </p>
        <p className="t2">Portfólio</p>
      </div>
    </div>
  )
}

export default PreLoarder
