import { motion } from 'framer-motion'
import { BookOpen, Trophy } from 'lucide-react'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

const achievements = [
  {
    id: 'paper',
    icon: BookOpen,
    label: 'Research Paper',
    title: 'A Deep Learning Approach for Early Detection of Depression from Structured Questionnaire Data',
    description:
      'A CNN-based approach for mental health screening using structured questionnaire data, with PCA, SMOTE, and focal loss as core parts of the modeling pipeline.',
    meta: 'Research focus: depression detection from structured questionnaire data',
    tags: ['CNN', 'PCA', 'SMOTE', 'Focal Loss', 'Mental Health Screening'],
    color: '#63b3ed',
    stat: { value: '97.64%', label: 'Accuracy' },
    substats: [
      { value: '0.98', label: 'Recall' },
      { value: '0.98', label: 'F1-score' },
    ],
  },
  {
    id: 'hackathon',
    icon: Trophy,
    title: 'Vibe Coding Hackathon, NIIT University',
    label: 'Hackathon Achievement',
    description:
      'Secured 2nd place among hundreds of participating teams by building an AI-powered Resume Analyzer using embeddings and semantic similarity techniques.',
    meta: 'Built around resume analysis, embeddings, and semantic similarity',
    color: '#f6e05e',
    tags: ['Resume Analyzer', 'Embeddings', 'Semantic Similarity'],
    stat: { value: '2nd Place', label: 'NIIT University' },
  },
]

export function Achievements() {
  return (
    <SectionWrapper id="research" className="bg-[#05070b]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel
          label="Research & Recognition"
          title={<>Truthful signals of<br />technical depth.</>}
          subtitle="A verified research contribution and a hackathon result grounded in real work."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="glass glass-hover rounded-2xl p-7 group relative overflow-hidden flex flex-col"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${item.color}08, transparent)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)` }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${item.color}12`, border: `1px solid ${item.color}30` }}
              >
                <item.icon size={20} style={{ color: item.color }} />
              </div>

              {/* Label */}
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: item.color, fontFamily: 'JetBrains Mono, monospace' }}
              >
                {item.label}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">{item.title}</h3>

              {/* Description */}
              <p className="text-sm text-[#718096] leading-relaxed mb-5 flex-1">{item.description}</p>

              {/* Meta */}
              <p className="text-xs text-[#4a5568] mb-4" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {item.meta}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs"
                    style={{
                      background: `${item.color}10`,
                      border: `1px solid ${item.color}20`,
                      color: item.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="rounded-xl p-4 text-center"
                style={{ background: `${item.color}08`, border: `1px solid ${item.color}15` }}
              >
                <div className="text-2xl font-black" style={{ color: item.color }}>{item.stat.value}</div>
                <div className="mt-1 text-xs text-[#4a5568]">{item.stat.label}</div>
              </div>

              {item.substats && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {item.substats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl p-4 text-center"
                      style={{ background: `${item.color}05`, border: `1px solid ${item.color}12` }}
                    >
                      <div className="text-xl font-bold" style={{ color: item.color }}>{stat.value}</div>
                      <div className="mt-1 text-xs text-[#4a5568]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
