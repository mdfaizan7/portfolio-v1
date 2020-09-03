import React from "react"
import VizSensor from "react-visibility-sensor"
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
  SiTensorflow as Tensorflow,
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
import Slide from "@material-ui/core/Slide"

import Mac from "./Mac"

import "../../styles/projects.scss"

const projects = [
  {
    title: "BitConnect",
    desc:
      "BitConnect is a open source social media app hosted on Firebase. It has React on frontend with Redu for state management with an express server on the backend.",
    image: "https://i.imgur.com/DaXxIRQ.png",
    tools: [<JS />, <SiReact />, <Node />, <Redux />, <Firebase />],
    website: "https://bitconnect-b7b67.firebaseapp.com/",
    serverRepo: "https://github.com/mdfaizan7/react-bitConnect-functions",
    clientRepo: "https://github.com/mdfaizan7/react-bitConnect-client",
  },
  {
    title: "Sorting Visualizer",
    desc:
      "This is a sorting visualizer. Implemented Merge Sort, Heap Sort, Quick Sort, Radix Sort, Insertion Sort, Bubble Sort and Selection Sort.",
    image: "https://i.imgur.com/LbrmdL1.png",
    tools: [<JS />, <SiReact />],
    website: "https://mdfaizan7.github.io/sorting-visualizer/",
    repository: "https://github.com/mdfaizan7/sorting-visualizer",
  },
  {
    title: "Chary",
    desc:
      "Chary is an anti predator chat app which detects detects predators and filters toxic messages. This was our submission for the Software India Hackathon which had the problem statement of:  Detection of Child Predators/Cyber Harassers on Social Media",
    image: "https://i.imgur.com/nUZvDRo.png",
    tools: [
      <JS />,
      <Vue />,
      <Tensorflow />,
      <Jupyter />,
      <Python />,
      <Firebase />,
    ],
    website: "https://pranjalyatiwari.kaissa.in/chary",
    repository: "https://github.com/mdfaizan7/anti-predator-chat-app",
  },
  {
    title: "Bit Posts",
    desc:
      "Bit Posts is a social media app. It has React with Apollo Server on the client side and a GraphQL API with Node on the backend.",
    image: "https://i.imgur.com/FFfDRpy.png",
    tools: [<JS />, <SiReact />, <Node />, <Gql />, <Apollo />, <Mongodb />],
    clientRepo: "https://github.com/mdfaizan7/merng-bitposts-client",
    serverRepo: "https://github.com/mdfaizan7/merng-bitposts-server",
  },
  {
    title: "Bit Blogs",
    desc: "Bit Blogs is a fictious blog application made with GatsbyJS.",
    image: "https://i.imgur.com/PBQaOtk.png",
    tools: [<JS />, <Gatsby />, <Bootstrap />, <MD />],
    website: "https://peaceful-montalcini-173481.netlify.app/",
    repository: "https://github.com/mdfaizan7/gatsby-bit-blogs",
  },
]

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [visible, setVisiblility] = React.useState(false)

  const handleListItemClick = (_, index) => {
    setSelectedIndex(index)
  }

  return (
    <div className="projects">
      <div className="head">My Projects</div>
      <div className="sub">Some of the projects that I have worked on</div>
      <Container>
        <Grid container alignItems="center" justify="center">
          <VizSensor
            partialVisibility
            onChange={isVisible => {
              setVisiblility(isVisible)
            }}
          >
            <Slide in={visible} direction="right" timeout={1000}>
              <Grid item lg={6} xs={12}>
                <List className="list">
                  {projects.map((item, index) => (
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
                  ))}
                </List>
              </Grid>
            </Slide>
          </VizSensor>
          <Grid item lg={6} xs={12}>
            <Mac
              img={projects[selectedIndex].image}
              tools={projects[selectedIndex].tools}
              website={projects[selectedIndex].website}
              clientRepo={projects[selectedIndex].clientRepo}
              serverRepo={projects[selectedIndex].serverRepo}
              repository={projects[selectedIndex].repository}
            />
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <div className="foreword">
        To see more of my works, please checkout my{" "}
        <a
          href="https://github.com/mdfaizan7"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          Github Profile
        </a>
        .
      </div>
    </div>
  )
}

export default Projects
