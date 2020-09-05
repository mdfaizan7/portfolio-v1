import React from "react"
import Particles from "./Particles"
import Typewriter from "./Typewriter"
import Grid from "@material-ui/core/Grid"
import { BsDownload } from "react-icons/bs"

import Slide from "@material-ui/core/Slide"

import "../../styles/splash.scss"

const RenderSplash = props => {
  return (
    <div>
      <Particles />
      <div className="headContainer">
        <Slide in={true} timeout={1000} className="name">
          <div>Mohammad Faizan Azim</div>
        </Slide>
        <div className="details">
          <Typewriter>
            Full Stack Development, Open Source Contribution, Deep Learning
          </Typewriter>
        </div>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1yzaF10pnXA-NaMs5nG_lblcQFPaJUqNF/view?usp=sharing"
          className="button"
        >
          <button className="button">
            <Grid container alignItems="center" justify="space-evenly">
              <Grid item>
                <BsDownload className="downloadicon" />
              </Grid>
              <Grid item>Download My Resume</Grid>
            </Grid>
          </button>
        </a>
      </div>
    </div>
  )
}

export default RenderSplash
