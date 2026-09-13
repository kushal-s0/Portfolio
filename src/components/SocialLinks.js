import React from "react";
import { socials } from "../data/profile";

function SocialLinks({ className = "" }) {
  return (
    <ul className={`socials ${className}`}>
      {socials.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="socials__link magnetic"
            aria-label={name}
            title={name}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
