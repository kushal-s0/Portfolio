import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import morse from "../../Assets/Projects/morse.png";
import tictactoe from "../../Assets/Projects/Tictactoe.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={morse}
              isBlog={false}
              title="Morse Code Converter"
              description="This is a simple morse code to text converter and vice-versa this is a python base project and it beginner project "
              ghLink="https://github.com/kushal-s0/Morse-Code-Converter"
              demoLink="https://morse-code-converter-beige.vercel.app/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="TicTactoe"
              description="This is a TicTacToe Game website for entertainment this is a python base project and it beginner project "
              ghLink="https://github.com/kushal-s0/Tictactoe"
              demoLink="https://tictactoe-beta-two.vercel.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
