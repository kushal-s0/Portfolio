import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
  SiReact,
  SiPython,
  SiNodedotjs,
  SiUnity,
  SiDjango,
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import avatar from "../../Assets/avatar.svg";
import { resume } from "../../data/profile";
import { majorProjects, basicProjects } from "../../data/projects";
import SocialLinks from "../SocialLinks";
import Type from "./Type";
import Marquee from "./Marquee";
import Home2 from "./Home2";
import Featured from "./Featured";
import Contact from "./Contact";

const innerOrbit = [
  { icon: SiReact, color: "#61dafb" },
  { icon: SiPython, color: "#ffd43b" },
  { icon: SiNodedotjs, color: "#68a063" },
];

const outerOrbit = [
  { icon: SiUnity, color: "#ffffff" },
  { icon: SiDjango, color: "#44b78b" },
  { icon: SiMongodb, color: "#47a248" },
  { icon: SiNextdotjs, color: "#ffffff" },
  { icon: SiJavascript, color: "#f7df1e" },
];

function Orbit({ items, variant }) {
  return (
    <div className={`orbit orbit--${variant}`}>
      {items.map(({ icon: Icon, color }, index) => (
        <span
          key={index}
          className="orbit__item"
          style={{ "--angle": `${(360 / items.length) * index}deg`, "--brand": color }}
        >
          <span className="orbit__icon">
            <Icon />
          </span>
        </span>
      ))}
    </div>
  );
}

function Home() {
  const projectCount = majorProjects.length + basicProjects.length;

  return (
    <>
      <section className="hero" id="home">
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="badge anim anim--fade" style={{ "--d": "0ms" }}>
              <span className="badge__dot" />
              B.Tech Computer Engineering · Mumbai, India
            </span>

            <p className="hero__hello anim anim--fade" style={{ "--d": "120ms" }}>
              Hi there{" "}
              <span className="wave" role="img" aria-label="waving hand">
                👋🏻
              </span>
              , I'm
            </p>

            <h1 className="hero__name">
              <span className="hero__word">
                <span className="anim anim--word gradient-text" style={{ "--d": "220ms" }}>
                  Kushal
                </span>
              </span>
              <span className="hero__word">
                <span className="anim anim--word hero__outline" style={{ "--d": "340ms" }}>
                  Soni
                </span>
              </span>
            </h1>

            <div className="hero__role anim anim--fade" style={{ "--d": "520ms" }}>
              <span className="hero__role-prefix">~/</span>
              <Type />
            </div>

            <p className="hero__lead anim anim--fade" style={{ "--d": "640ms" }}>
              I build web products, AI-powered experiences and IoT systems, from 3D
              virtual labs in Unity to full-stack dashboards with Next.js and Django.
            </p>

            <div className="hero__cta anim anim--fade" style={{ "--d": "760ms" }}>
              <Link to="/project" className="btn btn--primary magnetic">
                View my work <FiArrowRight className="btn__arrow" />
              </Link>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost magnetic"
              >
                <FiDownload /> Download CV
              </a>
            </div>

            <div className="hero__social anim anim--fade" style={{ "--d": "880ms" }}>
              <span className="hero__social-label">Find me on</span>
              <SocialLinks />
            </div>
          </div>

          <div className="hero__visual anim anim--pop" style={{ "--d": "450ms" }}>
            <div className="orb">
              <div className="orb__glow" />
              <div className="orb__ring orb__ring--outer" />
              <div className="orb__ring orb__ring--inner" />
              <Orbit items={innerOrbit} variant="inner" />
              <Orbit items={outerOrbit} variant="outer" />
              <div className="orb__core">
                <div className="orb__core-inner">
                  <img src={avatar} alt="Kushal Soni avatar" />
                </div>
              </div>
              <div className="float-chip float-chip--1">
                <strong>{projectCount}+</strong> projects built
              </div>
              <div className="float-chip float-chip--2">
                <span className="float-chip__dot" /> Web · AI · IoT
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span className="scroll-cue__mouse" />
          Scroll
        </div>
      </section>

      <Marquee />
      <Home2 />
      <Featured />
      <Contact />
    </>
  );
}

export default Home;
