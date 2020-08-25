import React, { useState } from "react"
import Particles from "./Particles"
import VizSensor from "react-visibility-sensor"

import Slide from "@material-ui/core/Slide"
import Grow from "@material-ui/core/Grow"

import "../../styles/splash.scss"

const RenderSplash = props => {
  const [show, setShow] = useState(false)

  return (
    <div>
      <Particles />
      <VizSensor partialVisibility onChange={isVisible => setShow(isVisible)}>
        <div className="headContainer">
          <Slide in={show} timeout={1000} className="name">
            <div>Mohammad Faizan Azim</div>
          </Slide>
          <Grow in={show} className="details">
            <div>
              Full Stack Development, Open Source Contribution, Deep Learning
            </div>
          </Grow>
        </div>
      </VizSensor>
    </div>
  )
}

export default RenderSplash
