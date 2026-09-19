import { FaTrophy, FaMedal, FaAws } from "react-icons/fa";
import { FiMic, FiTrendingUp, FiMail } from "react-icons/fi";
import { SiGoogleanalytics } from "react-icons/si";

export const experience = [
  {
    company: "Claidroid Technologies",
    initials: "CT",
    location: "Remote",
    type: "Internship",
    roles: [
      {
        title: "Generative AI & Agentic AI Intern",
        period: "Dec 2025 – Jan 2026",
        points: [
          "Developed a scalable AI-powered hospital management system using Python and agentic AI, integrating multiple predictive models for bed-occupancy forecasting, medicine-inventory forecasting and intelligent resource management.",
          "Designed AI workflows combining weather APIs, inventory data and machine-learning models to support data-driven decisions across multiple hospitals within the organisation.",
        ],
        tags: ["Python", "Agentic AI", "Generative AI", "Forecasting", "Weather APIs"],
      },
      {
        title: "Machine Learning Intern — Finance",
        period: "Jun 2025 – Jul 2025",
        points: [
          "Worked with financial datasets in Python, covering data preprocessing, feature engineering and machine-learning model evaluation.",
        ],
        tags: ["Python", "Machine Learning", "Feature Engineering", "Financial Data"],
      },
    ],
  },
  {
    company: "Deloitte Australia",
    initials: "D",
    location: "Virtual · Forage",
    type: "Job simulation",
    roles: [
      {
        title: "Technology Job Simulation",
        period: "Virtual experience",
        points: [
          "Completed technology-focused, client-style tasks simulating real-world consulting scenarios.",
          "Gained exposure to problem-solving, system analysis and applying technical concepts in business contexts.",
        ],
        tags: ["Consulting", "Problem Solving", "System Analysis"],
      },
    ],
  },
];

export const education = {
  school: "K. J. Somaiya Institute of Technology",
  affiliation: "Affiliated to the University of Mumbai",
  degree: "B.Tech in Computer Engineering (Honours in AI & ML)",
  period: "May 2023 – May 2027",
  cgpa: "9.48",
  courses: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Operating Systems",
    "Computer Networks",
  ],
};

// `tier` sets the accent colour and icon; `project` links to a case study slug.
export const achievementTiers = {
  gold: { icon: FaTrophy, color: "#fbbf24" },
  silver: { icon: FaMedal, color: "#cbd5e1" },
  stage: { icon: FiMic, color: "#22d3ee" },
  top: { icon: FiTrendingUp, color: "#f472b6" },
};

export const achievements = [
  {
    tier: "gold",
    title: "Winner",
    event: "IET InTech 2K26",
    detail: "National-level project competition",
    project: "atomix",
  },
  {
    tier: "gold",
    title: "Winner",
    event: "TechnoGenesis 2K24",
    detail: "Project competition",
    project: "project-hub",
  },
  {
    tier: "silver",
    title: "2nd Prize",
    event: "Somaiya AI-Robo Festival 2026",
    detail: "AI-Robotics Project Exhibition & Competition",
    project: "geoswipe",
  },
  {
    tier: "silver",
    title: "Runner-up",
    event: "KJSIT Internal Hackathon 2026",
    detail: "Out of 100 teams",
    project: "vanaspati",
  },
  {
    tier: "gold",
    title: "Winner",
    event: "KJSIT Campus Hackathon",
    detail: "One of the winning teams",
  },
  {
    tier: "stage",
    title: "Presented",
    event: "CIIA-5 · Creative Ideas & Innovations in Action",
    detail: "National-level innovation showcase, Nehru Science Centre, Mumbai",
    project: "geoswipe",
  },
  {
    tier: "top",
    title: "Top 20",
    event: "TSEC Hackathon",
    detail: "Thadomal Shahani Engineering College, Mumbai",
    project: "hospital-operations-sync-platform",
  },
];

export const certifications = [
  { title: "AWS Academy Graduate — Cloud Foundations", issuer: "AWS Academy", icon: FaAws, color: "#ff9900" },
  { title: "Google Analytics Certification", issuer: "Google", icon: SiGoogleanalytics, color: "#f9ab00" },
  { title: "Letter of Appreciation for CIIA‑5", issuer: "Somaiya", icon: FiMail, color: "#c084fc" },
];
