import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiHeroku,
  SiRender,
  SiUnity,
} from "react-icons/si";
import resume from "../Assets/Kushal_resume.pdf.pdf";

export { resume };

export const socials = [
  { name: "GitHub", href: "https://github.com/kushal-s0", icon: AiFillGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kushaldsoni/", icon: FaLinkedinIn },
  { name: "X", href: "https://x.com/", icon: AiOutlineTwitter },
  { name: "Instagram", href: "https://www.instagram.com/_kushal_s._", icon: AiFillInstagram },
];

export const skills = [
  { name: "C++", icon: SiCplusplus, color: "#659ad2" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "Python", icon: SiPython, color: "#4b8bbe" },
  { name: "Java", icon: FaJava, color: "#f89820" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss3, color: "#2965f1" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
  { name: "Express", icon: SiExpress, color: "#d4d4d8" },
  { name: "Django", icon: SiDjango, color: "#44b78b" },
  { name: "Flask", icon: SiFlask, color: "#e5e7eb" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "MySQL", icon: SiMysql, color: "#5d9ad5" },
  { name: "SQLite", icon: SiSqlite, color: "#44a8e0" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "#e6edf3" },
];

export const tools = [
  { name: "VS Code", icon: SiVisualstudiocode, color: "#3ea6f0" },
  { name: "Unity", icon: SiUnity, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Render", icon: SiRender, color: "#46e3b7" },
  { name: "Heroku", icon: SiHeroku, color: "#a78bda" },
  { name: "Slack", icon: SiSlack, color: "#e01e5a" },
];
