import React, { useState, useEffect } from "react"

const Typewriter = ({ children }) => {
  let typeAnimations = []
  const [string, setString] = useState("")
  useEffect(() => {
    for (let i = 0; i <= children.length; i++) {
      typeAnimations.push(children.slice(0, i))
    }

    for (let i = 0; i < typeAnimations.length; i++) {
      setTimeout(() => {
        setString(typeAnimations[i])
      }, i * 150)
    }
  }, [])

  return (
    <div>
      {string}
      <span className="blinking-cursor">|</span>
    </div>
  )
}

export default Typewriter
