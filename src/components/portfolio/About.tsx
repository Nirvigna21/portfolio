import { motion } from "framer-motion";
import { GraduationCap, Brain, Rocket, Heart } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

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
            <img src={portrait} alt="Aarav Sharma portrait" loading="lazy" width={800} height={1024}
                 className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-lg">Aarav Sharma</div>
              <div className="text-xs text-muted-foreground">Bengaluru, India · UTC+5:30</div>
            </div>
          </motion.div>

          {/* intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="lg:col-span-8 glass rounded-3xl p-8"
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I'm a final-year CS student fascinated by the way machines learn and how good software
              feels in the hand. My work spans deep learning research, full-stack engineering, and
              the quiet craft of building products that respect their users.
            </p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              When I'm not shipping, I'm grinding DSA, reading systems papers, or sketching
              interfaces in Figma. I believe the best engineers are equal parts scientist, designer,
              and storyteller.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { Icon: GraduationCap, t: "B.Tech CSE", s: "VIT · 2022–26" },
                { Icon: Brain, t: "AI/ML", s: "Research focus" },
                { Icon: Rocket, t: "Shipping", s: "30+ products" },
                { Icon: Heart, t: "Open Source", s: "Contributor" },
              ].map(({ Icon, t, s }) => (
                <div key={t} className="rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                  <Icon className="h-4 w-4 text-neon-cyan" />
                  <div className="mt-3 text-sm font-medium">{t}</div>
                  <div className="text-xs text-muted-foreground">{s}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="lg:col-span-12 glass rounded-3xl p-8"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Journey</div>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { y: "2022", t: "Started B.Tech CSE", d: "Began my journey at VIT, fell for algorithms." },
                { y: "2023", t: "First ML paper", d: "Co-authored a CV paper on micro-expression detection." },
                { y: "2024", t: "Full-stack era", d: "Shipped 12 React apps; learned to love the front-end." },
                { y: "2025", t: "AI Research Intern", d: "Worked on LLM evaluation pipelines at scale." },
              ].map((m) => (
                <div key={m.y} className="relative pl-5">
                  <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-neon-cyan glow-ring" />
                  <div className="font-mono text-xs text-neon-cyan">{m.y}</div>
                  <div className="mt-1 font-medium">{m.t}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{m.d}</div>
                </div>
              ))}
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
