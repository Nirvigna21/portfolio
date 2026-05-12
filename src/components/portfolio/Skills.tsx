import { motion } from "framer-motion";
import { SectionLabel } from "./About";

const SKILLS = [
  { cat: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  { cat: "Web", items: ["React", "Next.js", "Node.js", "Tailwind", "HTML/CSS", "Express"] },
  { cat: "AI / ML", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face", "LangChain"] },
  { cat: "Data", items: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Tableau"] },
  { cat: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase"] },
  { cat: "Cloud / Tools", items: ["AWS", "Vercel", "Docker", "Git/GitHub", "Linux", "Figma"] },
];

const MARQUEE = ["Java", "Python", "React", "PyTorch", "Next.js", "TypeScript", "AWS", "Docker", "MongoDB", "TensorFlow", "Power BI", "GraphQL", "Node.js", "Tailwind", "LangChain", "PostgreSQL"];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>02 — Skills</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl font-semibold leading-tight">
          A toolkit honed across <span className="text-gradient">research and shipping</span>.
        </h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.cat}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-neon-cyan">0{i + 1}</span>
                  <span className="text-xs text-muted-foreground">{s.items.length} skills</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold">{s.cat}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground hover:border-neon-cyan/40">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* marquee */}
        <div className="mt-14 relative overflow-hidden glass rounded-2xl py-5">
          <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />
          <div className="flex marquee-track gap-12 whitespace-nowrap">
            {[...MARQUEE, ...MARQUEE].map((t, i) => (
              <span key={i} className="font-display text-2xl text-muted-foreground/60 hover:text-neon-cyan transition-colors">
                {t} <span className="text-neon-purple">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
