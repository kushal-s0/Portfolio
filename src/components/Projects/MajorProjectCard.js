import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./MajorProjectCard.css";

function MajorProjectCard({
  imgPaths = [],
  title,
  description,
  ghLink,
  demoLink,
  demoVideo,
}) {
  const imageCount = imgPaths.length;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (imageCount <= 1) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % imageCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageCount]);

  return (
    <Row className="major-project-card-container">
      {/* Image Section */}
      <Col md={6} className="major-project-images">
        {imageCount === 0 ? (
          <div className="no-image-placeholder">
            <div className="no-image-glow no-image-glow-1" />
            <div className="no-image-glow no-image-glow-2" />
            <div className="placeholder-icon">
              <CgWebsite />
            </div>
            <h4>Project Showcase</h4>
            <p>Designed with features, architecture, and impact in focus.</p>
            <div className="no-image-tags">
              <span>Concept</span>
              <span>Features</span>
              <span>Links</span>
            </div>
          </div>
        ) : imageCount === 1 ? (
          <div className="image-wrapper">
            <img src={imgPaths[0]} alt={title} className="major-project-img" />
          </div>
        ) : (
          <div className="major-project-mosaic">
            <div className="mosaic-main">
              <img 
                src={imgPaths[activeImageIndex]} 
                alt={`${title}-${activeImageIndex}`} 
                className="major-project-img-main" 
              />
            </div>
            <div className="mosaic-side">
              {[1, 2].map((offset) => {
                const imgIndex = (activeImageIndex + offset) % imageCount;
                return (
                  <div className="mosaic-side-item" key={offset}>
                    <img
                      src={imgPaths[imgIndex]}
                      alt={`${title}-${imgIndex}`}
                      className="major-project-img-side"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Col>

      {/* Content Section */}
      <Col md={6} className="major-project-content">
        <h3 className="major-project-title">{title}</h3>
        <p className="major-project-description">{description}</p>

        <div className="major-project-links">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noopener noreferrer"
              className="major-project-link github-link"
            >
              <BsGithub /> GitHub
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="major-project-link demo-link"
            >
              <CgWebsite /> Live Demo
            </a>
          )}
          {demoVideo && (
            <a
              href={demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="major-project-link demo-video-link"
            >
              <CgWebsite /> Video Demo
            </a>
          )}
        </div>
      </Col>
    </Row>
  );
}

export default MajorProjectCard;
