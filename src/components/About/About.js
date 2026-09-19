import React from "react";
import laptopImg from "../../Assets/about.png";
import { skillGroups, tools } from "../../data/profile";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";
import Github from "./Github";

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container about-grid">
          <div>
            <span className="eyebrow anim anim--fade">About me</span>
            <h1 className="page-title anim anim--fade" style={{ "--d": "100ms" }}>
              Know who <span className="gradient-text">I am</span>
            </h1>
            <AboutCard />
          </div>
          <Reveal variant="right" delay={200} className="about-visual">
            <div className="about-visual__blob" />
            <img src={laptopImg} alt="Illustration of a developer at work" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Skills"
            title="Professional"
            highlight="skillset"
            description="The languages, frameworks and databases I use to bring ideas to life."
          />
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3 className="skill-group__title">
                {group.title}
                <span>{group.items.length}</span>
              </h3>
              <Techstack items={group.items} />
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHeading
            eyebrow="Toolbox"
            highlight="Tools"
            after="I use"
            description="Editors, engines and platforms that power my everyday workflow."
          />
          <Techstack items={tools} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Github />
        </div>
      </section>
    </>
  );
}

export default About;
