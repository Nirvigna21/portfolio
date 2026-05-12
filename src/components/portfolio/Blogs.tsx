import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionLabel } from "./About";
import { blogs as POSTS } from "@/content/portfolio";

export function Blogs() {
  return (
    <section id="blogs" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>04 — Blogs</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Notes from the <span className="text-gradient">build log</span>.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {POSTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden"
            >
              <div className={`absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-3xl transition-opacity group-hover:opacity-60`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className={`rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary-foreground`}>
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold leading-snug group-hover:text-gradient transition-all">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.date}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {p.read}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}