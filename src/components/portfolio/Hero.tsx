import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, Code2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ROLES = ["AI/ML Enthusiast", "Full Stack Developer", "Problem Solver", "Tech Explorer"];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* floating orbs */}
      <div className="pointer-events-none absolute left-[10%] top-32 h-72 w-72 rounded-full bg-neon-blue/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute right-[8%] top-48 h-80 w-80 rounded-full bg-neon-purple/30 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3 text-neon-purple" />
            Hi, I'm a Computer Science student · Class of 2027
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-semibold leading-[0.95]">
            <span className="block text-foreground">Aarav</span>
            <span className="block text-gradient">Sharma.</span>
          </h1>

          <div className="mt-8 flex h-8 items-center justify-center overflow-hidden font-mono text-sm sm:text-base text-muted-foreground">
            <span className="mr-2 text-neon-cyan">{`>`}</span>
            <motion.span
              key={roleIdx}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-foreground"
            >
              {ROLES[roleIdx]}
            </motion.span>
            <span className="ml-1 inline-block h-4 w-[2px] bg-neon-cyan animate-pulse" />
          </div>

          <p className="mt-6 max-w-xl text-balance text-base sm:text-lg text-muted-foreground">
            I craft intelligent systems and elegant interfaces — bridging machine learning research
            with production-grade web experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-medium text-primary-foreground glow transition-transform hover:scale-[1.03]"
            >
              <Code2 className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Me <ArrowDown className="h-4 w-4 -rotate-45" />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2">
            {[
              { Icon: Github, label: "GitHub", href: "#" },
              { Icon: Linkedin, label: "LinkedIn", href: "#" },
              { Icon: Mail, label: "Email", href: "#" },
              { Icon: Code2, label: "LeetCode", href: "#" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full glass hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
