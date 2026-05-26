import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href) => {
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3'
            : 'py-5'
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? 'glass soft-shadow rounded-2xl border border-white/8 px-4 py-3 md:px-5' : ''
          }`}
        >
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]"
            >
              <span className="text-xs font-semibold gradient-text">NJ</span>
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(145,186,255,0.15), transparent 70%)' }}
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-white">Nitesh Jha</div>
              <div className="eyebrow text-[10px] text-white/40">AI systems engineer</div>
            </div>
          </motion.a>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'bg-white/[0.08] text-white'
                    : 'text-[#a5aec5] hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:nitesh@example.com"
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:border-[#91baff]/30 hover:bg-[#91baff]/10 hover:text-[#dbe8ff]"
            >
              Start a conversation
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-[#a0aec0] transition-colors hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block h-px bg-current"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block h-px bg-current"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 right-0 top-0 z-40 border-b border-white/8 pt-20 pb-6 glass"
          >
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-xl px-4 py-3 text-left text-[#a0aec0] transition-all duration-200 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:nitesh@example.com"
                className="mt-2 rounded-xl border border-[#91baff]/20 bg-[#91baff]/10 px-4 py-3 text-center text-sm font-semibold text-[#dbe8ff]"
              >
                Start a conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
