import React from "react"
import VizSensor from "react-visibility-sensor"
import Slide from "@material-ui/core/Slide"
import Grid from "@material-ui/core/Grid"
import Img from "../../images/Image"

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
            <div className="marvel-device macbook">
              <div className="top-bar"></div>
              <div className="screen" style={{ height: "100%" }}>
                <Img
                  alt="Gatsby in Space"
                  filename={img}
                  className="loading"
                  styles={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="bottom-bar"></div>
            </div>

            <div className="links">
              <Grid container alignItems="center" justify="space-evenly">
                {links.map(
                  (item, idx) =>
                    item && (
                      <a
                        href={item}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {idx === 0
                          ? "Client Repository"
                          : idx === 1
                          ? "Website"
                          : idx === 2
                          ? "Github Repository"
                          : "Server Repository"}
                      </a>
                    )
                )}
              </Grid>
            </div>
            <div className="icons">
              {tools &&
                tools.map((item, idx) => (
                  <span key={idx} className="ico">
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </Slide>
      </div>
    </VizSensor>
  )
}

export default Mac
