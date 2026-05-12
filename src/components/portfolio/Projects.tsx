import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "./About";
import ai from "@/assets/project-ai.jpg";
import web from "@/assets/project-web.jpg";
import bc from "@/assets/project-blockchain.jpg";
import data from "@/assets/project-data.jpg";

type Cat = "All" | "AI/ML" | "Web" | "Blockchain" | "Data" | "Java";

const PROJECTS: { title: string; desc: string; tech: string[]; cat: Cat; img: string; featured?: boolean }[] = [
  { title: "NeuroCast", desc: "Real-time emotion-aware video conferencing using a custom CNN trained on FER+.", tech: ["PyTorch", "WebRTC", "FastAPI"], cat: "AI/ML", img: ai, featured: true },
  { title: "Lumen Analytics", desc: "Dashboard for SaaS metrics with predictive churn forecasting.", tech: ["Next.js", "PostgreSQL", "tRPC"], cat: "Web", img: web, featured: true },
  { title: "ChainVote", desc: "Tamper-proof voting dApp on Polygon with zero-knowledge ballots.", tech: ["Solidity", "Hardhat", "React"], cat: "Blockchain", img: bc },
  { title: "PulseBoard", desc: "Real-time financial telemetry with anomaly detection on streaming data.", tech: ["Python", "Kafka", "Power BI"], cat: "Data", img: data },
  { title: "Reverie LLM", desc: "Personal RAG assistant for academic notes with citation grounding.", tech: ["LangChain", "pgvector", "Next.js"], cat: "AI/ML", img: ai },
  { title: "Forge Banking", desc: "JavaFX core-banking simulator with audit-grade transaction ledger.", tech: ["Java", "JavaFX", "MySQL"], cat: "Java", img: web },
];

const CATS: Cat[] = ["All", "AI/ML", "Web", "Blockchain", "Data", "Java"];

export function Projects() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === cat);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <SectionLabel>03 — Selected Work</SectionLabel>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
              Projects worth <span className="text-gradient">talking about</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all border ${
                  cat === c
                    ? "border-transparent bg-gradient-to-r from-neon-blue to-neon-purple text-primary-foreground glow"
                    : "border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-4">
          {filtered.map((p, i) => (
            <motion.article
              layout
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative glass rounded-3xl overflow-hidden ${
                p.featured ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768}
                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-black/40 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-neon-cyan border border-white/10">
                  {p.cat}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold group-hover:text-gradient transition-all">{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-neon-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs transition-colors">
                    <Github className="h-3 w-3" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-3 py-1.5 text-xs text-primary-foreground">
                    Live demo <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
