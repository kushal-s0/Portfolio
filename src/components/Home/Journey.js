import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { experience, achievements } from "../../data/experience";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Timeline from "../Experience/Timeline";
import AchievementCard from "../Experience/AchievementCard";

function Journey() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head-row">
          <SectionHeading
            eyebrow="03 / Journey"
            title="Experience &"
            highlight="recognition"
            description="Internships, hackathon wins and national showcases."
          />
          <Reveal delay={150}>
            <Link to="/experience" className="btn btn--ghost magnetic">
              Full journey <FiArrowRight className="btn__arrow" />
            </Link>
          </Reveal>
        </div>

        <div className="journey">
          <div>
            <span className="journey__label">Experience</span>
            <Timeline items={experience} compact />
          </div>
          <div>
            <span className="journey__label">Highlights</span>
            <div className="journey__awards">
              {achievements.slice(0, 4).map((achievement, index) => (
                <AchievementCard key={achievement.event} delay={index * 90} compact {...achievement} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
