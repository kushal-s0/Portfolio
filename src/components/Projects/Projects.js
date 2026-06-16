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
import iot1 from "../../Assets/Projects/iot1.png";
import iot2 from "../../Assets/Projects/iot2.png";
import iot3 from "../../Assets/Projects/iot3.png";
import hospital1 from "../../Assets/Projects/hospital1.png";
import hospital2 from "../../Assets/Projects/hospital2.png";
import hospital3 from "../../Assets/Projects/hospital3.png";
import crm1 from "../../Assets/Projects/crm1.png";
import crm2 from "../../Assets/Projects/crm2.png";
import crm3 from "../../Assets/Projects/crm3.png";
import geoswipe1 from "../../Assets/Projects/geoswipe1.png";
import geoswipe2 from "../../Assets/Projects/geoswipe2.png";
import geoswipe3 from "../../Assets/Projects/geoswipe3.png";


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
                ghLink="https://github.com/Dhir-learner/Atomix"
                demoVideo="https://drive.google.com/file/d/1XU7xea-vn6SSq1Ce_sKLWOYANmqZHwxc/view?usp=drive_link"
                imgPaths={[stock]}
              />
            </Col>
            <Col md={12}>
              <MajorProjectCard
                title="GeoSwipe"
                description="GeoSwipe is an immersive educational platform that allows users to explore UNESCO World Heritage Sites, monuments, forts, temples, and palaces through interactive maps and a 3D Earth visualization. The platform features AI-powered hand gesture control, enabling complete navigation without a mouse or keyboard, along with geography quizzes, historical storybooks, and travel guides to create an engaging and accessible learning experience."
                ghLink="https://github.com/Interior-Gardener/Geoswipe"
                demoLink="https://geoswipe.onrender.com/"
                demoVideo="https://drive.google.com/file/d/1NzUjonejcssivGZTnOTxkJuZuxzxwtFT/view"
                imgPaths={[geoswipe1, geoswipe2, geoswipe3]}
              />
            </Col>
            <Col md={12}>
              <MajorProjectCard
                title="Lead Management CRM"
                description="Lead Management CRM is a full-stack customer relationship management platform designed to streamline lead tracking and sales workflows. It enables users to create, manage, search, filter, and update leads efficiently while providing real-time analytics, interactive charts, status tracking, and a responsive dashboard powered by a scalable Express, MongoDB, and Next.js architecture."
                ghLink="https://github.com/kushal-s0/lead-management-CRM"
                demoLink="https://lead-management-crm-ruddy.vercel.app/"
                demoVideo="https://drive.google.com/file/d/1u2XfoSPr_b9oiNx9GzWAN86JszCxNY1k/view"
                imgPaths={[crm1, crm2, crm3]}
              />
            </Col>
            <Col md={12}>
              <MajorProjectCard
                title="Hospital Operations Sync Platform"
                description="Hospital Operations Sync Platform is an intelligent healthcare management system designed to optimize patient flow and hospital resource utilization through real-time operational insights. The platform provides dynamic OPD queue management, live bed availability tracking, inventory monitoring, rule-based patient admissions, multiple ml model for predictions, and inter-hospital capacity sharing, enabling administrators to make faster and more effective operational decisions."
                ghLink="https://github.com/kushal-s0/Hospital-Operations-Sync-Platform.git"
                demoVideo="https://drive.google.com/file/d/1vhOWFJK6XOL5-YuNJSvXZAZXylr6o52t/view"
                imgPaths={[hospital1, hospital2, hospital3]}
              />
            </Col>
            <Col md={12}>
              <MajorProjectCard
                title="IOT Fingerprint Door Lock System"
                description="IoT Fingerprint Door Lock System is a smart security solution that integrates an ESP8266-based fingerprint lock with a Django-powered web dashboard for remote access management. The system provides real-time access monitoring, door lock control, analytics, CSV log exports, role-based security, and instant Telegram alerts for unauthorized access attempts."
                ghLink="https://github.com/kushal-s0/iotdoorlock.git"
                demoVideo="https://drive.google.com/file/d/1wgS9H2ilUFZcTZekZyRJuXj__0M73MLZ/view?usp=drive_link"
                imgPaths={[iot1, iot2, iot3]}
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
                title="AI-Based Internship Recommendation Engine"
                description="AI-Based Internship Recommendation Engine is an intelligent platform that recommends personalized internship opportunities based on a user's education, skills, interests, and location. The system combines machine learning and rule-based recommendations, supports English and Hindi, provides secure user authentication, offline-ready functionality, and is built using React, Flask REST APIs, and MySQL with a CI/CD-enabled deployment pipeline"
                ghLink="https://github.com/kushal-s0/AI-Based_Internship_Recommendation_Engine.git"
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
