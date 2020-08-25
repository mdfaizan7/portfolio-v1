import React, { useState } from "react"
import VizSensor from "react-visibility-sensor"

import Slide from "@material-ui/core/Slide"
import Grid from "@material-ui/core/Grid"

const sets = [
  {
    name: "Management",
    desc: <span>Team Manageent, Team Coordination, Project Management</span>,
  },
  {
    name: "Full Stack Development",
    desc: <span>Frontend, Backend, Database Management, Deployment</span>,
  },
  {
    name: "UI Design",
    desc: <span>User Interface, Wireframe, A/B Testing</span>,
  },
  {
    name: "Deep Learning",
    desc: <span>Computer Vision, Natural Language Processing</span>,
  },
  {
    name: "Machine Learning",
    desc: <span>Preprocessing, Regression, Classification</span>,
  },
  {
    name: "DevOps",
    desc: <span>Agile, SCRUM</span>,
  },
]

const styles = {
  hovered: {
    transition: "all ease-in-out",
    transform: "scale(2)",
    transformOrigin: "50% 50%",
    transformBox: "fill-box",
    cursor: "pointer",
  },
  circle: {
    transition: "all ease-in-out",
    "&:hover": {
      transform: "scale(2)",
      transformOrigin: "50% 50%",
      transformBox: "fill-box",
      cursor: "pointer",
    },
  },
}

function SvgComponent(props) {
  const [visible, setVisiblility] = useState(false)
  const [skillSet, setSkillSet] = useState("no")

  const renderSvg = (
    <div>
      <svg viewBox="0 0 640 640" width={300}>
        <path d="M320 0L0 160v320l320 160 320-160V160L320 0z" id="prefix__a" />
        <path
          d="M36.33 180L320 47.46l183.94 178.88 41.75 205.11L320 592.54 15.21 472.82 36.33 180z"
          id="prefix__d"
        />
        <path d="M640 160L0 480l640-320z" id="prefix__e" />
        <path d="M640 480L-3.1 160 640 480z" id="prefix__f" />
        <path
          d="M320 40L40 180v280l280 140 280-140V180L320 40z"
          id="prefix__g"
        />
        <path
          d="M320 100L100 210v220l220 110 220-110V210L320 100z"
          id="prefix__h"
        />
        <path
          d="M320 160l-160 80v160l160 80 160-80V240l-160-80z"
          id="prefix__i"
        />
        <path
          d="M320 220l-100 50v100l100 50 100-50V270l-100-50z"
          id="prefix__j"
        />
        <path d="M320 280l-40 20v40l40 20 40-20v-40l-40-20z" id="prefix__k" />
        <path d="M320 640V0" id="prefix__l" />
        <path
          d="M325.31 320.09c0 2.71-2.31 4.91-5.16 4.91-2.84 0-5.15-2.2-5.15-4.91s2.31-4.91 5.15-4.91c2.85 0 5.16 2.2 5.16 4.91z"
          id="prefix__m"
        />
        <path
          d="M550.85 432.03c0 3.89-3.08 7.04-6.87 7.04s-6.86-3.15-6.86-7.04c0-3.88 3.07-7.03 6.86-7.03 3.79 0 6.87 3.15 6.87 7.03z"
          id="prefix__n"
          style={skillSet === 3 ? styles.hovered : {}}
        />
        <path
          d="M511.86 226.01c0 3.88-3.07 7.03-6.86 7.03-3.79 0-6.86-3.15-6.86-7.03 0-3.89 3.07-7.04 6.86-7.04 3.79 0 6.86 3.15 6.86 7.04z"
          id="prefix__o"
          style={skillSet === 4 ? styles.hovered : {}}
        />
        <path
          d="M326.86 47.97c0 3.88-3.07 7.03-6.86 7.03-3.79 0-6.86-3.15-6.86-7.03 0-3.89 3.07-7.04 6.86-7.04 3.79 0 6.86 3.15 6.86 7.04z"
          id="prefix__p"
          className="hover-circle"
          style={skillSet === 5 ? styles.hovered : {}}
        />
        <path
          d="M46.24 180.61c0 3.88-3.08 7.04-6.86 7.04-3.79 0-6.87-3.16-6.87-7.04s3.08-7.03 6.87-7.03c3.78 0 6.86 3.15 6.86 7.03z"
          id="prefix__q"
          className="hover-circle"
          style={skillSet === 0 ? styles.hovered : {}}
        />
        <path
          d="M23.73 470.89c0 3.88-3.08 7.04-6.87 7.04-3.78 0-6.86-3.16-6.86-7.04s3.08-7.03 6.86-7.03c3.79 0 6.87 3.15 6.87 7.03z"
          id="prefix__r"
          className="hover-circle"
          style={skillSet === 1 ? styles.hovered : {}}
        />
        <path
          d="M326.86 590c0 3.88-3.07 7.03-6.86 7.03-3.79 0-6.86-3.15-6.86-7.03 0-3.88 3.07-7.03 6.86-7.03 3.79 0 6.86 3.15 6.86 7.03z"
          id="prefix__s"
          className="hover-circle"
          style={skillSet === 2 ? styles.hovered : {}}
        />
        <radialGradient
          id="prefix__b"
          gradientUnits="userSpaceOnUse"
          cx={406.6}
          cy={0}
          r={670.99}
        >
          <stop offset="0%" stopColor="#e5ff77" />
          <stop offset="75.092%" stopColor="#40ce95" />
          <stop offset="100%" stopColor="#014b66" />
        </radialGradient>
        <use xlinkHref="#prefix__a" fill="url(#prefix__b)" />
        <use
          xlinkHref="#prefix__c"
          fillOpacity={0}
          stroke="#000"
          strokeWidth={0}
        />
        <use xlinkHref="#prefix__d" fill="#575757" />
        <use xlinkHref="#prefix__e" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__f" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__g" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__h" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__i" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__j" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__k" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__l" fillOpacity={0} stroke="#777" />
        <use xlinkHref="#prefix__m" fill="#777" />
        <use xlinkHref="#prefix__n" fill="#fff" />
        <use xlinkHref="#prefix__o" fill="#fff" />
        <use xlinkHref="#prefix__p" fill="#fff" />
        <use xlinkHref="#prefix__q" fill="#fff" />
        <use xlinkHref="#prefix__r" fill="#fff" />
        <use xlinkHref="#prefix__s" fill="#fff" />
      </svg>
    </div>
  )

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setVisiblility(isVisible)
      }}
    >
      <Slide direction="right" timeout={1000} in={visible}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          className="radar-container"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              {sets.map((set, index) => (
                <Grid item xs={4} key={index}>
                  <div
                    className="sets"
                    onFocus={() => setSkillSet(index === 0 ? 0 : index)}
                    onMouseOver={() => setSkillSet(index === 0 ? 0 : index)}
                    onMouseLeave={() => setSkillSet("no")}
                    onBlur={() => setSkillSet("no")}
                  >
                    {set.name}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>{renderSvg}</Grid>
          <Grid item className="skills">
            {skillSet !== "no" ? sets[skillSet].desc : ""}
          </Grid>
        </Grid>
      </Slide>
    </VizSensor>
  )
}

export default SvgComponent
