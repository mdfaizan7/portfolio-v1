import React, { useState, useEffect } from "react"

const Typewriter = ({ children }) => {
  const [string, setString] = useState("")
  useEffect(() => {
    for (let i = 0; i <= children.length; i++) {
      setTimeout(() => {
        setString(children.slice(0, i))
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
