import React, { useState } from "react"
import Particles from "./Particles"
import Typewriter from "./Typewriter"

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
      </div>
    </div>
  )
}

export default RenderSplash
