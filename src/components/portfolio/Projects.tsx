import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "./About";
import { projects as PROJECTS } from "@/content/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div>
          <SectionLabel>03 — Projects</SectionLabel>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
            <span className="text-gradient">Projects</span>.
          </h2>
        </div>

        <motion.div layout className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-4">
          {PROJECTS.map((p, i) => (
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
                  <a href={p.codeUrl ?? "#"} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs transition-colors">
                    <Github className="h-3 w-3" /> Code
                  </a>
                  <a href={p.demoUrl ?? "#"} className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-3 py-1.5 text-xs text-primary-foreground">
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