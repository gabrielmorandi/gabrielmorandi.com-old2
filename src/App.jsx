import { useState, useEffect, useRef } from "react"
import PreLoarder from "./components/PreLoarder"
import { gsap } from "gsap"

import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"

import "./assets/fonts/BespokeSans_Complete/Fonts/WEB/css/bespoke-sans.css"
import "./assets/fonts/BespokeStencil_Complete/Fonts/WEB/css/bespoke-stencil.css"
import "./styles/css/index.css"

import ArrowUpRightCursor from "./assets/icons/arrow-up-right-cursor.svg"

function App() {
  const [loading, setLoading] = useState(true)
  const mainContent = useRef(null)
  const cursor = useRef(null)
  const cursorArrow = useRef(null)

  useEffect(() => {
    if (!loading) {
      gsap.fromTo(
        mainContent.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 1.5 }
      )
    }

    const moveCursor = (e) => {
      gsap.to(cursor.current, { x: e.clientX, y: e.clientY, duration: 0 })
    }
    window.addEventListener("mousemove", moveCursor)

    const enlargeCursor = () => {
      gsap.to(cursor.current, { padding: 10, duration: 0.2 })
      gsap.to(cursorArrow.current, { scale: 1, duration: 0.2 })
    }

    const resetCursor = () => {
      gsap.to(cursor.current, { padding: 1, duration: 0.2 })
      gsap.to(cursorArrow.current, { scale: 0, duration: 0.2 })
    }

    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
      card.addEventListener("mouseenter", enlargeCursor)
      card.addEventListener("mouseleave", resetCursor)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", enlargeCursor)
        card.removeEventListener("mouseleave", resetCursor)
      })
    }
  }, [loading])

  return (
    <>
      {loading && <PreLoarder setLoading={setLoading} />}
      <div className="cursor" ref={cursor}>
        <img
          src={ArrowUpRightCursor}
          alt="ArrowUpRightCursor"
          ref={cursorArrow}
        />
      </div>
      <main ref={mainContent} className={loading ? "hidden" : ""}>
        <Header />
        <Portfolio />
        <Footer />
      </main>
    </>
  )
}

export default App
