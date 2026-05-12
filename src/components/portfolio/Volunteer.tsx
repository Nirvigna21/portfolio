import { motion } from "framer-motion";
import { Heart, Users, Sprout, BookOpen, type LucideIcon } from "lucide-react";
import { SectionLabel } from "./About";
import { volunteer as WORK } from "@/content/portfolio";

const ICONS: Record<string, LucideIcon> = { Heart, Users, Sprout, BookOpen };

export function Volunteer() {
  return (
    <section id="volunteer" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>05 — Volunteer</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Giving time to <span className="text-gradient">things that matter</span>.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {WORK.map((w, i) => (
            <motion.div
              key={w.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative glass rounded-3xl p-7 overflow-hidden"
            >
              <div className={`absolute -top-20 -left-20 h-56 w-56 rounded-full bg-gradient-to-br ${w.accent} opacity-25 blur-3xl transition-opacity group-hover:opacity-50`} />
              <div className="relative flex items-start gap-4">
                {(() => {
                  const Icon = ICONS[w.icon] ?? Heart;
                  return (
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${w.accent} text-primary-foreground glow-ring`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  );
                })()}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{w.org}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{w.period}</span>
                  </div>
                  <div className="mt-0.5 text-sm text-neon-purple font-medium">{w.role}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}