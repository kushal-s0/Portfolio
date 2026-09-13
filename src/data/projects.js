import stock from "../Assets/Projects/stock.png";
import todo from "../Assets/Projects/Todo.png";
import morse from "../Assets/Projects/morse.png";
import tictactoe from "../Assets/Projects/Tictactoe.png";
import color from "../Assets/Projects/color.png";
import game from "../Assets/Projects/game.png";
import community1 from "../Assets/Projects/community1.png";
import community2 from "../Assets/Projects/community2.png";
import community3 from "../Assets/Projects/community3.png";
import iot1 from "../Assets/Projects/iot1.png";
import iot2 from "../Assets/Projects/iot2.png";
import iot3 from "../Assets/Projects/iot3.png";
import hospital1 from "../Assets/Projects/hospital1.png";
import hospital2 from "../Assets/Projects/hospital2.png";
import hospital3 from "../Assets/Projects/hospital3.png";
import crm1 from "../Assets/Projects/crm1.png";
import crm2 from "../Assets/Projects/crm2.png";
import crm3 from "../Assets/Projects/crm3.png";
import geoswipe1 from "../Assets/Projects/geoswipe1.png";
import geoswipe2 from "../Assets/Projects/geoswipe2.png";
import geoswipe3 from "../Assets/Projects/geoswipe3.png";
import atomix1 from "../Assets/Projects/atomix1.png";
import atomix2 from "../Assets/Projects/atomix2.png";
import atomix3 from "../Assets/Projects/atomix3.png";

export const majorProjects = [
  {
    title: "Atomix",
    tagline: "Your personal laboratory with AI.",
    description:
      "Atomix is an AI-powered 3D virtual chemistry laboratory built in Unity that allows students to perform experiments freely by selecting chemicals, quantities, temperatures, and procedures, just like in a real lab. The platform simulates realistic reaction outcomes, provides an AI voice-enabled assistant for personalized guidance and error analysis, visualizes chemical processes at the molecular level, and tracks experiment history to enhance conceptual understanding through interactive and safe learning.",
    tags: ["Unity", "AI Assistant", "Voice", "3D Simulation"],
    ghLink: "https://github.com/Dhir-learner/Atomix",
    demoLink: "https://kushal-s0.itch.io/atomix",
    demoVideo: "https://drive.google.com/file/d/1XU7xea-vn6SSq1Ce_sKLWOYANmqZHwxc/view?usp=drive_link",
    images: [atomix1, atomix2, atomix3],
  },
  {
    title: "GeoSwipe",
    tagline: "Explore world heritage with a wave of your hand.",
    description:
      "GeoSwipe is an immersive educational platform that allows users to explore UNESCO World Heritage Sites, monuments, forts, temples, and palaces through interactive maps and a 3D Earth visualization. The platform features AI-powered hand gesture control, enabling complete navigation without a mouse or keyboard, along with geography quizzes, historical storybooks, and travel guides to create an engaging and accessible learning experience.",
    tags: ["3D Globe", "Gesture Control", "Interactive Maps", "EdTech"],
    ghLink: "https://github.com/Interior-Gardener/Geoswipe",
    demoLink: "https://geoswipe.pages.dev/",
    demoVideo: "https://drive.google.com/file/d/13jWqWI3qgzt3HObZ80NEqZqjEjKYIqeV/view?usp=sharing",
    images: [geoswipe1, geoswipe2, geoswipe3],
  },
  {
    title: "Lead Management CRM",
    tagline: "Track, filter and convert leads with live analytics.",
    description:
      "Lead Management CRM is a full-stack customer relationship management platform designed to streamline lead tracking and sales workflows. It enables users to create, manage, search, filter, and update leads efficiently while providing real-time analytics, interactive charts, status tracking, and a responsive dashboard powered by a scalable Express, MongoDB, and Next.js architecture.",
    tags: ["Next.js", "Express", "MongoDB", "Analytics"],
    ghLink: "https://github.com/kushal-s0/lead-management-CRM",
    demoLink: "https://lead-management-crm-ruddy.vercel.app/",
    demoVideo: "https://drive.google.com/file/d/1u2XfoSPr_b9oiNx9GzWAN86JszCxNY1k/view",
    images: [crm1, crm2, crm3],
  },
  {
    title: "Hospital Operations Sync Platform",
    tagline: "Real-time patient flow and resource intelligence.",
    description:
      "Hospital Operations Sync Platform is an intelligent healthcare management system designed to optimize patient flow and hospital resource utilization through real-time operational insights. The platform provides dynamic OPD queue management, live bed availability tracking, inventory monitoring, rule-based patient admissions, multiple ML models for predictions, and inter-hospital capacity sharing, enabling administrators to make faster and more effective operational decisions.",
    tags: ["Machine Learning", "Real-time", "Healthcare", "Dashboards"],
    ghLink: "https://github.com/kushal-s0/Hospital-Operations-Sync-Platform.git",
    demoVideo: "https://drive.google.com/file/d/1vhOWFJK6XOL5-YuNJSvXZAZXylr6o52t/view",
    images: [hospital1, hospital2, hospital3],
  },
  {
    title: "IoT Fingerprint Door Lock",
    tagline: "Smart biometric security with a remote dashboard.",
    description:
      "IoT Fingerprint Door Lock System is a smart security solution that integrates an ESP8266-based fingerprint lock with a Django-powered web dashboard for remote access management. The system provides real-time access monitoring, door lock control, analytics, CSV log exports, role-based security, and instant Telegram alerts for unauthorized access attempts.",
    tags: ["ESP8266", "Django", "IoT", "Telegram Alerts"],
    ghLink: "https://github.com/kushal-s0/iotdoorlock.git",
    demoVideo: "https://drive.google.com/file/d/1wgS9H2ilUFZcTZekZyRJuXj__0M73MLZ/view?usp=drive_link",
    images: [iot1, iot2, iot3],
  },
  {
    title: "CommUnity",
    tagline: "One home for every club, event and announcement.",
    description:
      "CommUnity is a centralized club management platform that streamlines communication and administration for students, faculty, and club leaders. It features role-based access, announcement publishing, smart event scheduling with Google Calendar integration, faculty approval workflows, and AI-powered event reporting that automatically generates comprehensive event summaries, including attendance statistics, chief guest details, and key event highlights.",
    tags: ["Role-based Access", "Google Calendar", "AI Reports"],
    ghLink: "https://github.com/kushal-s0/CommUnity",
    demoVideo: "https://drive.google.com/file/d/1gnXLSHoTurimSiFqCFEbPClosUyVyl-U/view?usp=drive_link",
    images: [community1, community2, community3],
  },
  {
    title: "AI Internship Recommendation Engine",
    tagline: "Personalised internships matched to your profile.",
    description:
      "AI-Based Internship Recommendation Engine is an intelligent platform that recommends personalized internship opportunities based on a user's education, skills, interests, and location. The system combines machine learning and rule-based recommendations, supports English and Hindi, provides secure user authentication, offline-ready functionality, and is built using React, Flask REST APIs, and MySQL with a CI/CD-enabled deployment pipeline.",
    tags: ["React", "Flask", "MySQL", "Machine Learning", "CI/CD"],
    ghLink: "https://github.com/kushal-s0/AI-Based_Internship_Recommendation_Engine.git",
    images: [],
  },
  {
    title: "Project Hub",
    tagline: "Store, showcase and evaluate academic projects.",
    description:
      "ProjectHub is a centralized project management and repository platform that enables students to store, showcase, and share their academic projects with peers, faculty, and guides. The platform provides real-time project progress tracking, evaluation features for faculty, and supports academic credit allocation based on project performance and completion.",
    tags: ["Progress Tracking", "Evaluation", "Academic"],
    ghLink: "https://github.com/Sagar-Shetty0804/Project_Hub",
    images: [],
  },
];

export const basicProjects = [
  {
    title: "Stock Detail Webpage",
    description:
      "Detailed stock information including daily opening, closing, high and low prices, plus comprehensive data for the entire month. Built with Python and powered by a stock market API.",
    tags: ["Python", "API"],
    image: stock,
    ghLink: "https://github.com/kushal-s0/stockdetailwebpage",
    demoLink: "https://stockdetailwebpage.vercel.app/",
  },
  {
    title: "Todo List Website",
    description:
      "A clean website to create and maintain your daily todos. A beginner-friendly project built with Python.",
    tags: ["Python", "Web"],
    image: todo,
    ghLink: "https://github.com/kushal-s0/todolistwebsite",
    demoLink: "https://todolistwebsite-indol.vercel.app/",
  },
  {
    title: "Morse Code Converter",
    description:
      "A simple converter that turns Morse code into text and back again. A beginner-friendly project built with Python.",
    tags: ["Python", "Web"],
    image: morse,
    ghLink: "https://github.com/kushal-s0/Morse-Code-Converter",
    demoLink: "https://morse-code-converter-beige.vercel.app/",
  },
  {
    title: "TicTacToe",
    description:
      "The classic TicTacToe game, playable in the browser just for fun. A beginner-friendly project built with Python.",
    tags: ["Python", "Game"],
    image: tictactoe,
    ghLink: "https://github.com/kushal-s0/Tictactoe",
    demoLink: "https://tictactoe-beta-two.vercel.app/",
  },
  {
    title: "Color Palette Generator",
    description:
      "Generate a custom colour palette from any uploaded image. The app extracts prominent colours entirely offline with no external APIs, showcasing practical image processing in Python.",
    tags: ["Python", "Image Processing"],
    image: color,
    ghLink: "https://github.com/kushal-s0/colourpalletgenerator",
  },
  {
    title: "Breakout Game",
    description:
      "A Python take on the classic Breakout: bounce the ball with your paddle, smash every brick, and climb through levels of increasing difficulty with score tracking. Built with Pygame.",
    tags: ["Python", "Pygame"],
    image: game,
    ghLink: "https://github.com/kushal-s0/Breakout-Game",
  },
];
