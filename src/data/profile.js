import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaJava } from "react-icons/fa";
import { FiMap } from "react-icons/fi";
import { BsHeadsetVr } from "react-icons/bs";
import {
  TbSql,
  TbBinaryTree,
  TbChartBar,
  TbHandStop,
  TbTextRecognition,
  TbBrain,
  TbBrandThreejs,
} from "react-icons/tb";
import {
  SiCplusplus,
  SiC,
  SiCsharp,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiSocketdotio,
  SiTailwindcss,
  SiBootstrap,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiStreamlit,
  SiThreedotjs,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiSqlite,
  SiRedis,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiAmazonaws,
  SiCloudflarepages,
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

// Grouped for the About page; the home marquee and stats use the flat list.
export const skillGroups = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython, color: "#4b8bbe" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "C#", icon: SiCsharp, color: "#a179dc" },
      { name: "Java", icon: FaJava, color: "#f89820" },
      { name: "C", icon: SiC, color: "#a8b9cc" },
      { name: "C++", icon: SiCplusplus, color: "#659ad2" },
      { name: "SQL", icon: TbSql, color: "#f29111" },
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss3, color: "#2965f1" },
    ],
  },
  {
    title: "Web & backend",
    items: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Node.js", icon: SiNodedotjs, color: "#68a063" },
      { name: "Express", icon: SiExpress, color: "#d4d4d8" },
      { name: "Django REST", icon: SiDjango, color: "#44b78b" },
      { name: "Flask", icon: SiFlask, color: "#e5e7eb" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#ffffff" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#8f6ad8" },
    ],
  },
  {
    title: "AI & machine learning",
    items: [
      { name: "scikit-learn", icon: SiScikitlearn, color: "#f7931e" },
      { name: "XGBoost", icon: TbBinaryTree, color: "#34a8e0" },
      { name: "SHAP", icon: TbChartBar, color: "#ff3d7f" },
      { name: "MediaPipe", icon: TbHandStop, color: "#26c6da" },
      { name: "NLTK", icon: TbTextRecognition, color: "#7dd3fc" },
      { name: "Pandas", icon: SiPandas, color: "#e70488" },
      { name: "NumPy", icon: SiNumpy, color: "#4dabcf" },
      { name: "LLM APIs (Groq, Convai)", icon: TbBrain, color: "#f472b6" },
      { name: "Streamlit", icon: SiStreamlit, color: "#ff4b4b" },
    ],
  },
  {
    title: "3D, XR & maps",
    items: [
      { name: "Unity", icon: SiUnity, color: "#ffffff" },
      { name: "Unity XR", icon: BsHeadsetVr, color: "#c084fc" },
      { name: "Three.js", icon: SiThreedotjs, color: "#ffffff" },
      { name: "React Three Fiber", icon: TbBrandThreejs, color: "#61dafb" },
      { name: "MapLibre GL", icon: FiMap, color: "#3ba6ff" },
    ],
  },
  {
    title: "Data & infrastructure",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "MySQL", icon: SiMysql, color: "#5d9ad5" },
      { name: "Oracle Database", icon: SiOracle, color: "#ff4d4d" },
      { name: "SQLite", icon: SiSqlite, color: "#44a8e0" },
      { name: "Redis", icon: SiRedis, color: "#ff5a4e" },
      { name: "Supabase", icon: SiSupabase, color: "#3ecf8e" },
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#e6edf3" },
      { name: "Docker", icon: SiDocker, color: "#2496ed" },
      { name: "AWS", icon: SiAmazonaws, color: "#ff9900" },
      { name: "Cloudflare Pages", icon: SiCloudflarepages, color: "#f38020" },
      { name: "Render", icon: SiRender, color: "#46e3b7" },
    ],
  },
];

export const skills = skillGroups.flatMap((group) => group.items);

export const tools = [
  { name: "VS Code", icon: SiVisualstudiocode, color: "#3ea6f0" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Heroku", icon: SiHeroku, color: "#a78bda" },
  { name: "Slack", icon: SiSlack, color: "#e01e5a" },
];
