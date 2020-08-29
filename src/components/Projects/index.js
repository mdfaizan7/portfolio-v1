import React from "react"
import {
  SiReact,
  SiJavascript as JS,
  SiRedux as Redux,
  SiGraphql as Gql,
  SiApollographql as Apollo,
  SiFirebase as Firebase,
  SiMongodb as Mongodb,
  SiVueDotJs as Vue,
  SiGatsby as Gatsby,
  SiBootstrap as Bootstrap,
  SiMarkdown as MD,
  SiJupyter as Jupyter,
  SiPython as Python,
} from "react-icons/si"

import { FaNode as Node } from "react-icons/fa"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

import Mac from "./Mac"

import "../../styles/projects.scss"

const projects = [
  {
    title: "BitConnect",
    desc: "BitConnect is a open source social media app hosted on Firebase.",
    image: "https://i.imgur.com/DaXxIRQ.png",
    tools: [<JS />, <SiReact />, <Node />, <Redux />, <Firebase />],
  },
  {
    title: "Bit Blogs",
    desc: "Bit Blogs is a fictious blog application made with GatsbyJS.",
    image: "https://i.imgur.com/PBQaOtk.png",
    tools: [<JS />, <SiReact />, <Gatsby />, <MD />],
  },
  {
    title: "Sorting Visualizer",
    desc:
      "This is a sorting visualizer. You can run this app to see how different sorting techniques work.",
    image: "https://i.imgur.com/LbrmdL1.png",
    tools: [<JS />, <SiReact />],
  },
  {
    title: "Sorting Visualizer",
    desc:
      "This is a sorting visualizer. You can run this app to see how different sorting techniques work.",
    image: "https://i.imgur.com/nUZvDRo.png",
    tools: [<JS />, <SiReact />],
  },
  {
    title: "Sorting Visualizer",
    desc:
      "This is a sorting visualizer. You can run this app to see how different sorting techniques work.",
    image:
      "https://silly-allen-17594e.netlify.app/static/bit-connect-03b7c7bd57f7c71a21f7a0e1477c807e.png",
    tools: [<JS />, <SiReact />],
  },
]

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index)
  }

  return (
    <div style={{ background: "#222", padding: "30px" }}>
      <Container>
        <Grid container alignItems="center" justify="space-between">
          <Grid item lg={6} xs={12}>
            <List className="list">
              {projects.map((item, index) => {
                return (
                  <>
                    <ListItem
                      button
                      selected={selectedIndex === index}
                      onClick={event => handleListItemClick(event, index)}
                    >
                      <ListItemText
                        className={`${
                          selectedIndex === index ? "selected" : ""
                        }`}
                        disableTypography
                      >
                        <div className="title">{item.title}</div>
                        <div className="des">{item.desc}</div>
                      </ListItemText>
                    </ListItem>
                    {index < projects.length - 1 && (
                      <hr style={{ margin: 0 }} />
                    )}
                  </>
                )
              })}
            </List>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Mac img={projects[selectedIndex].image} />
            <div className="icons">
              {projects[selectedIndex].tools.map(item => (
                <span className="ico">{item}</span>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Projects
