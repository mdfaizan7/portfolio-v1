import React from "react"

const Mac = ({ img }) => {
  return (
    <div class="marvel-device macbook">
      <div class="top-bar"></div>
      <div class="screen">
        <img src={img} alt="project-img" width="100%" height="100%" />
      </div>
      <div class="bottom-bar"></div>
    </div>
  )
}

export default Mac
