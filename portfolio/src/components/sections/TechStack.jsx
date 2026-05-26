import { useState } from 'react'
import { motion } from 'framer-motion'
import { techCategories } from '../../data/techStack'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

function ClusterCard({ cluster, active, onHover }) {
  return (
    <motion.button
      type="button"
      variants={itemVariants}
      onMouseEnter={() => onHover(cluster.category)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(cluster.category)}
      onBlur={() => onHover(null)}
      whileHover={{ y: -4 }}
      className="surface-outline glass glass-hover w-full rounded-[1.75rem] p-6 text-left"
      style={{
        opacity: active && active !== cluster.category ? 0.55 : 1,
        borderColor: active === cluster.category ? `${cluster.color}40` : undefined,
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="eyebrow text-[10px]" style={{ color: cluster.color }}>
          {cluster.category}
        </div>
        <div className="h-2.5 w-2.5 rounded-full" style={{ background: cluster.color }} />
      </div>
      <p className="mt-4 text-sm leading-6 text-white/72">{cluster.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {cluster.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/60"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.button>
  )
}

function StackMap({ active }) {
  const focused = techCategories.find((item) => item.category === active) ?? techCategories[0]

  return (
    <motion.div
      variants={itemVariants}
      className="surface-outline glass relative overflow-hidden rounded-[2rem] p-6 md:p-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(145,186,255,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(156,140,255,0.08),transparent_28%)]" />
      <div className="relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="eyebrow text-[10px] text-white/40">Technology ecosystem</div>
            <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              Built around intelligent system delivery
            </div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/55">
            Hover clusters to inspect
          </div>
        </div>

        <div className="relative mt-10 min-h-[420px] overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#080b12]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_55%)]" />

          <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-center">
            <div>
              <div className="eyebrow text-[10px] text-white/35">Core</div>
              <div className="mt-2 text-xl font-semibold text-white">AI Systems</div>
              <div className="mt-2 text-xs leading-5 text-white/45">Products, infrastructure, workflows</div>
            </div>
          </div>

          <div className="absolute left-[17%] top-[18%] h-px w-[27%] bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
          <div className="absolute right-[17%] top-[24%] h-px w-[24%] bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
          <div className="absolute left-[22%] bottom-[24%] h-px w-[20%] bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
          <div className="absolute right-[18%] bottom-[18%] h-px w-[21%] bg-gradient-to-r from-white/0 via-white/20 to-white/0" />

          {techCategories.map((cluster, index) => {
            const positions = [
              'left-[6%] top-[12%]',
              'right-[6%] top-[16%]',
              'left-[10%] bottom-[12%]',
              'right-[8%] bottom-[10%]',
            ]

            return (
              <motion.div
                key={cluster.category}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5 + index * 0.6, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${positions[index]} w-48 rounded-2xl border px-4 py-4`}
                style={{
                  background: active === cluster.category ? `${cluster.color}18` : 'rgba(255,255,255,0.04)',
                  borderColor: active === cluster.category ? `${cluster.color}55` : 'rgba(255,255,255,0.08)',
                  boxShadow: active === cluster.category ? `0 0 0 1px ${cluster.color}20` : 'none',
                }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: cluster.color }} />
                  <span className="text-sm font-medium text-white">{cluster.category}</span>
                </div>
                <div className="text-xs leading-5 text-white/45">
                  {cluster.items.slice(0, 3).join(' · ')}
                </div>
              </motion.div>
            )
          })}

          <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/8 bg-black/25 p-4">
            <div className="eyebrow text-[10px] text-white/35">Focused cluster</div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <span className="text-lg font-medium text-white">{focused.category}</span>
              <span className="text-sm text-white/45">{focused.summary}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {focused.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-3 py-1.5 text-[11px]"
                  style={{
                    background: `${focused.color}18`,
                    border: `1px solid ${focused.color}38`,
                    color: '#eef2ff',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState(techCategories[0].category)

  return (
    <SectionWrapper id="stack" className="bg-[#05070b]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          label="Technology ecosystem"
          title={<>The stack behind production AI systems.</>}
          subtitle="Grouped by the layers that actually matter in delivery: models, services, interfaces, and deployment environments."
        />

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {techCategories.map((cluster) => (
              <ClusterCard
                key={cluster.category}
                cluster={cluster}
                active={activeCategory}
                onHover={setActiveCategory}
              />
            ))}
          </div>

          <StackMap active={activeCategory} />
        </div>
      </div>
    </SectionWrapper>
  )
}
