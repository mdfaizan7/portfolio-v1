import React from "react"

import SEO from "../components/seo"
import Splash from "../components/Splash"
import Details from "../components/Details"

import "../styles/App.scss"

const IndexPage = () => (
  <div className="App">
    <SEO title="Home" />
    <Splash />
    <Details />
  </div>
)

export default IndexPage
