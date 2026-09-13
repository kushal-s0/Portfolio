import React from "react";
import Reveal from "../Reveal";

function hexToRgba(hex, alpha) {
  const int = parseInt(hex.replace("#", ""), 16);
  return `rgba(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}, ${alpha})`;
}

function Techstack({ items }) {
  return (
    <div className="tech-grid">
      {items.map(({ name, icon: Icon, color }, index) => (
        <Reveal key={name} variant="scale" delay={index * 45}>
          <div
            className="tech-tile spotlight"
            style={{
              "--brand": color,
              "--brand-soft": hexToRgba(color, 0.16),
              "--brand-glow": hexToRgba(color, 0.45),
            }}
          >
            <Icon className="tech-tile__icon" />
            <span className="tech-tile__name">{name}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default Techstack;
