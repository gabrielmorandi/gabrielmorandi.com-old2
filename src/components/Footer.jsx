import React from "react"

import Whatsapp from "../../src/assets/icons/whatsapp-icon.svg"
import GithubIcon from "../../src/assets/icons/github-icon.svg"
import InstagramIcon from "../../src/assets/icons/instagram-icon.svg"
import LinkedinIcon from "../../src/assets/icons/linkedin-icon.svg"

import ArrowUpRight from "../../src/assets/icons/arrow-up-right.svg"

const Footer = () => {
  return (
    <footer>
      <div className="container-flex">
        <div className="contact">
          <div className="cont">
            <h2>Contato</h2>
            <div className="mail">
              <a href="mailto:gabriel.morandi.mello@gmail.com?subject=Let's Get Started!">
                gabriel.morandi.mello@gmail.com
              </a>
              <img src={ArrowUpRight} alt="Email" />
            </div>
          </div>
          <div className="socials">
            <a href="https://wa.me/5594992644225">
              <img src={Whatsapp} alt="Link do meu Whatsapp" />
            </a>
            <a href="https://github.com/gabrielmorandi">
              <img src={GithubIcon} alt="Link do meu Github" />
            </a>
            <a href="https://www.instagram.com/morandi_gabriel/">
              <img src={InstagramIcon} alt="Link do meu Instagram" />
            </a>
            <a href="https://www.linkedin.com/in/gabrielmorandi/">
              <img src={LinkedinIcon} alt="Link do meu LinkedIn" />
            </a>
          </div>
        </div>
        <div className="credit">
          <h2>
            <span>©2021, </span>G<span>abriel </span>M<span>orandi.</span>
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
