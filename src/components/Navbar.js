import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineTrophy,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  { to: "/", label: "Home", icon: AiOutlineHome },
  { to: "/about", label: "About", icon: AiOutlineUser },
  { to: "/project", label: "Projects", icon: AiOutlineFundProjectionScreen },
  { to: "/experience", label: "Experience", icon: AiOutlineTrophy },
  { to: "/resume", label: "Resume", icon: CgFileDocument },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__brand" aria-label="Kushal Soni, home">
          <span className="logo-mark">KS</span>
          <span className="nav__brand-text">Kushal Soni</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}
            >
              <Icon />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <a
          className="btn btn--primary btn--sm nav__cta magnetic"
          href="https://www.linkedin.com/in/kushaldsoni/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's connect <FiArrowUpRight className="btn__arrow" />
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
