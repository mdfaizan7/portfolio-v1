import React from "react"

import SEO from "../components/seo"
import Splash from "../components/Splash"
import Details from "../components/Details"
import Journey from "../components/Journey"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

import "../styles/App.scss"

const IndexPage = () => (
  <div className="App">
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossOrigin="anonymous"
    />
    <SEO title="Home" />
    <Splash />
    <Details />
    <Journey />
    <Skills />
    <Projects />
  </div>
)

export default IndexPage
