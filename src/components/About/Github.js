import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";

function Github() {
  return (
    <Reveal className="card github-card">
      <div className="github-card__head">
        <div>
          <span className="eyebrow">Contributions</span>
          <h2 className="section-title">
            Days I <span className="gradient-text">code</span>
          </h2>
        </div>
        <a
          href="https://github.com/kushal-s0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost btn--sm magnetic"
        >
          @kushal-s0 <FiArrowUpRight className="btn__arrow" />
        </a>
      </div>
      <div className="github-card__calendar">
        <GitHubCalendar
          username="kushal-s0"
          blockSize={14}
          blockMargin={5}
          blockRadius={4}
          theme={{
            level0: "#1a1528",
            level1: "#3b1f63",
            level2: "#6b2fb0",
            level3: "#a855f7",
            level4: "#e9b8ff",
          }}
          fontSize={14}
        />
      </div>
    </Reveal>
  );
}

export default Github;
