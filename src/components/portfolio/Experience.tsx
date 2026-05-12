import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionLabel } from "./About";

const ITEMS = [
  { y: "2025 — Present", role: "AI Research Intern", org: "Quantica Labs", desc: "Built evaluation pipelines for RAG systems on 1M+ docs. Reduced hallucination rate by 38%.", tech: ["LangChain", "Python", "Weaviate"] },
  { y: "2024", role: "Full Stack Developer Intern", org: "Northwind Studio", desc: "Shipped a multi-tenant analytics dashboard used by 12 enterprise clients.", tech: ["Next.js", "PostgreSQL", "tRPC"] },
  { y: "2023", role: "ML Research Assistant", org: "VIT AI Lab", desc: "Co-authored a paper on micro-expression detection using temporal CNNs.", tech: ["PyTorch", "OpenCV"] },
];

const COUNTERS = [
  { v: "650+", l: "LeetCode solved" },
  { v: "Top 5%", l: "CodeChef rating" },
  { v: "1.2k", l: "GitHub commits" },
  { v: "5★", l: "HackerRank" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>04 — Experience</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Where I've <span className="text-gradient">shipped & learned</span>.
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 glass rounded-3xl p-8">
            <div className="relative pl-6 border-l border-white/10">
              {ITEMS.map((it, i) => (
                <motion.div
                  key={it.role}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pb-10 last:pb-0"
                >
                  <span className="absolute -left-[29px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background border border-neon-cyan glow-ring">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" />
                  </span>
                  <div className="font-mono text-xs text-neon-cyan">{it.y}</div>
                  <div className="mt-1 flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span className="font-display text-lg font-semibold">{it.role}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{it.org}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {it.tech.map((t) => (
                      <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 content-start">
            {COUNTERS.map((c) => (
              <div key={c.l} className="glass rounded-2xl p-5">
                <div className="font-display text-3xl font-semibold text-gradient">{c.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.l}</div>
              </div>
            ))}
            <div className="col-span-2 glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Certifications</div>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "AWS Cloud Practitioner",
                  "Google Data Analytics",
                  "Meta Front-End Developer",
                  "DeepLearning.AI Specialization",
                ].map((c) => (
                  <li key={c} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-neon-cyan" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
