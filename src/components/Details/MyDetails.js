import React, { useState } from "react"
import VizSensor from "react-visibility-sensor"
import {
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaAngellist,
  FaLinkedinIn,
} from "react-icons/fa"
import Grid from "@material-ui/core/Grid"
import Slide from "@material-ui/core/Slide"

const MyDetails = () => {
  const [visible, setVisiblility] = useState(false)

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setVisiblility(isVisible)
      }}
    >
      <div className="mydetails">
        <Slide direction="left" timeout={1000} in={visible}>
          <div>
            <div className="h1">Personal Information</div>
            <div className="info">
              <div className="name">Mohammad Faizan Azim</div>

              <div className="det-container">
                <Grid container direction="column" className="detail">
                  <Grid item className="det-title">
                    Email:
                  </Grid>
                  <Grid item className="det-ans">
                    faizaanazim@gmail.com <br /> faizan.azim@bitdurg.ac.in
                  </Grid>
                </Grid>

                <Grid container direction="column" className="detail">
                  <Grid item className="det-title">
                    Languages:
                  </Grid>
                  <Grid item className="det-ans">
                    English. Hindi, Urdu
                  </Grid>
                </Grid>

                <Grid container direction="column" className="detail">
                  <Grid item className="det-title">
                    Tools:
                  </Grid>
                  <Grid item className="det-ans">
                    React.js, React Native, MongoDB, GraphQL, GoFibre, Express,
                    Node, Postgres, FastAI, Linux
                  </Grid>
                </Grid>

                <Grid container direction="column" className="detail">
                  <Grid item className="det-title">
                    Programming Languages:
                  </Grid>
                  <Grid item className="det-ans">
                    JavaScript, Python, Go (Golang), TypeScript
                  </Grid>
                </Grid>

                <Grid container direction="column" className="detail">
                  <Grid item className="det-title">
                    Areas of Interest:
                  </Grid>
                  <Grid item className="det-ans">
                    Football, Cricket, Open Source
                  </Grid>
                </Grid>

                <Grid container direction="column" className="detail">
                  <Grid item className="det-title">
                    Country:
                  </Grid>
                  <Grid item className="det-ans">
                    India{" "}
                    <span role="img" aria-label="India">
                      🇮🇳
                    </span>
                  </Grid>
                </Grid>

                <div class="social-buttons">
                  <a
                    href="https://www.linkedin.com/in/mohammad-faizan-azim-8a84b1142/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-buttons__button social-button social-button--linkedin"
                    aria-label="LinkedIn"
                  >
                    <span class="social-button__inner">
                      <FaLinkedinIn className="icons" />
                    </span>
                  </a>
                  <a
                    href="https://github.com/mdfaizan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-buttons__button social-button social-button--github"
                    aria-label="Github"
                  >
                    <span class="social-button__inner">
                      <FaGithub className="icons" />
                    </span>
                  </a>
                  <a
                    href="https://t.me/mdfaizan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-buttons__button social-button social-button--telegram"
                    aria-label="Telegram"
                  >
                    <span class="social-button__inner">
                      <FaTelegramPlane className="icons" />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/md_faizan7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-buttons__button social-button social-button--instagram"
                    aria-label="Instagram"
                  >
                    <span class="social-button__inner">
                      <FaInstagram className="icons" />
                    </span>
                  </a>
                  <a
                    href="https://angel.co/u/mdfaizan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="social-buttons__button social-button social-button--angel"
                    aria-label="Angel"
                  >
                    <span class="social-button__inner">
                      <FaAngellist className="icons" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </VizSensor>
  )
}

export default MyDetails
