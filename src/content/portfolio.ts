import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import projAi from "@/assets/project-ai.jpg";
import projmentrix from "@/assets/project-mentrix.png";
import projWeb from "@/assets/project-web.jpg";
import projRaw from "@/assets/project-raw.png";
import projSlot from "@/assets/project-Slot.png";
import projData from "@/assets/project-data.jpg";
import projReverie from "@/assets/project-reverie.jpg";

export const profile = {
  initials: "ND",
  siteLabel: "nirvigna.dev",

  introBadge: "Hi, I'm a Computer Science student · Class of 2027",
  firstName: "Nirvigna",
  lastName: "Dumalwad.",
  roles: [
    "AI/ML Enthusiast",
    "Full Stack Developer",
    "Problem Solver",
    "Tech Explorer",
  ],
  tagline:
    "I craft intelligent systems and elegant interfaces — bridging machine learning research with production-grade web experiences.",
  resumeUrl:
    "https://drive.google.com/file/d/1_GL3E0LdHxPGqku639Ywd77JbPr84LDe/view?usp=drivesdk",

  fullName: "Nirvigna Dumalwad",
  location: "Hyderabad, India · UTC+5:30",
  about: [
    "I'm a final-year CS student fascinated by the way machines learn and how good software feels in the hand. My work spans deep learning research, full-stack engineering, and the quiet craft of building products that respect their users.",
    "When I'm not shipping, I'm grinding DSA, reading systems papers, or sketching interfaces in Canva. I believe the best engineers are equal parts scientist, designer, and storyteller.",
  ],
  highlights: [
    { icon: "GraduationCap", title: "B.Tech CSE", subtitle: "CMRCET · 2023–27" },
    { icon: "Brain", title: "AI/ML", subtitle: "Research focus" },
    { icon: "Rocket", title: "Shipping", subtitle: "15+ projects" },
    { icon: "Heart", title: "Open Source", subtitle: "Contributor" },
    { icon: "Circle", title: "GSSoC'25", subtitle: "Mentor" },
    { icon: "Rectangle", title: "Side Project", subtitle: "Student Project" },
  ] as const,

  email: "dumalwadnirvigna@gmail.com",
  github: {
    handle: "@Nirvigna21",
    url: "https://github.com/Nirvigna21",
  },
  linkedin: {
    handle: "in/nirvigna-dumalwad",
    url: "https://www.linkedin.com/in/nirvigna-dumalwad-921586360",
  },
  leetcode: "#",
  basedIn: "Hyderabad, India",

  footerName: "Nirvigna Dumalwad",

  heroBg,
  portrait,
};

export const skills = [
  {
    cat: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"],
  },
  {
    cat: "Web",
    items: ["React", "Next.js", "Node.js", "Tailwind", "HTML/CSS", "Express"],
  },
  {
    cat: "AI / ML",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain"],
  },
  {
    cat: "Data",
    items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Tableau"],
  },
  {
    cat: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"],
  },
  {
    cat: "Cloud / Tools",
    items: ["AWS", "Vercel", "Docker", "Git/GitHub", "Linux", "Figma"],
  },
];

export const skillsMarquee = [
  "Java",
  "Python",
  "React",
  "PyTorch",
  "Next.js",
  "TypeScript",
  "AWS",
  "Docker",
  "MongoDB",
  "TensorFlow",
  "Power BI",
  "Node.js",
  "Tailwind",
  "LangChain",
];

export type ProjectCat = "AI/ML" | "WebDev" | "Blockchain" | "Data" | "Java";

export const projects: {
  title: string;
  desc: string;
  tech: string[];
  cat: ProjectCat;
  img: string;
  featured?: boolean;
  codeUrl?: string;
  demoUrl?: string;
}[] = [
  {
    title: "SlotLock",
    desc: "Concurrency-Safe Booking Platform (MERN).",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    cat: "WebDev",
    img: projSlot,
    featured: true,
    codeUrl: "https://github.com/Nirvigna21/slotlock",
    demoUrl: "https://slotlock-phi.vercel.app/",
  },
  {
    title: "Mentrix",
    desc: "Multi-Source Data Platform and Analytics Engine.",
    tech: ["Python", "TypeScript", "Next.js 15", "Supabase"],
    cat: "AI/ML",
    img: projmentrix,
    featured: true,
    codeUrl: "https://github.com/Nirvigna21/Mentrix",
    demoUrl: "https://mentrixapp.vercel.app/dashboard",
  },
  {
    title: "Raw-ML",
    desc: "Machine Learning Algorithms Built from Scratch.",
    tech: ["Python", "NumPy", "Scikit-learn", "GitHub Pages"],
    cat: "AI/ML",
    img: projRaw,
    featured: true,
    codeUrl: "https://github.com/Nirvigna21/Raw-ML",
    demoUrl: "https://nirvigna21.github.io/Raw-ML/",
  },
  {
    title: "Scholaris-Research",
    desc: "Smart Research Paper Assistant.",
    tech: ["Vite", "pdf.js", "React"],
    cat: "AI/ML",
    img: projAi,
    featured: true,
    codeUrl: "https://github.com/Nirvigna21/scholaris-research",
    demoUrl: "https://scholaris-research-chi.vercel.app/",
  },
  {
    title: "NyayaMitra",
    desc: "AI Legal Document Analyzer.",
    tech: ["LangChain", "LangGraph", "Vector Embeddings"],
    cat: "WebDev",
    img: projWeb,
    featured: true,
    codeUrl: "https://github.com/Nirvigna21/NyayaMitra",
    demoUrl:
      "https://nyayamitra-pfn7si7kprwdascnkt373t.streamlit.app/",
  },
  {
    title: "Linguabot",
    desc: "AI Multilingual Chatbot.",
    tech: ["React", "FastAPI", "gTTS"],
    cat: "Blockchain",
    img: projData,
    codeUrl: "https://github.com/Nirvigna21/linguabot",
    demoUrl: "https://linguabot-xrkdqzm2yek4nkeig3dwrd.streamlit.app/",
  },
];


export const blogs = [
  {
    tag: "Life",
    title: "Starting Before You Feel Ready",
    desc: "A personal reflection on starting before feeling fully ready, embracing uncertainty, and taking the first step toward growth.",
    read: "2 min read",
    date: "Aug 2026",
    accent: "from-neon-purple to-neon-pink",
    url: "https://medium.com/@dumalwadnirvigna/starting-before-you-feel-ready-84ba6debb01a",
  },
  {
    tag: "Engineering",
    title: "From notebooks to production: a student's playbook",
    desc: "How I take a Jupyter prototype and turn it into a deployed FastAPI service my classmates actually use.",
    read: "3 min read",
    date: "Sept 2026",
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