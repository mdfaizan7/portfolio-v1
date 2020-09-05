import React, { useState, useEffect } from "react"
import VizSensor from "react-visibility-sensor"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import StarIcon from "@material-ui/icons/Star"
import Grow from "@material-ui/core/Grow"
import Card from "./ExpandingCard"
import journeyAr from "./journey"

import "react-vertical-timeline-component/style.min.css"
import "../../styles/journey.scss"
import { MdIndeterminateCheckBox } from "react-icons/md"

const styles = {
  leftEl: {
    background: "#2a55a3",
  },
  leftAr: {
    borderRight: "7px solid #2a55a3",
  },
  rightEl: {
    background: "#c23c8e",
  },
  rightAr: {
    borderRight: "7px solid #c23c8e",
  },
}

const GrowAnimate = ({ children }) => {
  const [viz, setViz] = useState(false)

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setViz(isVisible)
      }}
    >
      <Grow in={viz} timeout={800}>
        {children}
      </Grow>
    </VizSensor>
  )
}

function Journey() {
  const [mob, setMob] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setMob(window.innerWidth <= 800))

    setMob(window.innerWidth <= 800)
  }, [])

  return (
    <div style={{ background: "rgb(227, 227, 227)", overflow: "hidden" }}>
      <div className="head-j">MY JOURNEY</div>
      <div style={{ marginBottom: 50 }}>
        <div className="sub">Educational and Professional</div>
        <VerticalTimeline>
          {journeyAr &&
            journeyAr.map((item, index) => (
              <GrowAnimate key={index}>
                <VerticalTimelineElement
                  contentStyle={
                    index % 2 === 0 ? styles.leftEl : styles.rightEl
                  }
                  contentArrowStyle={
                    index % 2 === 0 ? styles.leftAr : styles.rightAr
                  }
                  iconStyle={{
                    background: index % 2 === 0 ? "#2a55a3" : "#c23c8e",
                    color: "#fff",
                  }}
                  date={
                    mob ? (
                      <span style={{ color: "#fff" }}>{item.date}</span>
                    ) : (
                      item.date
                    )
                  }
                  key={index}
                  icon={<item.icon />}
                >
                  <Card
                    title={item.title}
                    subTitle={item.subTitle}
                    description={item.description}
                    detailsTitle={item.detailsTitle}
                    details={item.details}
                  />
                </VerticalTimelineElement>
              </GrowAnimate>
            ))}
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </div>
  )
}

export default Journey
