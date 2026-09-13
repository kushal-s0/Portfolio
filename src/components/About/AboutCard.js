import React from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { FiEdit3, FiVideo } from "react-icons/fi";
import Reveal from "../Reveal";

const hobbies = [
  { icon: IoGameControllerOutline, label: "Playing games" },
  { icon: FiEdit3, label: "Writing tech blogs" },
  { icon: FiVideo, label: "Making coding video tutorials" },
];

function AboutCard() {
  return (
    <Reveal className="card about-card spotlight" delay={200}>
      <p>
        Hi everyone, I am <mark>Kushal Soni</mark> from <mark>Mumbai, India</mark>.
      </p>
      <p>
        I am currently pursuing a <mark>B.Tech in Computer Engineering</mark> at K.J. Somaiya
        Institute of Technology.
      </p>
      <p>Apart from coding, some other activities that I love to do:</p>

      <ul className="hobbies">
        {hobbies.map(({ icon: Icon, label }) => (
          <li key={label}>
            <Icon /> {label}
          </li>
        ))}
      </ul>

      <blockquote className="about-quote">
        “Strive to build things that make a difference!”
        <cite>Kushal</cite>
      </blockquote>
    </Reveal>
  );
}

export default AboutCard;
