// ─────────────────────────────────────────────────────────────────
//  ✏️  EDIT YOUR PORTFOLIO HERE
//  This is the only file you need to change to fill in your details.
//  Replace text, links, projects, blogs, etc. — the site updates live.
//  To swap images: drop new files into `src/assets/` and update the
//  imports at the top of this file.
// ─────────────────────────────────────────────────────────────────

import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import projAi from "@/assets/project-ai.jpg";
import projWeb from "@/assets/project-web.jpg";
import projBc from "@/assets/project-blockchain.jpg";
import projData from "@/assets/project-data.jpg";

export const profile = {
  // Shown in the nav logo (2 letters) and the nav site label
  initials: "AS",
  siteLabel: "aarav.dev",

  // Hero
  introBadge: "Hi, I'm a Computer Science student · Class of 2027",
  firstName: "Aarav",
  lastName: "Sharma.",
  roles: ["AI/ML Enthusiast", "Full Stack Developer", "Problem Solver", "Tech Explorer"],
  tagline:
    "I craft intelligent systems and elegant interfaces — bridging machine learning research with production-grade web experiences.",
  resumeUrl: "#", // link to your resume PDF

  // About card
  fullName: "Aarav Sharma",
  location: "Bengaluru, India · UTC+5:30",
  about: [
    "I'm a final-year CS student fascinated by the way machines learn and how good software feels in the hand. My work spans deep learning research, full-stack engineering, and the quiet craft of building products that respect their users.",
    "When I'm not shipping, I'm grinding DSA, reading systems papers, or sketching interfaces in Figma. I believe the best engineers are equal parts scientist, designer, and storyteller.",
  ],
  highlights: [
    { icon: "GraduationCap", title: "B.Tech CSE", subtitle: "VIT · 2023–27" },
    { icon: "Brain", title: "AI/ML", subtitle: "Research focus" },
    { icon: "Rocket", title: "Shipping", subtitle: "30+ products" },
    { icon: "Heart", title: "Open Source", subtitle: "Contributor" },
  ] as const,

  // Contact
  email: "hello@aarav.dev",
  github: { handle: "@aaravsharma", url: "#" },
  linkedin: { handle: "in/aaravsharma", url: "#" },
  leetcode: "#",
  basedIn: "Bengaluru, India",

  // Footer
  footerName: "Aarav Sharma",

  // Images
  heroBg,
  portrait,
};

export const skills = [
  { cat: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  { cat: "Web", items: ["React", "Next.js", "Node.js", "Tailwind", "HTML/CSS", "Express"] },
  { cat: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain"] },
  { cat: "Data", items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Tableau"] },
  { cat: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"] },
  { cat: "Cloud / Tools", items: ["AWS", "Vercel", "Docker", "Git/GitHub", "Linux", "Figma"] },
];

export const skillsMarquee = [
  "Java", "Python", "React", "PyTorch", "Next.js", "TypeScript", "AWS", "Docker",
  "MongoDB", "TensorFlow", "Power BI", "GraphQL", "Node.js", "Tailwind", "LangChain", "PostgreSQL",
];

export type ProjectCat = "AI/ML" | "Web" | "Blockchain" | "Data" | "Java";

export const projects: {
  title: string; desc: string; tech: string[]; cat: ProjectCat; img: string;
  featured?: boolean; codeUrl?: string; demoUrl?: string;
}[] = [
  { title: "NeuroCast", desc: "Real-time emotion-aware video conferencing using a custom CNN trained on FER+.", tech: ["PyTorch", "WebRTC", "FastAPI"], cat: "AI/ML", img: projAi, featured: true, codeUrl: "#", demoUrl: "#" },
  { title: "Lumen Analytics", desc: "Dashboard for SaaS metrics with predictive churn forecasting.", tech: ["Next.js", "PostgreSQL", "tRPC"], cat: "Web", img: projWeb, featured: true, codeUrl: "#", demoUrl: "#" },
  { title: "ChainVote", desc: "Tamper-proof voting dApp on Polygon with zero-knowledge ballots.", tech: ["Solidity", "Hardhat", "React"], cat: "Blockchain", img: projBc, codeUrl: "#", demoUrl: "#" },
  { title: "PulseBoard", desc: "Real-time financial telemetry with anomaly detection on streaming data.", tech: ["Python", "Kafka", "Power BI"], cat: "Data", img: projData, codeUrl: "#", demoUrl: "#" },
  { title: "Reverie LLM", desc: "Personal RAG assistant for academic notes with citation grounding.", tech: ["LangChain", "pgvector", "Next.js"], cat: "AI/ML", img: projAi, codeUrl: "#", demoUrl: "#" },
  { title: "Forge Banking", desc: "JavaFX core-banking simulator with audit-grade transaction ledger.", tech: ["Java", "JavaFX", "MySQL"], cat: "Java", img: projWeb, codeUrl: "#", demoUrl: "#" },
];

export const blogs = [
  {
    tag: "AI / ML",
    title: "Demystifying RAG: A practical field guide",
    desc: "What I learned shipping retrieval pipelines on real-world docs — chunking, rerankers, and the eval harness nobody talks about.",
    read: "8 min read",
    date: "Apr 2026",
    accent: "from-neon-purple to-neon-pink",
    url: "#",
  },
  {
    tag: "Engineering",
    title: "From notebooks to production: a student's playbook",
    desc: "How I take a Jupyter prototype and turn it into a deployed FastAPI service my classmates actually use.",
    read: "6 min read",
    date: "Feb 2026",
    accent: "from-neon-blue to-neon-cyan",
    url: "#",
  },
  {
    tag: "Career",
    title: "Landing your first ML internship in 2026",
    desc: "A blunt, honest breakdown of resumes, projects, cold emails and interview loops — written from the trenches.",
    read: "10 min read",
    date: "Jan 2026",
    accent: "from-neon-orange to-neon-yellow",
    url: "#",
  },
];

export const volunteer = [
  {
    icon: "BookOpen",
    org: "Code for Kids",
    role: "Mentor & Workshop Lead",
    period: "2024 — Present",
    desc: "Teach weekend Python and web basics to 60+ middle-school students from underserved schools across Bengaluru.",
    accent: "from-neon-pink to-neon-orange",
  },
  {
    icon: "Sprout",
    org: "GreenStep India",
    role: "Tech Volunteer",
    period: "2023 — Present",
    desc: "Built a lightweight tree-planting tracker used by 14 local chapters to log 2,400+ saplings and verify GPS data.",
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    icon: "Users",
    org: "GDSC VIT",
    role: "AI/ML Lead",
    period: "2024 — 2025",
    desc: "Ran a year-long peer-learning track: 12 hands-on sessions, two hackathons, and an end-of-year showcase night.",
    accent: "from-neon-purple to-neon-pink",
  },
  {
    icon: "Heart",
    org: "Smile Foundation",
    role: "Fundraising Volunteer",
    period: "2023",
    desc: "Designed the campaign microsite and helped raise ₹3.2L for primary education across three rural districts.",
    accent: "from-neon-yellow to-neon-orange",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blogs", label: "Blogs" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#contact", label: "Contact" },
];