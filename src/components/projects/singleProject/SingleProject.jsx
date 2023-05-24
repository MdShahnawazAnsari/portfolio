import React from "react";
import "./SingleProject.scss";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function SingleProject({
  data: { title, link, technologyLogo, img, summary },
}) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        borderRadius: 25,
        border: "1px solid var(--action)",
        boxShadow: "0 0 10px var(--action)",
        background: "var(--background-second)",
      }}
      icon={<i className="fa-brands fa-github"></i>}
      iconStyle={{
        color: "var(--text-black)",
        fontSize: "2.5rem",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
       key={link}
    >
      <div className="project-container">
        <Carousel
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          interval={1500}
          showThumbs={false}
        >
          {img.map((item, index) => (
            <img key={index} src={item} alt="project images" />
          ))}
        </Carousel>
        <div className="name">
          <h2>{title}</h2>
        </div>
        <div className="summary-heading">
          <span children="summary">{summary}</span>
        </div>

        <div className="technology">
          <h3>Technology used</h3>
          <div className="technology-logo">
            {technologyLogo.map((item, index) => (
              <img key={index} src={item} alt={item} />
            ))}
          </div>
        </div>
        <button className="btn">
          <a href={link} target="_blank">
            Live Demo
          </a>
        </button>
      </div>
    </VerticalTimelineElement>
  );
}

export default SingleProject;
