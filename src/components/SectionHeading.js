import React from "react";
import Reveal from "./Reveal";

function SectionHeading({ eyebrow, title, highlight, after, description, align = "left" }) {
  return (
    <Reveal className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">
        {title}
        {title && highlight && " "}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {after && ` ${after}`}
      </h2>
      {description && <p className="section-desc">{description}</p>}
    </Reveal>
  );
}

export default SectionHeading;
