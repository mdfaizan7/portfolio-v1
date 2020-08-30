import React, { useState, useEffect } from "react"
import VizSensor from "react-visibility-sensor"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import Fade from "@material-ui/core/Fade"
import StarIcon from "@material-ui/icons/Star"

import Card from "./ExpandingCard"
import journeyAr from "./journey"

import "react-vertical-timeline-component/style.min.css"
import "../../styles/journey.scss"

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

function Journey() {
  const [visible, setVisiblility] = useState(false)
  const [mob, setMob] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setMob(window.innerWidth <= 800))

    setMob(window.innerWidth <= 800)
  }, [])

  return (
    <VizSensor
      partialVisibility
      onChange={isVisible => {
        setVisiblility(isVisible)
      }}
    >
      <div style={{ background: "rgb(227, 227, 227)", overflow: "hidden" }}>
        <Fade in={visible} timeout={1500}>
          <div className="head-j">MY JOURNEY</div>
        </Fade>
        <Fade in={visible} timeout={500}>
          <div style={{ marginBottom: 50 }}>
            <div className="sub">Educational and Professional</div>
            <VerticalTimeline>
              {journeyAr &&
                journeyAr.map((item, index) => (
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
                ))}
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </Fade>
      </div>
    </VizSensor>
  )
}

export default Journey
