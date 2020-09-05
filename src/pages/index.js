import React from "react"
import Grid from "@material-ui/core/Grid"
import { Helmet } from "react-helmet"

import Splash from "../components/Splash"
import Details from "../components/Details"
import Journey from "../components/Journey"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

import "../styles/App.scss"

const IndexPage = () => (
  <div className="App">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Mohammad Faizan Azim</title>
    </Helmet>
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
