import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiBookOpen, FiDownload } from "react-icons/fi";
import { experience, education, achievements, certifications } from "../../data/experience";
import { resume } from "../../data/profile";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import Timeline from "./Timeline";
import AchievementCard from "./AchievementCard";

function Experience() {
  const roleCount = experience.reduce((sum, job) => sum + job.roles.length, 0);

  return (
    <>
      <section className="page-hero page-hero--center">
        <div className="container">
          <span className="eyebrow anim anim--fade">Journey</span>
          <h1 className="page-title anim anim--fade" style={{ "--d": "100ms" }}>
            Experience &amp; <span className="gradient-text">achievements</span>
          </h1>
          <p className="page-lead anim anim--fade" style={{ "--d": "220ms" }}>
            Where I've worked, what I've learnt, and the competitions where my projects were
            recognised.
          </p>
          <div className="pill-row anim anim--fade" style={{ "--d": "340ms" }}>
            <span className="pill">
              <strong>{roleCount}</strong> roles
            </span>
            <span className="pill">
              <strong>{achievements.length}</strong> awards &amp; showcases
            </span>
            <span className="pill">
              <strong>{certifications.length}</strong> certifications
            </span>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Career" title="Work" highlight="experience" />
          <Timeline items={experience} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Education" title="Where I" highlight="study" />
          <Reveal className="card edu-card spotlight">
            <span className="icon-box icon-box--lg">
              <FiBookOpen />
            </span>
            <div className="edu-card__body">
              <div className="edu-card__head">
                <div>
                  <h3>{education.school}</h3>
                  <p className="edu-card__degree">{education.degree}</p>
                  <p className="edu-card__meta">
                    {education.affiliation} · {education.period}
                  </p>
                </div>
                <div className="edu-card__score">
                  <span className="gradient-text">{education.cgpa}</span>
                  CGPA
                </div>
              </div>
              <ul className="tags tags--sm">
                {education.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards &"
            highlight="achievements"
            description="Hackathons, project competitions and national showcases. Each links to the project behind it."
          />
          <div className="award-grid">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.event} delay={(index % 3) * 90} {...achievement} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading eyebrow="Credentials" title="Certifications &" highlight="letters" />
          <div className="cert-grid">
            {certifications.map(({ title, issuer, icon: Icon, color }, index) => (
              <Reveal
                key={title}
                className="card cert-card spotlight"
                delay={index * 90}
                style={{ "--brand": color }}
              >
                <span className="cert-card__icon">
                  <Icon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{issuer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="journey-cta">
            <p>Want the one-page version?</p>
            <div className="journey-cta__actions">
              <Link to="/resume" className="btn btn--primary magnetic">
                View resume <FiArrowRight className="btn__arrow" />
              </Link>
              <a href={resume} download="Kushal_Soni_Resume.pdf" className="btn btn--ghost magnetic">
                <FiDownload /> Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Experience;
