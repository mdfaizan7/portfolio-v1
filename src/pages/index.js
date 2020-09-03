import React from "react"
import Grid from "@material-ui/core/Grid"

import Splash from "../components/Splash"
import Details from "../components/Details"
import Journey from "../components/Journey"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import "../styles/App.scss"

const IndexPage = () => (
  <div className="App">
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <Splash />
    <Details />
    <Journey />
    <Projects />
    <Skills />
    <Contact />

    <footer>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>© 2020 Mohammad Faizan Azim</Grid>
        <Grid item>
          Made with{" "}
          <span role="img" aria-label="love">
            {" "}
            ❤️
          </span>{" "}
          and Gatsby
        </Grid>
      </Grid>
    </footer>
  </div>
)

export default IndexPage
