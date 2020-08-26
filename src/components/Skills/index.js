import React, { useState } from "react"
import VizSensor from "react-visibility-sensor"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Grow from "@material-ui/core/Grow"

import SkillCard from "./SkillCard"
import items from "./skills"

import "../../styles/skills.scss"

const Skills = () => {
  const [visible, setVisiblility] = useState(false)

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setVisiblility(isVisible)
      }}
    >
      <Grow in={visible} timeout={1000}>
        <div className="skills">
          <div className="head">My Skills</div>

          <div className="sub">
            Tools and Technologies I generally work with
          </div>
          <Container>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              {items.map(({ url, caption }) => (
                <Grid item xs={2} key={url}>
                  <SkillCard url={url} caption={caption} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      </Grow>
    </VizSensor>
  )
}

export default Skills
