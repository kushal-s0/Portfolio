import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight, FiPlayCircle } from "react-icons/fi";

// Live demo / video / source buttons. The first available link gets the primary style
// unless `primaryTaken` says another button already holds it.
function ProjectLinks({ demoLink, demoVideo, ghLink, primaryTaken = false }) {
  const videoIsPrimary = !primaryTaken && !demoLink;
  const sourceIsPrimary = !primaryTaken && !demoLink && !demoVideo;

  return (
    <>
      {demoLink && (
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn--sm magnetic ${primaryTaken ? "btn--ghost" : "btn--primary"}`}
        >
          Live demo <FiArrowUpRight className="btn__arrow" />
        </a>
      )}
      {demoVideo && (
        <a
          href={demoVideo}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn--sm magnetic ${videoIsPrimary ? "btn--primary" : "btn--ghost"}`}
        >
          <FiPlayCircle /> Video demo
        </a>
      )}
      {ghLink && (
        <a
          href={ghLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn--sm magnetic ${sourceIsPrimary ? "btn--primary" : "btn--ghost"}`}
        >
          <BsGithub /> Source code
        </a>
      )}
    </>
  );
}

export default ProjectLinks;
