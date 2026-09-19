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

import atomixMolecular from "../Assets/Projects/atomix/molecular.webp";
import atomixHeating from "../Assets/Projects/atomix/heating.webp";
import atomixSuccess from "../Assets/Projects/atomix/success.webp";
import atomixReactionBook from "../Assets/Projects/atomix/reaction-book.webp";
import atomixEnergy from "../Assets/Projects/atomix/energy-profile.webp";
import atomixPeriodic from "../Assets/Projects/atomix/periodic-table.webp";
import atomixTutor from "../Assets/Projects/atomix/ai-tutor.webp";
import atomixAssessment from "../Assets/Projects/atomix/assessment.webp";

import geoGlobe from "../Assets/Projects/geoswipe/globe-quiz.webp";
import geoMap from "../Assets/Projects/geoswipe/heritage-map.webp";
import geoHub from "../Assets/Projects/geoswipe/monument-hub.webp";
import geoGateway from "../Assets/Projects/geoswipe/gateway.webp";
import geoModel from "../Assets/Projects/geoswipe/3d-model.webp";
import geoStreet from "../Assets/Projects/geoswipe/street-view.webp";
import geoStorybook from "../Assets/Projects/geoswipe/storybook.webp";

import vanReplica from "../Assets/Projects/vanaspati/vanaspatyam.webp";
import vanPlantCard from "../Assets/Projects/vanaspati/plant-card.webp";
import vanTeaching from "../Assets/Projects/vanaspati/teaching-garden.webp";
import vanTwoGardens from "../Assets/Projects/vanaspati/two-gardens.webp";
import vanAtlas from "../Assets/Projects/vanaspati/atlas.webp";
import vanQuiz from "../Assets/Projects/vanaspati/quiz.webp";
import vanTour from "../Assets/Projects/vanaspati/tour.webp";
import vanCompendium from "../Assets/Projects/vanaspati/compendium.webp";

import hospDashboard from "../Assets/Projects/hospital/dashboard.webp";
import hospAppointments from "../Assets/Projects/hospital/appointments.webp";
import hospOpd from "../Assets/Projects/hospital/opd-queue.webp";
import hospWait from "../Assets/Projects/hospital/wait-time.webp";
import hospAdmissions from "../Assets/Projects/hospital/admissions.webp";
import hospBeds from "../Assets/Projects/hospital/beds.webp";
import hospStock from "../Assets/Projects/hospital/stock-ml.webp";
import hospDemand from "../Assets/Projects/hospital/demand.webp";
import hospWeather from "../Assets/Projects/hospital/weather.webp";
import hospStockIncrease from "../Assets/Projects/hospital/stock-increase.webp";
import hospBilling from "../Assets/Projects/hospital/billing.webp";
import hospRazorpay from "../Assets/Projects/hospital/razorpay.webp";
import hospDoctor from "../Assets/Projects/hospital/doctor.webp";

import internHome from "../Assets/Projects/internship/home.webp";
import internResults from "../Assets/Projects/internship/results.webp";
import internDetails from "../Assets/Projects/internship/details.webp";
import internMobile from "../Assets/Projects/internship/mobile-dark.webp";

// Each major project has a case-study page at /project/:slug built from `details`.
// Every field inside `details` is optional; the page only renders what's present.
export const majorProjects = [
  {
    slug: "atomix",
    title: "Atomix",
    tagline: "Your personal laboratory with AI.",
    description:
      "Atomix is an AI-powered 3D virtual chemistry laboratory built in Unity that allows students to perform experiments freely by selecting chemicals, quantities, temperatures, and procedures, just like in a real lab. The platform simulates realistic reaction outcomes, provides an AI voice-enabled assistant for personalized guidance and error analysis, visualizes chemical processes at the molecular level, and tracks experiment history to enhance conceptual understanding through interactive and safe learning.",
    tags: ["Unity", "AI Assistant", "Voice", "3D Simulation"],
    award: "Winner · IET InTech 2K26 (National)",
    ghLink: "https://github.com/Dhir-learner/Atomix",
    demoLink: "https://kushal-s0.itch.io/atomix",
    demoVideo: "https://drive.google.com/file/d/1XU7xea-vn6SSq1Ce_sKLWOYANmqZHwxc/view?usp=drive_link",
    images: [atomix1, atomix2, atomix3],
    details: {
      summary:
        "A VR chemistry lab where students can get it wrong safely, with an AI tutor that knows exactly why.",
      role: "Unity engineering, simulation design and AI integration",
      timeline: "Apr 2026 – Sep 2026",
      recognition: "Winner, IET InTech 2K26 (National level)",
      stack: ["Unity 6", "C#", "Unity XR", "Convai API", "ShaderGraph", "NUnit"],
      metrics: [
        { value: 8, label: "Chemical reactions simulated" },
        { value: 226, suffix: "/226", label: "Automated tests passing" },
        { value: 40, prefix: "~", suffix: "K", label: "Lines of C#" },
        { value: 18, label: "Assessment tasks" },
      ],
      overview:
        "Atomix is a Unity 6 chemistry laboratory for VR headsets and desktop. Students pick a reaction, pour real quantities with their own hands and see exactly what went wrong when an experiment fails, then ask an in-lab AI assistant that can read the experiment in front of them.",
      problem:
        "Lab access is the bottleneck in chemistry education. Reagents cost money, some reactions are genuinely dangerous, and a whole class usually watches one demonstration instead of running the experiment themselves.",
      approach:
        "Rebuild the lab bench as a room students can walk into, where quantities matter and mistakes cost nothing. Pair it with an AI assistant that sees the live experiment, so a student practising alone still gets real answers.",
      architecture: [
        {
          title: "Input",
          nodes: [
            { title: "VR headset", text: "Grab, pour and heat with Unity XR controllers" },
            { title: "Desktop fallback", text: "Keyboard and mouse, injected at runtime" },
          ],
        },
        {
          title: "Simulation",
          nodes: [
            { title: "Free-hand reaction engine", text: "Validates quantity, order and heating time" },
            { title: "Experiment context", text: "Reaction, amounts poured, targets, attempts" },
          ],
        },
        {
          title: "Learning",
          nodes: [
            { title: "AI lab assistant", text: "Convai REST API · voice and text" },
            { title: "Offline knowledge base", text: "Rule-based answers from live measurements" },
            { title: "Molecular animation & graphs", text: "Bond changes, ΔH, Ea, ΔS, ΔG" },
          ],
        },
        {
          title: "Progress",
          nodes: [
            { title: "Experiment history", text: "Up to 300 attempts, saved as JSON" },
            { title: "Assessment mode", text: "18 timed tasks, coin economy, exam report" },
          ],
        },
      ],
      decisions: [
        {
          title: "A reaction engine instead of a scripted sequence",
          text: "Most lab simulators march you through fixed button presses. Atomix lets students pour freely and checks what actually happened (overdose, underdose, wrong order or heating time), then explains the chemistry behind the failure instead of a generic “try again”.",
          points: [
            "8 inorganic reactions",
            "Quantity, order and heating-time validation",
            "Failure explanations tied to the student's own measurements",
          ],
        },
        {
          title: "An assistant that knows what is on the bench",
          text: "The assistant receives the live experiment state: the reaction, what was poured, the target amounts and why an attempt failed. It talks to Convai over plain REST calls with push-to-talk voice or typed questions, and falls back to an offline, rule-based knowledge base when there is no connection.",
          points: [
            "Voice and text input",
            "Grounded in live experiment data",
            "Offline fallback with no network required",
          ],
        },
        {
          title: "Learning and assessment, not just a sandbox",
          text: "After a successful reaction, students can replay it as a live 3D molecular animation or study its energy-profile and entropy graphs. A separate testing lab turns everything into timed practical and theory tasks with a coin economy and a downloadable exam report.",
          points: [
            "3D molecular animations for all 8 reactions",
            "ΔH, Ea, ΔS and ΔG graphs",
            "18 timed practical and theory tasks with HTML and CSV exam reports",
            "226 of 226 automated tests passing",
          ],
        },
      ],
      outcome: "Won IET InTech 2K26 at the national level. Atomix is playable on itch.io.",
      gallery: [
        { src: atomixMolecular, caption: "Molecular animation of calcium oxide reacting with water, with pause, replay, 3D view and Ask AI controls" },
        { src: atomixHeating, caption: "Heating iron sulfate over the Bunsen burner while the lab assistant explains the next step" },
        { src: atomixSuccess, caption: "Reaction success: CaO + H₂O → Ca(OH)₂, with a suggestion to test the product with litmus paper" },
        { src: atomixReactionBook, caption: "The reaction book and an interactive periodic table, opened right at the bench" },
        { src: atomixEnergy, caption: "Energy-profile graph with ΔH, Ea, ΔS and ΔG, plus an Ask AI to Explain button" },
        { src: atomixPeriodic, caption: "Periodic table that highlights the elements currently on the bench" },
        { src: atomixTutor, caption: "The in-lab AI assistant, ready for voice or typed questions" },
        { src: atomixAssessment, caption: "Assessment mode: a timed practical task with the coin economy" },
        { src: atomix1, caption: "RoboChem, the lab assistant, welcoming students into the lab" },
        { src: atomix3, caption: "The assistant guiding a titration to find an unknown concentration" },
      ],
    },
  },
  {
    slug: "geoswipe",
    title: "GeoSwipe",
    tagline: "Explore world heritage with a wave of your hand.",
    description:
      "GeoSwipe is an immersive educational platform that allows users to explore UNESCO World Heritage Sites, monuments, forts, temples, and palaces through interactive maps and a 3D Earth visualization. The platform features AI-powered hand gesture control, enabling complete navigation without a mouse or keyboard, along with geography quizzes, historical storybooks, and travel guides to create an engaging and accessible learning experience.",
    tags: ["3D Globe", "Gesture Control", "Interactive Maps", "EdTech"],
    award: "2nd Prize · Somaiya AI-Robo Festival 2026",
    ghLink: "https://github.com/Interior-Gardener/Geoswipe",
    demoLink: "https://geoswipe.pages.dev/",
    demoVideo: "https://drive.google.com/file/d/13jWqWI3qgzt3HObZ80NEqZqjEjKYIqeV/view?usp=sharing",
    images: [geoswipe1, geoswipe2, geoswipe3],
    details: {
      summary: "A heritage-exploration globe you steer with your bare hands.",
      role: "Full-stack engineering, computer vision and AI integration",
      timeline: "Jul 2025 – Sep 2026",
      recognition: "Runner-up, AI-Robo Festival 2026 · Exhibited at CIIA-5",
      stack: ["React 19", "Express 5", "MongoDB", "Three.js", "MediaPipe", "Socket.IO", "MapLibre GL", "Groq"],
      metrics: [
        { value: 126, label: "Heritage sites, 36 UNESCO" },
        { value: 9, label: "External APIs integrated" },
        { value: 2, suffix: " ms", label: "Cached lookup, down from 8.7 s" },
        { value: 780, label: "Quiz questions" },
      ],
      overview:
        "GeoSwipe puts 126 of India's heritage sites on a live 3D globe and map that you control with hand gestures through your webcam. Every monument opens a hub of live news, weather, 360° views, 3D models, quizzes and an AI guide, and friends can challenge each other to real-time quiz duels.",
      problem:
        "Heritage and geography are still taught from flat maps and lists of names. Students memorise places they never get to explore, and most map apps still expect a mouse, a keyboard and patience.",
      approach:
        "Put India's heritage on a living 3D globe, then take the mouse away. Hand tracking lets you fly, zoom and select in mid-air, while an LLM guide, live news and weather give every monument context.",
      architecture: [
        {
          title: "Browser",
          nodes: [
            { title: "React 19 interface", text: "Globe, maps, monument hubs, trip planner" },
            { title: "MediaPipe hand tracking", text: "9 gestures · 20 FPS · fully on-device" },
            { title: "Three.js + MapLibre GL", text: "3D globe and satellite maps" },
          ],
        },
        {
          title: "Express 5 API",
          nodes: [
            { title: "25 REST endpoints", text: "Rate-limited proxy; API keys never reach the browser" },
            { title: "Socket.IO duel rooms", text: "1v1 · 4 modes · 10 rounds" },
          ],
        },
        {
          title: "Data & cache",
          nodes: [
            { title: "Two-tier cache", text: "In-memory map, then MongoDB, with per-resource TTLs" },
            { title: "API key pool", text: "Rotates on 429, 401 and 403 responses" },
            { title: "MongoDB", text: "Sites, quiz questions, flags, images, cache" },
          ],
        },
        {
          title: "External services",
          nodes: [
            { title: "Groq LLM", text: "Heritage guide, safety assistant, trip planner" },
            { title: "Live context", text: "OpenWeatherMap, NewsAPI, Wikipedia, Unsplash" },
            { title: "Maps & places", text: "MapTiler, Overpass (OpenStreetMap)" },
          ],
        },
      ],
      decisions: [
        {
          title: "Moving hand tracking into the browser",
          text: "The first version streamed base64-encoded webcam frames over a WebSocket to a Python worker. I ported the gesture classifier to JavaScript and ran MediaPipe's hand landmarker directly in the browser, on the GPU with a CPU fallback, so no camera frame ever leaves the device.",
          before: { value: "~3.2 GB/h", label: "webcam data uploaded per user" },
          after: { value: "0 frames", label: "leave the device" },
          points: [
            "9 gesture classes",
            "20 FPS inference cap",
            "5-frame stability threshold",
            "Matched the original classifier on 20,000 generated poses with 0 mismatches",
          ],
        },
        {
          title: "A two-tier cache that stretches free API tiers",
          text: "Every visitor to the same monument should share one upstream call. Requests hit an in-memory map, then a MongoDB cache with per-resource lifetimes; concurrent misses are de-duplicated, stale answers are served when a provider fails, and a pool of API keys rotates on rate-limit or auth errors.",
          before: { value: "8.7 s", label: "safe-places lookup, uncached" },
          after: { value: "2 ms", label: "the same lookup, cached" },
          points: [
            "News cached for 12 h",
            "Weather cached for 4 h, shared within ~1 km",
            "Map styles cached for 24 h",
            "Safe places cached for 7 days",
          ],
        },
        {
          title: "Real-time 1v1 quiz duels",
          text: "Two players join with a room code and race through ten rounds across four modes: flags, geography trivia, India-wide heritage and single-monument questions. Rooms live in memory, are capped and swept every minute, and each socket is rate-limited so nobody can exhaust the server.",
          points: [
            "4 game modes",
            "10 rounds per match",
            "500 concurrent rooms maximum",
            "30 room actions per 10 seconds per socket",
          ],
        },
      ],
      outcome:
        "Runner-up at AI-Robo Festival 2026 and exhibited at the national-level CIIA-5 innovation showcase at Nehru Science Centre, Mumbai. GeoSwipe is live on Cloudflare Pages.",
      gallery: [
        { src: geoGlobe, caption: "3D globe running a geography quiz, with the gesture-control legend on screen" },
        { src: geoMap, caption: "Satellite map of heritage sites across western India, with fly-to search" },
        { src: geoHub, caption: "Monument hub for the Ajanta Caves: overview, how to reach and 360° Street View" },
        { src: geoGateway, caption: "Flying to the Gateway of India, with quiz, trip and safety tools one tap away" },
        { src: geoModel, caption: "Annotated 3D model of the Gateway of India" },
        { src: geoStreet, caption: "360° Street View at the Taj Mahal" },
        { src: geoStorybook, caption: "Heritage storybook: a monument's history told chapter by chapter" },
        { src: geoswipe1, caption: "Explore mode, with lighting and atmosphere controls for the globe" },
      ],
    },
  },
  {
    slug: "vanaspati",
    title: "Vanaspati",
    tagline: "A virtual herbal garden, grown from botany.",
    description:
      "Vanaspati is an interactive 3D garden of 30 AYUSH medicinal plants that runs entirely in the browser. Every plant is grown procedurally from its botanical description, and alongside a teaching garden arranged by what the plants treat, it includes a walkable first-person replica of Vanaspatyam, the real Ayurvedic garden on the Somaiya campus in Mumbai.",
    tags: ["Three.js", "React Three Fiber", "TypeScript", "Procedural 3D"],
    award: "Runner-up · KJSIT Internal Hackathon",
    ghLink: "https://github.com/Interior-Gardener/virtual-herbal-garden",
    demoLink: "https://tushar-surti.github.io/virtual-herbal-garden/",
    images: [vanReplica, vanPlantCard, vanTeaching],
    details: {
      summary:
        "A 3D herbal garden where every plant is grown from its botanical description, including a walkable replica of my college's real Ayurvedic garden.",
      role: "3D engineering, procedural plant generation and the Vanaspatyam campus replica",
      timeline: "Aug 2026 – Sep 2026 · Smart India Hackathon problem statement",
      recognition: "Runner-up of 100 teams, KJSIT Internal Hackathon 2026",
      stack: ["React 19", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS 4", "Zustand", "Vite"],
      metrics: [
        { value: 30, label: "Medicinal species, grown from data" },
        { value: 0, label: "Downloaded 3D models" },
        { value: 20, label: "Beds replicated from the real garden" },
        { value: 6, label: "Narrated, camera-led tours" },
      ],
      overview:
        "Vanaspati is an interactive 3D garden of 30 AYUSH medicinal plants that runs entirely in the browser. It holds two gardens: a teaching garden laid out by what the plants treat, and Vanaspatyam, a walkable replica of the Ayurvedic medicinal-plants garden on the Somaiya campus in Mumbai where my college, K. J. Somaiya Institute of Technology, stands.",
      problem:
        "Medicinal plants are taught from lists and herbarium photos. Students rarely see how a plant is built or which part carries the medicine, the Ayurvedic properties are memorised as words rather than understood, and most students never walk through a real herbal garden.",
      approach:
        "Grow every plant from its botanical description so the 3D model and the botany can never disagree, then plant them in two gardens: one arranged by what the plants treat, and a faithful copy of the real garden on my own campus that anyone can walk through from a browser.",
      architecture: [
        {
          title: "Browser app",
          nodes: [
            { title: "React 19 + TypeScript", text: "11 routes; every plant, bed and comparison is a shareable URL" },
            { title: "Zustand store", text: "Bookmarks, study notes and progress kept on the device" },
          ],
        },
        {
          title: "3D engine",
          nodes: [
            { title: "Procedural plant generator", text: "Leaf shape, phyllotaxy, branching and flowers from data" },
            { title: "One shared foliage shader", text: "Wind, venation and bark in a single program" },
            { title: "Day–night cycle", text: "One clock drives sky, sun, fog and fireflies" },
          ],
        },
        {
          title: "Knowledge",
          nodes: [
            { title: "30-species compendium", text: "Botany, Ayurvedic profile, names in 11 languages, cautions" },
            { title: "Ayurveda parser", text: "Rasa, virya, vipaka and dosha charts read from the prose" },
          ],
        },
        {
          title: "Experiences",
          nodes: [
            { title: "Vanaspatyam replica", text: "20 beds and the lily pond, walkable in first person" },
            { title: "Tours, atlas & quiz", text: "6 narrated walks, data views, 40 click-the-plant questions" },
          ],
        },
      ],
      decisions: [
        {
          title: "Plants grown from their description, not downloaded",
          text: "Every species is written as data: its archetype, height, leaf shape and arrangement, serration, branching and flower form. A seeded generator turns those numbers into geometry at run time, and the same numbers draw the 2D specimen plate on every card, so a square-stemmed mint really has a square stem and a neem frond really carries its leaflets.",
          points: [
            "30 species with no 3D model files",
            "Seeded, so a plant always grows the same way",
            "The same data drives the 3D model and the 2D plate",
            "A new species is about thirty lines of data",
          ],
        },
        {
          title: "Rebuilding a real garden from its plan",
          text: "Vanaspatyam is the Ayurvedic medicinal-plants garden on my college campus, opened on 12 February 2016. I rebuilt it from its surveyed plan (30 m by 25 m, a south gate, a 2.2 m central spine and a lily pond closing the north end) and dressed it from photographs taken standing in it: red lateritic soil, brick-kerbed beds, white label boards on black posts and the transmission pylons everyone recognises first. Hover a bed's board and its printed plant card opens, laid out like the real ones.",
          points: [
            "30 species in 20 beds and the pond",
            "Bed positions derived from the plan and checked against each other",
            "First-person walking with WASD and pointer lock",
            "Printed plant cards recreated for every bed",
          ],
        },
        {
          title: "Fast enough for a classroom laptop",
          text: "Each plant merges into at most six geometries, one per material, instead of hundreds of separate meshes. The lawn and bed planting are two instanced meshes of about 2,600 tufts, all foliage shares one compiled shader, and quality is detected from the device. There is no backend: narration uses the browser's own speech synthesis, and saved plants and notes never leave the visitor's device.",
          before: { value: "100s", label: "meshes per plant, unmerged" },
          after: { value: "≤ 6", label: "geometries per plant, merged" },
          points: [
            "~2,600 grass tufts in 2 draw calls",
            "One shared foliage shader program",
            "Quality auto-detected, overridable in settings",
            "Works offline after the first load",
          ],
        },
      ],
      outcome:
        "Runner-up out of 100 teams at my college's internal hackathon in 2026, built for the Smart India Hackathon's Virtual Herbal Garden problem statement. Vanaspati is live on GitHub Pages, and the Vanaspatyam replica lets anyone walk my college's Ayurvedic garden from a browser.",
      gallery: [
        { src: vanReplica, caption: "Aerial view of the Vanaspatyam replica at dusk: brick-kerbed beds either side of a central spine, the lily pond and the pylons overhead" },
        { src: vanPlantCard, caption: "Hovering a bed's label board opens its printed plant card, laid out like the real ones" },
        { src: vanTeaching, caption: "The teaching garden, with beds arranged by what the plants treat" },
        { src: vanTwoGardens, caption: "Two gardens, the same plants: pick the teaching garden or the real one" },
        { src: vanAtlas, caption: "The atlas links every plant to the conditions it is used for" },
        { src: vanQuiz, caption: "Click-the-plant quiz, played inside the garden" },
        { src: vanTour, caption: "A narrated, camera-led tour stop" },
        { src: vanCompendium, caption: "The 30-species compendium, searchable by name, symptom or plant part" },
      ],
    },
  },
  {
    slug: "lead-management-crm",
    title: "Lead Management CRM",
    tagline: "Track, filter and convert leads with live analytics.",
    description:
      "Lead Management CRM is a full-stack customer relationship management platform designed to streamline lead tracking and sales workflows. It enables users to create, manage, search, filter, and update leads efficiently while providing real-time analytics, interactive charts, status tracking, and a responsive dashboard powered by a scalable Express, MongoDB, and Next.js architecture.",
    tags: ["Next.js", "Express", "MongoDB", "Analytics"],
    ghLink: "https://github.com/kushal-s0/lead-management-CRM",
    demoLink: "https://lead-management-crm-ruddy.vercel.app/",
    demoVideo: "https://drive.google.com/file/d/1u2XfoSPr_b9oiNx9GzWAN86JszCxNY1k/view",
    images: [crm1, crm2, crm3],
    details: {
      stack: ["Next.js", "Express", "MongoDB", "Node.js"],
      features: [
        { title: "Complete lead lifecycle", text: "Create, manage and update leads from one workspace." },
        { title: "Search and filters", text: "Find any lead instantly by searching, filtering and sorting the pipeline." },
        { title: "Status tracking", text: "Move each lead through the pipeline stages from new to converted or lost." },
        { title: "Live analytics", text: "Real-time totals and interactive charts for the status mix and pipeline distribution." },
        { title: "Responsive dashboard", text: "The whole workflow works as well on a phone as on a desktop." },
        { title: "Scalable architecture", text: "A Next.js front end talking to an Express and MongoDB API." },
      ],
      gallery: [
        { src: crm1, caption: "Dashboard with lead totals, the status mix and the pipeline distribution" },
        { src: crm2, caption: "Creating a new lead" },
        { src: crm3, caption: "Lead workspace with search, filters and inline status updates" },
      ],
    },
  },
  {
    slug: "hospital-operations-sync-platform",
    title: "Hospital Operations Sync Platform",
    tagline: "Real-time patient flow and resource intelligence.",
    description:
      "Hospital Operations Sync Platform is an intelligent healthcare management system designed to optimize patient flow and hospital resource utilization through real-time operational insights. The platform provides dynamic OPD queue management, live bed availability tracking, inventory monitoring, rule-based patient admissions, multiple ML models for predictions, and inter-hospital capacity sharing, enabling administrators to make faster and more effective operational decisions.",
    tags: ["Machine Learning", "Real-time", "Healthcare", "Dashboards"],
    award: "Top 20 · TSEC Hackathon",
    ghLink: "https://github.com/kushal-s0/Hospital-Operations-Sync-Platform.git",
    demoVideo: "https://drive.google.com/file/d/1vhOWFJK6XOL5-YuNJSvXZAZXylr6o52t/view",
    images: [hospital1, hospital2, hospital3],
    details: {
      summary:
        "One live view of a hospital's beds, queues and stock, with models that forecast what runs out next.",
      role: "Full-stack engineering and machine learning",
      timeline: "Jan 2026 · hackathon build",
      recognition: "Top 20 teams, Thadomal Shahani Engineering College hackathon",
      stack: ["Django REST Framework", "React", "MySQL", "scikit-learn", "JWT", "Razorpay"],
      metrics: [
        { value: 6, label: "ML models in the product" },
        { value: 33, label: "Database tables" },
        { value: 4, label: "Role-based dashboards" },
        { value: 11, label: "Feature modules" },
      ],
      overview:
        "A hospital operations platform that gives doctors, nurses, administrators and receptionists their own live dashboards (beds, OPD queues, admissions, inventory and billing) backed by machine-learning models that predict wait times, stockouts and financial risk.",
      problem:
        "Hospital staff juggle beds, queues, stock and billing across disconnected tools. Shortages and long waits are usually discovered after they have already happened, and neighbouring hospitals have no quick way to share capacity.",
      approach:
        "Put every operational signal into one platform with a dashboard for each role, then add models that look ahead: how long the next patient will wait, which medicines will run out, and where money is being lost.",
      architecture: [
        {
          title: "Clients",
          nodes: [
            { title: "React dashboards", text: "Doctor, nurse, admin and receptionist" },
            { title: "City capacity view", text: "Anonymised bed and ICU availability" },
          ],
        },
        {
          title: "API",
          nodes: [
            { title: "Django REST Framework", text: "11 apps behind JWT authentication" },
            { title: "Payments", text: "Razorpay orders, verification and webhooks" },
          ],
        },
        {
          title: "Intelligence",
          nodes: [
            { title: "6 scikit-learn models", text: "Wait time, stockout, profit and loss" },
            { title: "Weather demand engine", text: "Weather + air quality → medicine demand" },
          ],
        },
        {
          title: "Data & services",
          nodes: [
            { title: "MySQL", text: "33-table relational schema" },
            { title: "OpenWeatherMap", text: "Current weather and AQI, cached for 1 h" },
          ],
        },
      ],
      decisions: [
        {
          title: "Predictions where they change a decision",
          text: "Instead of one showcase model, each prediction sits where staff act on it: wait-time estimates in the OPD queue, stockout risk and days-to-stockout in inventory, and profit and loss-area forecasts on the billing dashboard. The wait-time estimate falls back to a rule-based calculation if the model fails, so the queue never goes blank.",
          points: [
            "OPD wait-time regression",
            "Stockout classification + days-to-stockout regression",
            "Profit and loss-area prediction",
            "Rule-based fallback for wait times",
          ],
        },
        {
          title: "Weather-aware medicine demand",
          text: "Live weather and air-quality readings from OpenWeatherMap feed a rule-based engine that maps conditions to likely disease spikes and recommends stock increases, such as extra antibiotics and inhalers when respiratory infections are likely. Responses are cached for an hour, with mock data when no API key is configured.",
          points: [
            "Current weather + AQI",
            "Condition-to-disease mapping",
            "Recommended stock adjustments",
            "1-hour response cache",
          ],
        },
        {
          title: "One platform, four roles, real payments",
          text: "Django REST Framework serves 11 feature apps behind JWT authentication over a 33-table MySQL schema. Each role gets its own dashboard, a public city view shares anonymised bed and ICU availability across hospitals, and billing runs through Razorpay with HMAC-SHA256 signature verification on every payment.",
          points: [
            "11 Django feature apps",
            "33-table MySQL schema",
            "JWT authentication and role-based dashboards",
            "HMAC-SHA256 verified payments",
          ],
        },
      ],
      outcome:
        "Built end to end as a hackathon project, finishing among the top 20 teams at the Thadomal Shahani Engineering College hackathon: a working platform covering OPD queues, beds, admissions, inventory, inter-hospital sharing and billing. The full source is on GitHub.",
      gallery: [
        { src: hospDashboard, caption: "Admin dashboard: total and available beds, OPD patients, active admissions and low-stock alerts" },
        { src: hospAppointments, caption: "Appointments management with pending, today's and upcoming queues" },
        { src: hospOpd, caption: "OPD queue with an ML-predicted waiting time" },
        { src: hospWait, caption: "Wait-time prediction by urgency level, showing the factors the model considered" },
        { src: hospAdmissions, caption: "Rule-based admissions with condition tracking and discharge" },
        { src: hospBeds, caption: "Live bed availability by department and status" },
        { src: hospStock, caption: "ML stock predictions flagging items that are about to run out" },
        { src: hospDemand, caption: "Disease-based demand forecast from current admissions" },
        { src: hospWeather, caption: "Weather and AQI forecast linking air pollution to respiratory risk" },
        { src: hospStockIncrease, caption: "Recommended stock increases from the weather demand engine" },
        { src: hospBilling, caption: "Receptionist billing dashboard with predicted profit and loss-area detection" },
        { src: hospRazorpay, caption: "Paying a bill through Razorpay checkout (test mode)" },
        { src: hospDoctor, caption: "A doctor's view: only their own OPD queue" },
        { src: hospital1, caption: "The hospital's public landing page" },
      ],
    },
  },
  {
    slug: "iot-fingerprint-door-lock",
    title: "IoT Fingerprint Door Lock",
    tagline: "Smart biometric security with a remote dashboard.",
    description:
      "IoT Fingerprint Door Lock System is a smart security solution that integrates an ESP8266-based fingerprint lock with a Django-powered web dashboard for remote access management. The system provides real-time access monitoring, door lock control, analytics, CSV log exports, role-based security, and instant Telegram alerts for unauthorized access attempts.",
    tags: ["ESP8266", "Django", "IoT", "Telegram Alerts"],
    ghLink: "https://github.com/kushal-s0/iotdoorlock.git",
    demoVideo: "https://drive.google.com/file/d/1wgS9H2ilUFZcTZekZyRJuXj__0M73MLZ/view?usp=drive_link",
    images: [iot1, iot2, iot3],
    details: {
      stack: ["ESP8266", "Fingerprint sensor", "Django", "Python", "Telegram Bot API"],
      architecture: [
        {
          title: "Device",
          nodes: [
            { title: "ESP8266 fingerprint lock", text: "Scans fingerprints and drives the door lock" },
          ],
        },
        {
          title: "Server",
          nodes: [
            { title: "Django dashboard", text: "Remote access management and door control" },
            { title: "Access logs", text: "Analytics and CSV exports" },
          ],
        },
        {
          title: "Alerts",
          nodes: [{ title: "Telegram", text: "Instant alerts for unauthorised attempts" }],
        },
      ],
      features: [
        { title: "Real-time monitoring", text: "Every access attempt shows up on the dashboard as it happens." },
        { title: "Remote door control", text: "Lock or unlock the door from the web dashboard." },
        { title: "Fingerprint user management", text: "Enrol and manage the people who are allowed in." },
        { title: "Analytics and CSV exports", text: "Access activity charts, with logs you can export as CSV." },
        { title: "Role-based security", text: "Only authorised roles can manage users and control the lock." },
        { title: "Telegram alerts", text: "An instant message whenever an unauthorised attempt is detected." },
      ],
      gallery: [
        { src: iot1, caption: "Dashboard with today's access stats, door control and unauthorised attempts" },
        { src: iot2, caption: "System health: database, last activity, latest command and uptime" },
        { src: iot3, caption: "Enrolling and managing fingerprint users" },
      ],
    },
  },
  {
    slug: "community",
    title: "CommUnity",
    tagline: "One home for every club, event and announcement.",
    description:
      "CommUnity is a centralized club management platform that streamlines communication and administration for students, faculty, and club leaders. It features role-based access, announcement publishing, smart event scheduling with Google Calendar integration, faculty approval workflows, and AI-powered event reporting that automatically generates comprehensive event summaries, including attendance statistics, chief guest details, and key event highlights.",
    tags: ["Role-based Access", "Google Calendar", "AI Reports"],
    ghLink: "https://github.com/kushal-s0/CommUnity",
    demoVideo: "https://drive.google.com/file/d/1gnXLSHoTurimSiFqCFEbPClosUyVyl-U/view?usp=drive_link",
    images: [community1, community2, community3],
    details: {
      summary:
        "A centralized portal that runs the complete event lifecycle of college clubs and committees, from proposal and faculty approval to calendar scheduling, registrations and an AI-drafted post-event report.",
      stack: ["Python", "Django 5", "MySQL", "Claude API", "Google Calendar API", "django-allauth", "ReportLab", "FullCalendar"],
      overview:
        "CommUnity reduces manual work in running college clubs and committees by bringing event creation, approval, scheduling and post-event documentation into one system. Faculty, core members and students each get exactly the tools their role needs, and only @somaiya.edu accounts can sign up.",
      roles: [
        {
          title: "Faculty",
          text: "Approve or reject clubs, committees, events and deletion requests with remarks, appoint core members, reserve dates, read every report of their teams, and track a pending queue, upcoming events and a monthly activity chart.",
        },
        {
          title: "Core member",
          text: "Create a club or committee, schedule, edit, resubmit and cancel events, post announcements, manage members, mark attendance, and generate and edit post-event reports.",
        },
        {
          title: "Member / student",
          text: "Follow clubs, register for events, get notifications and add events to their own calendar.",
        },
      ],
      architecture: [
        {
          title: "Users",
          nodes: [
            { title: "Faculty, core members, students", text: "Role decorator on every view" },
            { title: "Sign-in", text: "E-mail or Google, @somaiya.edu only" },
          ],
        },
        {
          title: "Django 5 apps",
          nodes: [
            { title: "Events", text: "Approval workflow, registrations, calendar, AI reports, PDF" },
            { title: "Committees & members", text: "Clubs, gallery, follow, announcements, notice board" },
            { title: "Faculty", text: "Approvals, reserved dates, reports" },
          ],
        },
        {
          title: "Services",
          nodes: [
            { title: "Claude API", text: "Drafts formal post-event reports" },
            { title: "Google Calendar API", text: "Shared college calendar via a service account" },
            { title: "MySQL + ReportLab", text: "Data storage and branded PDF reports" },
          ],
        },
      ],
      decisions: [
        {
          title: "Scheduling that can't double-book",
          text: "A live availability check runs while an organiser types, flagging venue clashes, faculty-reserved dates and competing pending requests. Conflicts are checked again at approval time, so two requests for one slot can never both be approved.",
          points: [
            "Live venue and date clash detection",
            "Faculty-reserved dates",
            "Re-checked at approval time",
            "Every step recorded in an activity timeline",
          ],
        },
        {
          title: "AI reports grounded in the organiser's facts",
          text: "After an event, organisers answer a short form: speakers, agenda, outcomes and feedback. Claude drafts a formal, sectioned report using only the facts provided, the organiser reviews and edits it, and a branded PDF is generated for the college records.",
          points: [
            "Uses only the facts provided",
            "Organiser reviews and edits every draft",
            "Branded PDF for college records",
            "Offline template when no API key is set",
          ],
        },
        {
          title: "Events that land in everyone's calendar",
          text: "Approved events are pushed to the shared college calendar through a service account and removed if they are cancelled. Every attendee also gets an “Add to Google Calendar” link, a downloadable .ics file, and a subscribable iCal feed that keeps their phone calendar up to date.",
          points: [
            "Service-account sync with the college calendar",
            "Add-to-calendar links and .ics downloads",
            "Subscribable iCal feed",
            "In-app and e-mail notifications",
          ],
        },
      ],
      outcome:
        "A complete, tested portal: the automated suite covers every page for every role, permission guards, the full approval workflow, scheduling conflicts, registrations, attendance, AI report generation (with a mocked Claude client and the offline fallback), PDF output, calendar feeds and domain-restricted sign-up.",
      gallery: [
        { src: community1, caption: "Landing page: campus life, connected" },
        { src: community2, caption: "Clubs and committees by category, with the notice board" },
        { src: community3, caption: "Sign-in, restricted to college accounts, with Google sign-in" },
      ],
    },
  },
  {
    slug: "ai-internship-recommendation-engine",
    title: "AI Internship Recommendation Engine",
    tagline: "Personalised internships matched to your profile.",
    description:
      "AI-Based Internship Recommendation Engine is an intelligent platform that recommends personalized internship opportunities based on a user's education, skills, interests, and location. The system combines machine learning and rule-based recommendations, supports English and Hindi, provides secure user authentication, offline-ready functionality, and is built using React, Flask REST APIs, and MySQL with a CI/CD-enabled deployment pipeline.",
    tags: ["React", "Flask", "MySQL", "Machine Learning", "CI/CD"],
    ghLink: "https://github.com/kushal-s0/AI-Based_Internship_Recommendation_Engine.git",
    images: [internHome, internResults, internDetails],
    details: {
      summary:
        "A recommendation engine for the PM Internship Scheme that helps students, including first-generation, rural and tribal learners, find internships that fit their skills, preferred sector, cities and languages. Every recommendation comes with a match score and the reasons behind it.",
      timeline: "Smart India Hackathon 2025",
      stack: ["React 19", "Vite 7", "Flask", "SQLAlchemy", "scikit-learn", "FAISS", "pandas", "MySQL 8", "pytest"],
      metrics: [
        { value: 1127, label: "Internships indexed" },
        { value: 451, label: "Companies" },
        { value: 15, label: "Sectors" },
        { value: 30, label: "Cities" },
      ],
      overview:
        "Students fill in a guided three-step profile (education, experience, skills, roles, sectors, cities and languages) and get a ranked shortlist from 1,127 real PM Internship Scheme listings. Each match shows a score ring, a per-signal breakdown and reason chips like “Skills: Excel/SQL” or “In Jaipur”, so students understand why an internship fits.",
      problem:
        "With over a thousand listings across 15 sectors and 30 cities, students, especially first-generation, rural and tribal learners, struggle to find the internships they're actually suited for, and a plain keyword search gives no idea why a result was shown.",
      approach:
        "Blend semantic similarity with explicit, human-readable signals, then explain every score. Keep the experience light and bilingual so it works on a phone, in Hindi or English, even when the database is unavailable.",
      features: [
        { title: "Guided 3-step profile", text: "Education, experience, skills with autocomplete from real listings, roles, sectors, cities and languages. Progress is autosaved on the device." },
        { title: "Explainable hybrid ranking", text: "TF-IDF + FAISS similarity blended with rule-based skill, sector, city and language scores, shown as a score ring, breakdown and reason chips." },
        { title: "Eligibility check", text: "Warns when the candidate's age is outside the scheme's 21–24 range." },
        { title: "Varied shortlist", text: "One listing per company and role, and at most two per company, so results aren't ten copies of the same job." },
        { title: "Explore all internships", text: "Search and filter all 1,127 listings by sector, city and language, with pagination and shareable URLs." },
        { title: "Similar internships", text: "A details panel highlights skills you already have and finds similar roles through FAISS nearest-neighbour search." },
        { title: "Saved shortlist", text: "Bookmark internships locally, with no sign-up needed." },
        { title: "Built for everyone", text: "English and Hindi interface, light and dark themes, mobile bottom navigation and animations that respect reduced motion." },
        { title: "Resilient backend", text: "The API keeps running without MySQL by falling back to SQLite, and the UI shows engine status and reconnects automatically." },
      ],
      scoring: {
        title: "How a match is scored",
        text: "The profile becomes a weighted text query, vectorised with the trained TF-IDF model and compared with every internship vector in FAISS. Explicit signals are then scored for each internship; only the signals the candidate filled in are counted, and results are sorted and de-duplicated for variety.",
        items: [
          { label: "Profile similarity", weight: 35, note: "TF-IDF cosine similarity (0.6 or above counts as a full match)" },
          { label: "Skills", weight: 25, note: "Required skills that match the candidate's skills" },
          { label: "Sector", weight: 20, note: "Exact sector = 100%, related sector (e.g. Banking ↔ Financial Services) = 50%" },
          { label: "City", weight: 12, note: "Internship is in one of the preferred cities" },
          { label: "Language", weight: 8, note: "Share of required languages the candidate speaks" },
        ],
      },
      architecture: [
        {
          title: "Frontend",
          nodes: [
            { title: "React 19 + Vite 7", text: "Home, Match, Results, Explore and Saved pages" },
            { title: "English + Hindi", text: "i18n, light/dark theme, mobile navigation" },
          ],
        },
        {
          title: "Flask API",
          nodes: [
            { title: "REST endpoints", text: "/recommend, /opportunities, /similar, /meta, /health" },
            { title: "SQLAlchemy models", text: "Users, internships and saved recommendations" },
          ],
        },
        {
          title: "AI / ML",
          nodes: [
            { title: "TF-IDF vectorizer", text: "Trained with scikit-learn" },
            { title: "FAISS index", text: "1,127 L2-normalised internship vectors" },
            { title: "Hybrid ranker", text: "Weighted, explainable signal scores" },
          ],
        },
        {
          title: "Data",
          nodes: [
            { title: "MySQL 8", text: "Optional, with automatic SQLite fallback" },
            { title: "Internship dataset", text: "451 companies · 15 sectors · 30 cities" },
          ],
        },
      ],
      outcome:
        "Built for Smart India Hackathon 2025 around the PM Internship Scheme: a working, bilingual recommender covering all 1,127 listings, with an automated pytest suite for the API.",
      gallery: [
        { src: internHome, caption: "Home page, with live ranking for a sample profile" },
        { src: internResults, caption: "Ranked matches with score rings and reason chips" },
        { src: internDetails, caption: "Details panel: per-signal breakdown, the skills you already have and key facts" },
        { src: internMobile, caption: "Mobile layout in dark mode, with bottom navigation" },
      ],
    },
  },
  {
    slug: "project-hub",
    title: "Project Hub",
    tagline: "Store, showcase and evaluate academic projects.",
    description:
      "ProjectHub is a centralized project management and repository platform that enables students to store, showcase, and share their academic projects with peers, faculty, and guides. The platform provides real-time project progress tracking, evaluation features for faculty, and supports academic credit allocation based on project performance and completion.",
    tags: ["Progress Tracking", "Evaluation", "Academic"],
    award: "Winner · TechnoGenesis 2K24",
    ghLink: "https://github.com/Sagar-Shetty0804/Project_Hub",
    images: [],
    details: {
      recognition: "Winner, TechnoGenesis 2K24 Project Competition",
      features: [
        { title: "Central repository", text: "Students store every academic project in one place." },
        { title: "Showcase and share", text: "Share projects with peers, faculty and guides." },
        { title: "Progress tracking", text: "Real-time tracking of how each project is progressing." },
        { title: "Faculty evaluation", text: "Built-in evaluation tools for faculty and guides." },
        { title: "Academic credits", text: "Credit allocation based on project performance and completion." },
      ],
      outcome: "Won the TechnoGenesis 2K24 project competition.",
    },
  },
];

export const getProject = (slug) => majorProjects.find((project) => project.slug === slug);

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
