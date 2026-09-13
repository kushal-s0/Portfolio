import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectCard({ title, description, image, tags = [], ghLink, demoLink }) {
  return (
    <article className="project-card spotlight">
      <div className="project-card__media">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="project-card__body">
        <ul className="tags tags--sm">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>
        <div className="project-card__links">
          {ghLink && (
            <a href={ghLink} target="_blank" rel="noopener noreferrer" className="text-link">
              <BsGithub /> Code
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-link text-link--accent">
              Live demo <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
