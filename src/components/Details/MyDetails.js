import React, { useState } from "react"
import VizSensor from "react-visibility-sensor"
import {
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
  FaAngellist,
  FaLinkedinIn,
} from "react-icons/fa"
import { SiDevDotTo } from "react-icons/si"
import Grid from "@material-ui/core/Grid"
import Slide from "@material-ui/core/Slide"

const details = [
  {
    link: "https://www.linkedin.com/in/mohammad-faizan-azim-8a84b1142/",
    label: "linkedin",
    icon: <FaLinkedinIn className="icons" />,
  },
  {
    link: "https://github.com/mdfaizan7",
    label: "github",
    icon: <FaGithub className="icons" />,
  },
  {
    link: "https://github.com/mdfaizan7",
    label: "telegram",
    icon: <FaTelegramPlane className="icons" />,
  },
  {
    link: "https://dev.to/mdfaizan7",
    label: "angel",
    icon: <SiDevDotTo className="icons" />,
  },
  {
    link: "https://github.com/mdfaizan7",
    label: "instagram",
    icon: <FaInstagram className="icons" />,
  },
  {
    link: "https://github.com/mdfaizan7",
    label: "angel",
    icon: <FaAngellist className="icons" />,
  },
]

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

                <div className="social-buttons">
                  {details.map(({ icon, label, link }) => (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-buttons__button social-button social-button--${label}`}
                      aria-label={label}
                    >
                      <span className="social-button__inner">{icon}</span>
                    </a>
                  ))}
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
