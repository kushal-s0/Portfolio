import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Reveal from "../Reveal";

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <Reveal variant="scale" className="cta">
          <div className="cta__border" aria-hidden="true" />
          <div className="cta__inner">
            <div className="cta__grid" aria-hidden="true" />
            <span className="eyebrow">04 / What's next?</span>
            <h2 className="cta__title">
              Let's build something that <span className="gradient-text">makes a difference.</span>
            </h2>
            <p className="cta__text">
              Have a project in mind, an opportunity to share, or just want to talk tech?
              Feel free to connect with me.
            </p>
            <div className="cta__actions">
              <a
                href="https://www.linkedin.com/in/kushaldsoni/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary magnetic"
              >
                <FaLinkedinIn /> Connect on LinkedIn
              </a>
              <a
                href="https://github.com/kushal-s0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost magnetic"
              >
                <AiFillGithub /> Follow on GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
