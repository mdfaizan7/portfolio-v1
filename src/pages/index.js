import React from "react"

import SEO from "../components/seo"
import Splash from "../components/Splash"
import Details from "../components/Details"
import Journey from "../components/Journey"
import Skills from "../components/Skills"

import "../styles/App.scss"

const IndexPage = () => (
  <div className="App">
    <SEO title="Home" />
    <Splash />
    <Details />
    <Journey />
    <Skills />
  </div>
)

export default IndexPage
