import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative border-t py-10" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 40% 60% at 50% 100%, rgba(145,186,255,0.04), transparent)' }}
      />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="text-center md:text-left">
          <span className="text-sm font-semibold gradient-text" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            Nitesh Jha
          </span>
          <p className="mt-1 text-xs text-white/35">
            AI engineer building intelligent systems and autonomous infrastructure · {new Date().getFullYear()}
          </p>
        </div>

        <p className="text-xs text-white/30">
          Designed and engineered with React, Framer Motion, GSAP, and Tailwind
        </p>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-lg text-white/45 transition-colors duration-200 hover:text-white"
          whileHover={{ y: -2 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  )
}
