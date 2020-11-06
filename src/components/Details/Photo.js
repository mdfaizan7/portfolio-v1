import React, { useState } from "react"
import VizSensor from "react-visibility-sensor"

import Fade from "@material-ui/core/Fade"

import myPhoto from "../../images/my-photo.png"

const Photo = () => {
  const [photoViz, setPhotoViz] = useState(false)

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setPhotoViz(isVisible)
      }}
    >
      <Fade in={photoViz}>
        <div className="photo">
          <div className="h1">photo</div>
          <img src={myPhoto} alt="Faizan" className="pht" />
        </div>
      </Fade>
    </VizSensor>
  )
}

export default Photo
