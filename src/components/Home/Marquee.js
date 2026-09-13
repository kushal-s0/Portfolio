import React from "react";
import { skills, tools } from "../../data/profile";

function Track({ items, reverse }) {
  // Items are rendered twice so the -50% translate loops seamlessly.
  return (
    <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`}>
      {[...items, ...items].map(({ name, icon: Icon, color }, index) => (
        <span
          key={`${name}-${index}`}
          className="marquee__item"
          style={{ "--brand": color }}
          aria-hidden={index >= items.length}
        >
          <Icon /> {name}
        </span>
      ))}
    </div>
  );
}

function Marquee() {
  const half = Math.ceil(skills.length / 2);
  return (
    <section className="marquee" aria-label="Technologies I work with">
      <Track items={skills.slice(0, half)} />
      <Track items={[...skills.slice(half), ...tools]} reverse />
    </section>
  );
}

export default Marquee;
