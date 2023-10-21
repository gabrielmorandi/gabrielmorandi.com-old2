import React from "react"

import DictionaryWeb from "../../src/assets/imgs/Dictionary Web.png"
import DesignoWebsite from "../../src/assets/imgs/Designo Website.png"
import ProductFeedback from "../../src/assets/imgs/Product Feedback.png"
import TypemasterPrelaunchLandingPage from "../../src/assets/imgs/Typemaster Pre-launch Landing Page.png"
import Cofferroasters from "../../src/assets/imgs/Coffeeroasters.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container-flex">
        <a
          href="https://morandi-dictionary-web-app.netlify.app/"
          className="card"
        >
          <img src={DictionaryWeb} alt="Dictionary Web" />
          <h2>Dicionário Web</h2>
          <div className="categories">
            <span className="category">React</span>
            <span className="category">TypeScript</span>
            <span className="category">Sass</span>
            <span className="category">Api</span>
          </div>
        </a>
        <a
          href="https://gabrielmorandi.github.io/exerciseFrontend/FrontendMentor/designo-multi-page-website/starter-code/"
          className="card"
        >
          <img src={DesignoWebsite} alt="Designo Website" />
          <h2>Designo Website</h2>
          <div className="categories">
            <span className="category">Html</span>
            <span className="category">JavaScript</span>
            <span className="category">Sass</span>
          </div>
        </a>
        <a
          href="https://gabrielmorandi.github.io/exerciseFrontend/FrontendMentor/product-feedback-app/starter-code/"
          className="card"
        >
          <img src={ProductFeedback} alt="Product Feedback" />
          <h2>Feedback de Produto</h2>
          <div className="categories">
            <span className="category">Html</span>
            <span className="category">JavaScript</span>
            <span className="category">Sass</span>
            <span className="category">Api</span>
          </div>
        </a>
        <a
          href="https://gabrielmorandi.github.io/exerciseFrontend/FrontendMentor/Typemaster%20pre-launch%20landing%20page/starter-code/"
          className="card"
        >
          <img
            src={TypemasterPrelaunchLandingPage}
            alt="Typemaster Pre-launch "
          />
          <h2>Typemaster Pré-lançamento</h2>
          <div className="categories">
            <span className="category">Html</span>
            <span className="category">Sass</span>
          </div>
        </a>
        <a href="https://cofeeroasters-morandi.netlify.app/" className="card">
          <img src={Cofferroasters} alt="Coffeeroasters subscription" />
          <h2>Coffeeroasters Website</h2>
          <div className="categories">
            <span className="category">Next.js</span>
            <span className="category">Sass</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Portfolio
