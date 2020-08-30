import React from "react"
import VizSensor from "react-visibility-sensor"
import Slide from "@material-ui/core/Slide"

const Mac = ({ img, tools }) => {
  const [visible, setVisiblility] = React.useState(false)

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setVisiblility(isVisible)
      }}
    >
      <div style={{ overflow: "hidden" }}>
        <Slide in={visible} direction="left" timeout={1000}>
          <div>
            <div class="marvel-device macbook">
              <div class="top-bar"></div>
              <div class="screen">
                <img src={img} alt="project-img" width="100%" height="100%" />
              </div>
              <div class="bottom-bar"></div>
            </div>
            <div className="icons">
              {tools && tools.map(item => <span className="ico">{item}</span>)}
            </div>
          </div>
        </Slide>
      </div>
    </VizSensor>
  )
}

export default Mac
