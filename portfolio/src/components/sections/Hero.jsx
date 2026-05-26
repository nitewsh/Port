import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'

const systemNodes = [
  { id: 'signals', label: 'Inputs', x: '12%', y: '18%' },
  { id: 'orchestration', label: 'Workflows', x: '50%', y: '12%' },
  { id: 'reasoning', label: 'Retrieval', x: '76%', y: '28%' },
  { id: 'policies', label: 'Services', x: '22%', y: '56%' },
  { id: 'actions', label: 'Automation', x: '56%', y: '60%' },
  { id: 'analytics', label: 'Analytics', x: '82%', y: '72%' },
]

function HeroBackdrop({ yOne, yTwo }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ y: yOne }}
        className="hero-grid bg-grid-fade absolute inset-0 opacity-40"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(145,186,255,0.12),transparent_32%),radial-gradient(circle_at_80%_12%,rgba(156,140,255,0.12),transparent_24%),radial-gradient(circle_at_60%_82%,rgba(126,224,181,0.08),transparent_18%)]" />
      <motion.div
        style={{ y: yTwo }}
        className="absolute left-1/2 top-16 h-[520px] w-px beam opacity-70"
      />
      <motion.div
        style={{ y: yTwo }}
        className="absolute right-[18%] top-28 h-px w-72 beam opacity-60"
      />
      <motion.div
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[12%] top-[28%] h-56 w-56 rounded-full bg-[#91baff]/[0.07] blur-[90px]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.65, 0.2] }}
        transition={{ duration: 6.1, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute right-[10%] top-[14%] h-72 w-72 rounded-full bg-[#9c8cff]/[0.08] blur-[120px]"
      />
    </div>
  )
}

function InfrastructureVisualization() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="surface-outline glass soft-shadow relative overflow-hidden rounded-[2rem] p-5 md:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(145,186,255,0.12),transparent_36%),linear-gradient(180deg,transparent,rgba(255,255,255,0.02))]" />
      <div className="relative z-10 mb-6 flex items-center justify-between">
        <div>
          <div className="eyebrow text-[10px] text-[#91baff]">System architecture</div>
          <div className="mt-2 text-xl font-semibold text-white">AI systems architecture view</div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/55">
          Product systems map
        </div>
      </div>

      <div className="relative min-h-[430px] rounded-[1.5rem] border border-white/8 bg-[#080b12] p-4">
        <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[11px] text-white/35">
          <span>Input fabric</span>
          <span>Intelligence layer</span>
          <span>Product layer</span>
        </div>

        <div className="absolute inset-0">
          <div className="absolute left-[18%] top-[24%] h-px w-[36%] bg-gradient-to-r from-[#91baff]/0 via-[#91baff]/45 to-[#91baff]/0" />
          <div className="absolute left-[24%] top-[57%] h-px w-[34%] bg-gradient-to-r from-[#9c8cff]/0 via-[#9c8cff]/45 to-[#9c8cff]/0" />
          <div className="absolute left-[56%] top-[31%] h-[35%] w-px bg-gradient-to-b from-[#91baff]/0 via-[#91baff]/40 to-[#91baff]/0" />
          <div className="absolute left-[76%] top-[31%] h-[41%] w-px bg-gradient-to-b from-[#7ee0b5]/0 via-[#7ee0b5]/40 to-[#7ee0b5]/0" />
        </div>

        {systemNodes.map((node, index) => (
          <motion.div
            key={node.id}
            className="absolute"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.08, duration: 0.45 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur-md"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#91baff]" />
                <span className="text-xs text-white/80">{node.label}</span>
              </div>
              <div className="text-[11px] leading-5 text-white/45">
                {index % 2 === 0 ? 'Modular' : 'Operational'}
              </div>
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/8 bg-white/[0.03] p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="eyebrow text-[10px] text-white/45">Production lanes</span>
            <span className="text-[11px] text-[#7ee0b5]">healthy</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ['Workflow automation', 'Role-aware task movement'],
              ['RAG systems', 'Search + response flows'],
              ['Enterprise dashboards', 'Monitoring + reporting'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-white/8 bg-black/20 px-3 py-3">
                <div className="text-sm font-medium text-white">{title}</div>
                <div className="mt-1 text-xs leading-5 text-white/45">{body}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yOne = useTransform(scrollYProgress, [0, 1], [0, 110])
  const yTwo = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32"
    >
      <HeroBackdrop yOne={yOne} yTwo={yTwo} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-10 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:items-center lg:gap-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#91baff]/15 bg-[#91baff]/[0.06] px-4 py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[#7ee0b5]" />
            <span className="eyebrow text-[10px] text-white/60">Building serious AI systems</span>
            <Sparkles size={12} className="text-[#91baff]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance max-w-4xl text-[clamp(3rem,8vw,5.4rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white"
          >
            AI Engineer Building Intelligent Systems &amp; Autonomous Workflows
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-lg leading-8 text-[#a5aec5] md:text-xl"
          >
            Build production-grade AI platforms, workflow automation systems, enterprise dashboards,
            and scalable AI infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group rounded-full bg-white px-6 py-3.5 text-sm font-medium text-[#05070b] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center justify-center gap-2">
                Explore case studies
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
            <a
              href="mailto:nitesh.jha22@st.niituniversity.in"
              className="rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-center text-sm font-medium text-white transition-all duration-300 hover:border-[#91baff]/25 hover:bg-[#91baff]/[0.08]"
            >
              Discuss an AI build
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid gap-5 border-t border-white/8 pt-7 text-sm text-[#a5aec5] sm:grid-cols-3"
          >
            <div>
              <div className="eyebrow text-[10px] text-white/40">Focus</div>
              <div className="mt-2 text-white">AI platforms &amp; workflow automation</div>
            </div>
            <div>
              <div className="eyebrow text-[10px] text-white/40">Specialty</div>
              <div className="mt-2 text-white">RAG systems, governance flows, enterprise dashboards</div>
            </div>
            <div>
              <div className="eyebrow text-[10px] text-white/40">Outcome</div>
              <div className="mt-2 text-white">Serious systems built for real operational use</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: yOne }}
          className="relative lg:justify-self-end"
        >
          <InfrastructureVisualization />
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/35 transition-colors duration-300 hover:text-white/70"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
