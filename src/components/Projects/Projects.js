import React from "react";
import Tilt from "react-parallax-tilt";
import { majorProjects, basicProjects } from "../../data/projects";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import MajorProjectCard from "./MajorProjectCard";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <>
      <section className="page-hero page-hero--center">
        <div className="container">
          <span className="eyebrow anim anim--fade">Portfolio</span>
          <h1 className="page-title anim anim--fade" style={{ "--d": "100ms" }}>
            My recent <span className="gradient-text">works</span>
          </h1>
          <p className="page-lead anim anim--fade" style={{ "--d": "220ms" }}>
            Here are a few projects I've worked on recently, from AI-powered 3D labs to
            full-stack platforms and IoT systems.
          </p>
          <div className="pill-row anim anim--fade" style={{ "--d": "340ms" }}>
            <span className="pill">
              <strong>{majorProjects.length}</strong> major projects
            </span>
            <span className="pill">
              <strong>{basicProjects.length}</strong> basic projects
            </span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Featured" title="Major" highlight="projects" />
          <div className="major-list">
            {majorProjects.map((project, index) => (
              <MajorProjectCard
                key={project.title}
                index={index}
                total={majorProjects.length}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Where it started"
            title="Basic"
            highlight="projects"
            description="Smaller builds where I sharpened the fundamentals."
          />
          <div className="project-grid">
            {basicProjects.map((project, index) => (
              <Reveal key={project.title} delay={(index % 3) * 110}>
                <Tilt
                  className="tilt"
                  tiltMaxAngleX={4}
                  tiltMaxAngleY={4}
                  transitionSpeed={1800}
                >
                  <ProjectCard {...project} />
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
