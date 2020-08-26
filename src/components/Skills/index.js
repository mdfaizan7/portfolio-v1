import React from "react"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import SkillCard from "./SkillCard"
import items from "./skills"

import "../../styles/tools.scss"

const Tools = () => {
  return (
    <div className="skills">
      <div className="head">My Skills</div>

      <div className="sub">Tools and Technologies I generally work with</div>
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
  )
}

export default Tools
