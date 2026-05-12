import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { SectionLabel } from "./About";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionLabel>05 — Contact</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Let's build something <span className="text-gradient">unforgettable</span>.
        </h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Open to internships, full-time roles, and interesting collaborations. Replies usually
          within 24 hours.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-4">
          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 glass rounded-3xl p-8 space-y-5"
          >
            <Field label="Name" type="text" placeholder="Your full name" />
            <Field label="Email" type="email" placeholder="you@domain.com" />
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity…"
                className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-medium text-primary-foreground glow transition-transform hover:scale-[1.03]"
            >
              Send message
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="lg:col-span-2 grid gap-3 content-start"
          >
            <a href="mailto:hello@aarav.dev" className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple">
                <Mail className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">hello@aarav.dev</div>
              </div>
            </a>
            <a href="#" className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5"><Github className="h-4 w-4" /></div>
              <div><div className="text-xs text-muted-foreground">GitHub</div><div className="text-sm font-medium">@aaravsharma</div></div>
            </a>
            <a href="#" className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.06] transition-colors">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5"><Linkedin className="h-4 w-4" /></div>
              <div><div className="text-xs text-muted-foreground">LinkedIn</div><div className="text-sm font-medium">in/aaravsharma</div></div>
            </a>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5"><MapPin className="h-4 w-4" /></div>
              <div><div className="text-xs text-muted-foreground">Based in</div><div className="text-sm font-medium">Bengaluru, India</div></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-neon-cyan/60 focus:ring-1 focus:ring-neon-cyan/30 transition-all"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Aarav Sharma. Crafted with care.</div>
        <div className="flex items-center gap-2 font-mono">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan animate-pulse" />
          system online · v1.0
        </div>
      </div>
    </footer>
  );
}
