import React from "react"
import gsap from "gsap"

import ArrowUpRight from "../../src/assets/icons/arrow-up-right.svg"

const Header = () => {
  return (
    <header>
      <div className="container-flex">
        <nav>
          <div className="logo">
            <a href="https://gabrielmorandi.com">
              <h1>
                G<span>abriel</span> M<span>orandi</span>
              </h1>
            </a>
            <h2>Desenvolvedor Web</h2>
          </div>
          <div className="lang">
            <a href="https://gabrielmorandi.com/en">EN</a>
            <img src={ArrowUpRight} alt="Select Language" />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
