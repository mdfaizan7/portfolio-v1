import React, { useState, useEffect } from "react"
import Particles from "react-particles-js"

const Particle = () => {
  const [size, setSize] = useState({
    width: ``,
    height: ``,
  })

  useEffect(() => {
    window.addEventListener("resize", () =>
      setSize({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`,
      })
    )

    setSize({
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
    })
  }, [])

  return (
    <div style={styles.particleContainer}>
      <Particles
        height={size.height}
        width={size.width}
        params={{
          particles: {
            number: {
              value: 48,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            color: {
              value: "fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "fff",
              },
            },
            opacity: {
              value: 0,
              random: true,
              anim: {
                enable: true,
                speed: 20,
                opacity_min: 1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable_auto: true,
              distance: 150,
              color: "#777",
              opacity: 1,
              width: 1,
              condensed_mode: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
              },
              onclick: {
                enable: true,
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  )
}

const styles = {
  particleContainer: {
    backgroundColor: "#000000",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) -10%, rgba(0,0,0,0.5) 0%), url(https://i.imgur.com/KykDOW7.jpg)",
    overflow: "hidden",
  },
}

export default Particle
