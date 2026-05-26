import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ChevronRight } from 'lucide-react'
import { experiences } from '../../data/experience'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

function TimelineEntry({ exp, index, isActive, onClick }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex gap-6 group cursor-pointer"
      onClick={onClick}
    >
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-5 top-12 bottom-0 w-px timeline-line" />
      )}

      {/* Timeline node */}
      <div className="relative flex-shrink-0 mt-1">
        <motion.div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            background: isActive ? `${exp.color}20` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${isActive ? exp.color + '50' : 'rgba(255,255,255,0.08)'}`,
            boxShadow: isActive ? `0 0 20px ${exp.color}20` : 'none',
          }}
          animate={isActive ? { scale: [1, 1.05, 1] } : { scale: 1 }}
          transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
        >
          <Briefcase size={16} style={{ color: isActive ? exp.color : '#4a5568' }} />
        </motion.div>
      </div>

      {/* Content */}
      <div className={`flex-1 pb-10 rounded-2xl p-6 transition-all duration-300 ${
        isActive ? 'glass' : 'hover:bg-white/[0.02]'
      }`}
        style={{
          border: isActive ? `1px solid ${exp.color}20` : '1px solid transparent',
        }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-white">{exp.role}</h3>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-medium"
                style={{ background: `${exp.color}15`, color: exp.color }}
              >
                {exp.type}
              </span>
            </div>
            <p className="text-[#63b3ed] font-medium text-sm">{exp.context}</p>
          </div>
          <div className="flex items-center gap-1.5 text-[#4a5568] text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            <Calendar size={12} />
            {exp.period}
          </div>
        </div>

        <p className="text-[#718096] text-sm leading-relaxed mb-4">{exp.description}</p>

        {/* Highlights (expanded) */}
        <motion.div
          initial={false}
          animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="overflow-hidden"
        >
          <ul className="space-y-2 mb-5">
            {exp.highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                transition={{ delay: isActive ? i * 0.08 : 0 }}
                className="flex items-start gap-2.5 text-sm text-[#a0aec0]"
              >
                <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: exp.color }} />
                {item}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs"
                style={{
                  background: `${exp.color}10`,
                  border: `1px solid ${exp.color}20`,
                  color: exp.color,
                  fontFamily: 'JetBrains Mono, monospace',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {!isActive && (
          <button
            className="flex items-center gap-1 text-xs mt-2"
            style={{ color: exp.color }}
          >
            <span>View highlights</span>
            <ChevronRight size={12} />
          </button>
        )}
      </div>
    </motion.div>
  )
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SectionWrapper id="experience" className="bg-[#05070b]">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel
          label="Engineering Focus"
          title={<>How the work<br />translates in practice.</>}
          subtitle="A truthful view of current focus areas, research, and representative systems."
        />

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineEntry
              key={exp.id}
              exp={exp}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
