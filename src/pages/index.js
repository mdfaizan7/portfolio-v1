import React from "react"

import SEO from "../components/seo"
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

    <SEO title="Home" />
    <Splash />
    <Details />
    <Journey />
    <Projects />
    <Skills />
    <Contact />
  </div>
)

export default IndexPage
