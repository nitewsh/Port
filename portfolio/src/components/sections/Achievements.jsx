import { motion } from 'framer-motion'
import { Award, BookOpen, Shield, Trophy, ExternalLink } from 'lucide-react'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

const achievements = [
  {
    id: 'ieee',
    icon: BookOpen,
    label: 'IEEE Research Publication',
    title: 'Explainable AI in Clinical Imaging Diagnostics',
    description:
      'Peer-reviewed research on integrating SHAP-based explainability into deep learning diagnostic systems. Demonstrated 97.3% accuracy with interpretable decision pathways for radiologist validation.',
    meta: 'IEEE Conference on AI in Healthcare, 2024',
    tags: ['XAI', 'Medical Imaging', 'SHAP', 'Deep Learning'],
    color: '#63b3ed',
    stat: { value: '97.3%', label: 'Model Accuracy' },
  },
  {
    id: 'copyright',
    icon: Shield,
    label: 'Copyright Registration',
    title: 'AI GovernX — Intellectual Property',
    description:
      'Successfully filed for copyright protection on the AI GovernX governance framework — the first AI compliance middleware solution with sub-50ms overhead and full GDPR + EU AI Act audit trails.',
    meta: 'Copyright Office Registration, 2024',
    tags: ['AI Governance', 'LLM Compliance', 'GDPR', 'EU AI Act'],
    color: '#9f7aea',
    stat: { value: '<50ms', label: 'Governance Overhead' },
  },
  {
    id: 'hackathon',
    icon: Trophy,
    title: 'National AI Hackathon — Top 3',
    label: 'Hackathon Achievement',
    description:
      'Top 3 placement among 200+ teams at a national AI hackathon. Built a real-time crisis prediction system using multi-source social media ingestion and transformer-based risk classification in 24 hours.',
    meta: 'National AI Innovation Challenge, 2023',
    tags: ['NLP', 'Real-time ML', 'Crisis Prediction', 'Transformers'],
    color: '#f6e05e',
    stat: { value: 'Top 3', label: 'of 200+ Teams' },
  },
]

export function Achievements() {
  return (
    <SectionWrapper id="research" className="bg-[#05070b]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel
          label="Research & Achievements"
          title={<>Recognized for<br />impact beyond code.</>}
          subtitle="Academic contributions, intellectual property, and competitive achievements."
        />

        <div className="grid md:grid-cols-3 gap-6">
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

              {/* Stat */}
              <div
                className="p-4 rounded-xl text-center"
                style={{ background: `${item.color}08`, border: `1px solid ${item.color}15` }}
              >
                <div className="text-2xl font-black" style={{ color: item.color }}>{item.stat.value}</div>
                <div className="text-xs text-[#4a5568] mt-1">{item.stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
