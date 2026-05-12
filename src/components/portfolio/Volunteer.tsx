import { motion } from "framer-motion";
import { Heart, Users, Sprout, BookOpen } from "lucide-react";
import { SectionLabel } from "./About";

const WORK = [
  {
    Icon: BookOpen,
    org: "Code for Kids",
    role: "Mentor & Workshop Lead",
    period: "2024 — Present",
    desc: "Teach weekend Python and web basics to 60+ middle-school students from underserved schools across Bengaluru.",
    accent: "from-neon-pink to-neon-orange",
  },
  {
    Icon: Sprout,
    org: "GreenStep India",
    role: "Tech Volunteer",
    period: "2023 — Present",
    desc: "Built a lightweight tree-planting tracker used by 14 local chapters to log 2,400+ saplings and verify GPS data.",
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    Icon: Users,
    org: "GDSC VIT",
    role: "AI/ML Lead",
    period: "2024 — 2025",
    desc: "Ran a year-long peer-learning track: 12 hands-on sessions, two hackathons, and an end-of-year showcase night.",
    accent: "from-neon-purple to-neon-pink",
  },
  {
    Icon: Heart,
    org: "Smile Foundation",
    role: "Fundraising Volunteer",
    period: "2023",
    desc: "Designed the campaign microsite and helped raise ₹3.2L for primary education across three rural districts.",
    accent: "from-neon-yellow to-neon-orange",
  },
];

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
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${w.accent} text-primary-foreground glow-ring`}>
                  <w.Icon className="h-5 w-5" />
                </div>
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