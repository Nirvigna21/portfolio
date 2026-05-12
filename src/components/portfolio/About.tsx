import { motion } from "framer-motion";
import { GraduationCap, Brain, Rocket, Heart, type LucideIcon } from "lucide-react";
import { profile } from "@/content/portfolio";

const ICONS: Record<string, LucideIcon> = { GraduationCap, Brain, Rocket, Heart };

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>01 — About</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Building at the intersection of <span className="text-gradient">intelligence and design</span>.
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-4 glass rounded-3xl overflow-hidden relative group"
          >
            <img src={profile.portrait} alt={`${profile.fullName} portrait`} loading="lazy" width={800} height={1024}
                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-lg">{profile.fullName}</div>
              <div className="text-xs text-muted-foreground">{profile.location}</div>
            </div>
          </motion.div>

          {/* intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="lg:col-span-8 glass rounded-3xl p-8"
          >
            {profile.about.map((p, i) => (
              <p key={i} className={`${i === 0 ? "" : "mt-4"} text-base sm:text-lg text-muted-foreground leading-relaxed`}>
                {p}
              </p>
            ))}

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {profile.highlights.map((h) => {
                const Icon = ICONS[h.icon] ?? Brain;
                return (
                  <div key={h.title} className="rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                    <Icon className="h-4 w-4 text-neon-cyan" />
                    <div className="mt-3 text-sm font-medium">{h.title}</div>
                    <div className="text-xs text-muted-foreground">{h.subtitle}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan">
      <span className="h-px w-8 bg-neon-cyan/60" />
      {children}
    </div>
  );
}
