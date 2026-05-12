import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks as links, profile } from "@/content/portfolio";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-full px-4 py-2 transition-all ${
          scrolled ? "glass" : ""
        }`}>
          <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple text-[10px] text-primary-foreground glow-ring">
              {profile.initials}
            </span>
            <span className="hidden sm:inline text-sm">{profile.siteLabel}</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm text-foreground border border-white/10 hover:bg-white/10 transition-all"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-cyan" />
            </span>
            Available
          </a>
        </div>
      </div>
    </motion.header>
  );
}
