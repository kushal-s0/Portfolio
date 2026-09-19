import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import { majorProjects } from "../../data/projects";

function Featured() {
  const featured = majorProjects.filter((project) => project.images.length).slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="02 / Selected work"
            title="Featured"
            highlight="projects"
            description="A glimpse of what I've been building lately."
          />
          <Reveal delay={150}>
            <Link to="/project" className="btn btn--ghost magnetic">
              All projects <FiArrowRight className="btn__arrow" />
            </Link>
          </Reveal>
        </div>

        <div className="featured-grid">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <Tilt
                className="tilt"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable
                glareMaxOpacity={0.12}
                glareColor="#c084fc"
                glarePosition="all"
                glareBorderRadius="22px"
                transitionSpeed={1800}
              >
                <Link to={`/project/${project.slug}`} className="feature-card spotlight">
                  <div className="feature-card__media">
                    <img src={project.images[0]} alt={project.title} loading="lazy" />
                  </div>
                  <div className="feature-card__body">
                    <span className="feature-card__num">0{index + 1}</span>
                    <h3>{project.title}</h3>
                    <p>{project.tagline}</p>
                    <ul className="tags tags--sm">
                      {project.tags.slice(0, 3).map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="feature-card__arrow" aria-hidden="true">
                    <FiArrowUpRight />
                  </span>
                </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
