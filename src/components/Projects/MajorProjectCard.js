import React from "react";
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
}) {
  const imageCount = imgPaths.length;

  return (
    <Row className="major-project-card-container">
      {/* Image Section */}
      <Col md={imageCount > 0 ? 6 : 12} className="major-project-images">
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
          <img src={imgPaths[0]} alt={title} className="major-project-img" />
        ) : (
          <div className="major-project-mosaic">
            <div className="mosaic-main">
              <img src={imgPaths[0]} alt={`${title}-0`} className="major-project-img-main" />
            </div>
            <div className="mosaic-side">
              {imgPaths.slice(1, 3).map((img, index) => (
                <div className="mosaic-side-item" key={index}>
                  <img
                    src={img}
                    alt={`${title}-${index + 1}`}
                    className="major-project-img-side"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Col>

      {/* Content Section */}
      <Col md={imageCount > 0 ? 6 : 12} className="major-project-content">
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
        </div>
      </Col>
    </Row>
  );
}

export default MajorProjectCard;
