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
import projReverie from "@/assets/project-reverie.jpg";


export const profile = {
  // Shown in the nav logo (2 letters) and the nav site label
  initials: "ND",
  siteLabel: "nirvigna.dev",

  // Hero
  introBadge: "Hi, I'm a Computer Science student · Class of 2027",
  firstName: "Nirvigna",
  lastName: "Dumalwad.",
  roles: ["AI/ML Enthusiast", "Full Stack Developer", "Problem Solver", "Tech Explorer"],
  tagline:
    "I craft intelligent systems and elegant interfaces — bridging machine learning research with production-grade web experiences.",
  resumeUrl: "https://drive.google.com/file/d/1FNYt1cO2jRd84h5WFjjU4xan4ALtNFsK/view?usp=drivesdk", // link to your resume PDF

  // About card
  fullName: "Nirvigna Dumalwad",
  location: "Hyderabad, India · UTC+5:30",
  about: [
    "I'm a pre-final-year CS student fascinated by the way machines learn and how good software feels in the hand. My work spans deep learning research, full-stack engineering, and the quiet craft of building products that respect their users.",
    "When I'm not shipping, I'm grinding DSA, reading systems papers, or sketching interfaces in Canva. I believe the best engineers are equal parts scientist, designer, and storyteller.",
  ],
  highlights: [
    { icon: "GraduationCap", title: "B.Tech CSE", subtitle: "CMRCET · 2023–27" },
    { icon: "Brain", title: "AI/ML", subtitle: "Research focus" },
    { icon: "Rocket", title: "Shipping", subtitle: "15+ projects" },
    { icon: "Heart", title: "Open Source", subtitle: "Contributor" },
  ] as const,

  // Contact
  email: "dumalwadnirvigna@gmail.com",
  github: { handle: "@Nirvigna21", url: "https://github.com/Nirvigna21" },
  linkedin: { handle: "in/nirvigna-dumalwad", url: "https://www.linkedin.com/in/nirvigna-dumalwad-921586360" },
  leetcode: "#",
  basedIn: "Hyderabad, India",

  // Footer
  footerName: "Nirvigna Dumalwad",

  // Images
  heroBg,
  portrait,
};

export const skills = [
  { cat: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"] },
  { cat: "Web", items: ["React", "Next.js", "Node.js", "Tailwind", "HTML/CSS", "Express"] },
  { cat: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain"] },
  { cat: "Data", items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Tableau"] },
  { cat: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"] },
  { cat: "Cloud / Tools", items: ["AWS", "Vercel", "Docker", "Git/GitHub", "Linux", "Figma"] },
];

export const skillsMarquee = [
  "Java", "Python", "React", "PyTorch", "Next.js", "TypeScript", "AWS", "Docker",
  "MongoDB", "TensorFlow", "Power BI", "Node.js", "Tailwind", "LangChain",
];

export type ProjectCat = "AI/ML" | "Web" | "Blockchain" | "Data" | "Java";

export const projects: {
  title: string; desc: string; tech: string[]; cat: ProjectCat; img: string;
  featured?: boolean; codeUrl?: string; demoUrl?: string;
}[] = [
  { title: "Scholaris-Research", desc: "Smart Research Paper Assistant .", tech: ["Vite", "pdf.js", "React"], cat: "AI/ML", img: projAi, featured: true, codeUrl: "https://github.com/Nirvigna21/scholaris-research", demoUrl: "https://scholaris-research-chi.vercel.app/" },
  { title: "NyayaMitra", desc: "AI Legal Document Analyzer.", tech: ["LangChain", "LangGraph", "Vector Embeddings"], cat: "Web", img: projWeb, featured: true, codeUrl: "https://github.com/Nirvigna21/NyayaMitra", demoUrl: "https://nyayamitra-pfn7si7kprwdascnkt373t.streamlit.app/" },
  { title: "Linguabot", desc: "AI Multilingual Chatbot.", tech: ["React", "FastAPI", "gTTs"], cat: "Blockchain", img: projBc, codeUrl: "https://github.com/Nirvigna21/linguabot", demoUrl: "https://linguabot-xrkdqzm2yek4nkeig3dwrd.streamlit.app/" },
  { title: "CodeRefactor", desc: "Python based code analysis tool.", tech: ["Python"], cat: "Data", img: projData, codeUrl: "https://github.com/Nirvigna21/code-refactor-assistant", demoUrl: "#" },
  { title: "Reverie LLM", desc: "Personal RAG assistant for academic notes with citation grounding.", tech: ["LangChain", "pgvector", "Next.js"], cat: "AI/ML", img: projReverie, codeUrl: "#", demoUrl: "#" },
  
];

export const blogs = [
  {
    tag: "AI / ML",
    title: "Demystifying RAG: A practical field guide",
    desc: "What I learned shipping retrieval pipelines on real-world docs — chunking, rerankers, and the eval harness nobody talks about.",
    read: "4 min read",
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
  
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blogs", label: "Blogs" },
  { href: "#contact", label: "Contact" },
];
