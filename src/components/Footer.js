import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="logo-mark" aria-label="Home">
              KS
            </Link>
            <p>Strive to build things that make a difference, one commit at a time.</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <span className="footer__label">Navigate</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/project">Projects</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/resume">Resume</Link>
          </nav>

          <div className="footer__social">
            <span className="footer__label">Find me on</span>
            <SocialLinks />
          </div>
        </div>

        <div className="footer__giant" aria-hidden="true">
          Kushal Soni
        </div>

        <div className="footer__bottom">
          <span>Designed &amp; developed by Kushal Soni</span>
          <span>© {year} KS. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
