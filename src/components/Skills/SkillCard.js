import React, { useState } from "react"
import { useSpring, animated } from "react-spring"

const calc = (x, y) => [
  (y - window.innerHeight / 2) / 20,
  -(x - window.innerWidth / 2) / 20,
  1.3,
]

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const SkillCard = ({ url, caption }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 170, friction: 26 },
  }))

  const [hovered, setHovered] = useState(0)

  return (
    <div style={{ textAlign: "center" }}>
      <animated.div
        className="skill-card"
        onMouseMove={({ clientX: x, clientY: y }) => {
          set({ xys: calc(x, y) })
        }}
        onMouseOver={() => setHovered(1)}
        onMouseLeave={() => {
          set({ xys: [0, 0, 1] })
          setHovered(0)
        }}
        style={{
          display: "inline-block",
          transform: props.xys.interpolate(trans),
        }}
      >
        <img src={url} className="card-img" alt={caption} />
        <div className="caption" style={{ opacity: hovered }}>
          {caption}
        </div>
      </animated.div>
    </div>
  )
}

export default SkillCard
