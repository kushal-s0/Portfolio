import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { achievementTiers } from "../../data/experience";
import { getProject } from "../../data/projects";
import Reveal from "../Reveal";

function AchievementCard({ tier, title, event, detail, project, delay = 0, compact = false }) {
  const { icon: Icon, color } = achievementTiers[tier];
  const linked = project && getProject(project);

  return (
    <Reveal
      className={`card award-card spotlight ${compact ? "award-card--compact" : ""}`}
      delay={delay}
      style={{ "--brand": color }}
    >
      <span className="award-card__icon">
        <Icon />
      </span>
      <div className="award-card__body">
        <span className="award-card__title">{title}</span>
        <h3>{event}</h3>
        {detail && <p>{detail}</p>}
        {linked && (
          <Link to={`/project/${linked.slug}`} className="text-link text-link--accent award-card__link">
            {linked.title} <FiArrowUpRight />
          </Link>
        )}
      </div>
    </Reveal>
  );
}

export default AchievementCard;
