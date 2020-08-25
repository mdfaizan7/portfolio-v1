import React from "react"

import SEO from "../components/seo"
import Splash from "../components/Splash"
import Details from "../components/Details"
import Journey from "../components/Journey"

import "../styles/App.scss"

const IndexPage = () => (
  <div className="App">
    <SEO title="Home" />
    <Splash />
    <Details />
    <Journey />
  </div>
)

export default IndexPage
