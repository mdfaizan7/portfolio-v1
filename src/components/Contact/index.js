import React from "react"
import { FaPaperPlane } from "react-icons/fa"
import Grid from "@material-ui/core/Grid"

import "../../styles/contact.scss"

const ContactMe = () => {
  return (
    <div className="contact">
      <div className="h1">
        ok, let’s create <br /> something great
      </div>
      <div className="sub">
        If you like my work and have some cool project to work on or want to
        work together, just send me direct message or contact me through social
        sites listed below.
      </div>
      <a id="send-mail" className="button" href="mailto:faizaanazim@gmail.com">
        <button className="button">
          <Grid container alignItems="center" justify="space-evenly">
            <Grid item>
              <FaPaperPlane className="sendicon" />
            </Grid>
            <Grid item>Get in touch</Grid>
          </Grid>
        </button>
      </a>

      <div className="social-links-container">
        <ul>
          <li>
            <a href="https://t.me/mdfaizan7">Telegram</a>
          </li>
          <li>
            <a href="https://www.instagram.com/md_faizan7/">Instagram</a>
          </li>
          <li>
            <a href="https://angel.co/u/mdfaizan7">Angel.co</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohammad-faizan-azim-8a84b1142/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/mdfaizan7">Github</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactMe
