import React from "react";
import { FiGlobe, FiCpu, FiWifi, FiBox, FiBookOpen, FiLayers, FiCode, FiTool } from "react-icons/fi";
import Reveal from "../Reveal";
import CountUp from "../CountUp";
import SectionHeading from "../SectionHeading";
import { skills, tools } from "../../data/profile";
import { majorProjects, basicProjects } from "../../data/projects";

const focusAreas = [
  { icon: FiGlobe, title: "Web products", text: "React, Next.js, Node & Django" },
  { icon: FiCpu, title: "AI & ML", text: "Assistants, predictions, recommendations" },
  { icon: FiWifi, title: "IoT systems", text: "ESP8266 hardware with web dashboards" },
  { icon: FiBox, title: "3D & simulation", text: "Interactive experiences in Unity" },
];

function Stat({ icon: Icon, value, label, delay }) {
  return (
    <Reveal className="card stat spotlight" delay={delay}>
      <span className="icon-box">
        <Icon />
      </span>
      <div>
        <div className="stat__value gradient-text">
          <CountUp end={value} suffix="+" />
        </div>
        <div className="stat__label">{label}</div>
      </div>
    </Reveal>
  );
}

function Home2() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHeading eyebrow="01 / Introduction" title="Let me" highlight="introduce" after="myself" />

        <div className="bento">
          <Reveal className="card bento__intro spotlight">
            <p className="bento__lead">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            </p>
            <p>
              I am fluent in classics like <mark>HTML, CSS, JavaScript and Python</mark>.
            </p>
            <p>
              My fields of interest are building new <mark>web technologies and products</mark>,
              and everything related to crafting great websites.
            </p>
            <p>
              Whenever possible, I also apply my passion for developing products with{" "}
              <mark>Node.js</mark> and modern JavaScript libraries and frameworks like{" "}
              <mark>React.js and Next.js</mark>.
            </p>
          </Reveal>

          <Reveal className="card bento__build spotlight" delay={100}>
            <span className="eyebrow">What I build</span>
            <ul className="build-list">
              {focusAreas.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className="icon-box">
                    <Icon />
                  </span>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Stat icon={FiLayers} value={majorProjects.length + basicProjects.length} label="Projects built" delay={150} />
          <Stat icon={FiCode} value={skills.length} label="Technologies" delay={220} />

          <Reveal className="card bento__now spotlight" delay={100}>
            <span className="icon-box icon-box--lg">
              <FiBookOpen />
            </span>
            <div>
              <span className="eyebrow">Currently</span>
              <p>
                Pursuing a <strong>B.Tech in Computer Engineering</strong> at K.J. Somaiya
                Institute of Technology, Mumbai.
              </p>
            </div>
          </Reveal>

          <Stat icon={FiBox} value={majorProjects.length} label="Major projects" delay={150} />
          <Stat icon={FiTool} value={tools.length} label="Tools in my kit" delay={220} />

          <Reveal className="card bento__quote spotlight" variant="scale">
            <span className="bento__quote-mark" aria-hidden="true">
              “
            </span>
            <blockquote>
              Strive to build things that <span className="gradient-text">make a difference!</span>
            </blockquote>
            <cite>Kushal</cite>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Home2;
