import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import MajorProjectCard from "./MajorProjectCard";
import Particle from "../Particle";
import stock from "../../Assets/Projects/stock.png";
import Todo from "../../Assets/Projects/Todo.png";
import morse from "../../Assets/Projects/morse.png";
import tictactoe from "../../Assets/Projects/Tictactoe.png";
import color from "../../Assets/Projects/color.png";
import game from "../../Assets/Projects/game.png";
import community1 from "../../Assets/Projects/community1.png";
import community2 from "../../Assets/Projects/community2.png";
import community3 from "../../Assets/Projects/community3.png";

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

        {/* Major Project Section */}
        <h2 style={{ color: "white", marginTop: "30px", marginBottom: "20px" }}>
          <strong className="purple">Major Projects</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Col md={12}>
              <MajorProjectCard
                title="AI-Powered Analytics Dashboard"
                description="A comprehensive data analytics platform built with React and Node.js that leverages machine learning algorithms to provide real-time insights and predictions. Features include interactive visualizations, custom report generation, and integration with multiple data sources. The dashboard processes millions of data points efficiently and provides actionable intelligence for business decision-making."
                ghLink="https://github.com/kushal-s0/analytics-dashboard"
                demoLink="https://analytics-dashboard.vercel.app/"
                imgPaths={[stock]}
              />
            </Col>
            <Col md={12}>
              <MajorProjectCard
                title="CommUnity"
                description="CommUnity is a centralized club management platform that streamlines communication and administration for students, faculty, and club leaders. It features role-based access, announcement publishing, smart event scheduling with Google Calendar integration, faculty approval workflows, and AI-powered event reporting that automatically generates comprehensive event summaries, including attendance statistics, chief guest details, and key event highlights."
                ghLink="https://github.com/kushal-s0/CommUnity"
                demoVideo="https://drive.google.com/file/d/1gnXLSHoTurimSiFqCFEbPClosUyVyl-U/view?usp=drive_link"
                imgPaths={[community1, community2, community3]}
              />
            </Col>
            <Col md={12}>
              <MajorProjectCard
                title="Project Hub"
                description="ProjectHub is a centralized project management and repository platform that enables students to store, showcase, and share their academic projects with peers, faculty, and guides. The platform provides real-time project progress tracking, evaluation features for faculty, and supports academic credit allocation based on project performance and completion."
                ghLink="https://github.com/Sagar-Shetty0804/Project_Hub"
              />
            </Col>
        </Row>

        {/* Basic Project Section */}
        <h2 style={{ color: "white", marginTop: "30px", marginBottom: "20px" }}>
          <strong className="purple">Basic Projects</strong>
        </h2>
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
