import React from "react"
import VizSensor from "react-visibility-sensor"
import Slide from "@material-ui/core/Slide"
import Grid from "@material-ui/core/Grid"

const Mac = ({ img, tools, website, repository, clientRepo, serverRepo }) => {
  const [visible, setVisiblility] = React.useState(false)

  let links = [clientRepo, website, repository, serverRepo]

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

            <div className="links">
              <Grid container alignItems="center" justify="space-evenly">
                {links.map((item, idx) => {
                  if (item) {
                    return (
                      <a href={item} target="_blank" rel="noopener noreferrer">
                        {idx === 0
                          ? "Client Repository"
                          : idx === 1
                          ? "Website"
                          : idx === 2
                          ? "Github Repository"
                          : "Server Repository"}
                      </a>
                    )
                  }
                  return ''
                })}
              </Grid>
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
