import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Reveal from "../Reveal";

// Work history as a vertical timeline. `compact` drops the bullet points and tags.
function Timeline({ items, compact = false }) {
  return (
    <ol className={`timeline ${compact ? "timeline--compact" : ""}`}>
      {items.map((job, index) => (
        <Reveal as="li" key={job.company} className="timeline__item" delay={index * 120}>
          <span className="timeline__dot" aria-hidden="true" />
          <div className="card timeline__card spotlight">
            <header className="timeline__head">
              <span className="timeline__logo" aria-hidden="true">
                {job.initials}
              </span>
              <div>
                <h3>{job.company}</h3>
                <span className="timeline__meta">
                  <FiMapPin /> {job.location} · {job.type}
                </span>
              </div>
            </header>

            {job.roles.map((role) => (
              <div key={role.title} className="timeline__role">
                <div className="timeline__role-head">
                  <h4>{role.title}</h4>
                  <span className="timeline__period">
                    <FiCalendar /> {role.period}
                  </span>
                </div>
                {!compact && (
                  <>
                    <ul className="timeline__points">
                      {role.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <ul className="tags tags--sm">
                      {role.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default Timeline;
