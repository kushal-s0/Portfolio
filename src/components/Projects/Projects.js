import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stock from "../../Assets/Projects/stock.png";
import Todo from "../../Assets/Projects/Todo.png";
import morse from "../../Assets/Projects/morse.png";
import tictactoe from "../../Assets/Projects/Tictactoe.png";
import color from "../../Assets/Projects/color.png";
import game from "../../Assets/Projects/game.png";

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
              imgPath={stock}
              isBlog={false}
              title="Stock Detail Webpage"
              description="This webpage provides detailed stock information, including the daily opening, closing, high, and low prices for a specific stock. Additionally, it displays comprehensive data for the entire month for that stock. This project is built using Python and leverages an API to retrieve the data."
              ghLink="https://github.com/kushal-s0/stockdetailwebpage"
              demoLink="https://stockdetailwebpage.vercel.app/"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Todo list website"
              description="This is a website for maintain the user's todos this is a python base project and it beginner project "
              ghLink="https://github.com/kushal-s0/todolistwebsite"
              demoLink="https://todolistwebsite-indol.vercel.app/"              
            />
          </Col>
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={color}
              isBlog={false}
              title="Color pallet Generator"
              description="This project enables users to generate a custom color palette from an uploaded image. By analyzing the image, the application extracts prominent colors and presents them in a visually appealing palette. Unlike many similar tools, this project operates entirely offline, with no reliance on external APIs, ensuring full control over the process. Built using Python, it demonstrates the practical application of image processing and color extraction techniques."
              ghLink="https://github.com/kushal-s0/colourpalletgenerator"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Breakout-Game"
              description="This project is a Python-based implementation of the classic Breakout game. Players control a paddle to bounce a ball and break bricks on the screen, aiming to clear all bricks to progress through levels. The game incorporates engaging mechanics, including increasing difficulty and score tracking, offering an enjoyable gaming experience. It showcases the use of Python for game development, leveraging libraries like Pygame for graphics and interactivity."
              ghLink="https://github.com/kushal-s0/Breakout-Game"            
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
