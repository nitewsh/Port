import { motion } from 'framer-motion'
import { Brain, Code2, Cpu, Globe, Zap, MapPin, Calendar } from 'lucide-react'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

const traits = [
  {
    icon: Brain,
    title: 'AI Systems Architect',
    description:
      'Designing systems that connect interfaces, APIs, automation, and AI workflows into one coherent product.',
    color: '#63b3ed',
  },
  {
    icon: Code2,
    title: 'Product-Minded Builder',
    description:
      'Bridging React frontends, FastAPI services, and deployment pipelines so ideas become usable software.',
    color: '#9f7aea',
  },
  {
    icon: Cpu,
    title: 'RAG & Workflow Engineer',
    description:
      'Building retrieval systems, automation flows, and operational interfaces that support real work.',
    color: '#68d391',
  },
  {
    icon: Globe,
    title: 'Applied ML Practitioner',
    description:
      'Applying deep learning to concrete use cases, from structured mental-health screening research to medical imaging tasks.',
    color: '#f6e05e',
  },
]

function ProfileCard() {
  return (
    <motion.div variants={itemVariants} className="relative">
      {/* Profile placeholder */}
      <div
        className="relative rounded-2xl overflow-hidden mb-5"
        style={{
          background: 'linear-gradient(135deg, rgba(99,179,237,0.08) 0%, rgba(159,122,234,0.08) 100%)',
          border: '1px solid rgba(99,179,237,0.12)',
          aspectRatio: '4/3',
        }}
      >
        {/* Decorative initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div
              className="text-8xl font-black gradient-text mb-2"
              style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1 }}
            >
              NJ
            </div>
            <div className="text-xs text-[#4a5568]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              nitesh.jha()
            </div>
          </div>
        </div>

        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(99,179,237,0.08), transparent)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Corner decorations */}
        {[['top-3 left-3', 'border-l border-t'], ['top-3 right-3', 'border-r border-t'], ['bottom-3 left-3', 'border-l border-b'], ['bottom-3 right-3', 'border-r border-b']].map(([pos, borders], i) => (
          <div
            key={i}
            className={`absolute ${pos} w-4 h-4 ${borders}`}
            style={{ borderColor: 'rgba(99,179,237,0.4)' }}
          />
        ))}
      </div>

      {/* Quick facts */}
      <div className="glass rounded-xl p-4 space-y-2.5">
        {[
          { icon: MapPin, text: 'AI Systems Engineer' },
          { icon: Calendar, text: 'Enterprise AI platforms + RAG systems' },
          { icon: Zap, text: 'Workflow automation + scalable infrastructure' },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2.5 text-sm text-[#a0aec0]">
            <Icon size={13} className="text-[#63b3ed] flex-shrink-0" />
            {text}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function About() {
  return (
    <SectionWrapper id="about" className="bg-[#05070b]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel
          label="About"
          title={<>The engineer behind<br />the intelligence.</>}
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 xl:gap-20 items-start">
          {/* Left: profile card */}
          <div className="hidden lg:block">
            <ProfileCard />
          </div>

          {/* Right: content */}
          <div>
            <div className="space-y-5 mb-10">
              <motion.p variants={itemVariants} className="text-lg text-[#a0aec0] leading-relaxed">
                I&apos;m <span className="text-white font-semibold">Nitesh Jha</span>, an AI engineer
                focused on intelligent systems, workflow automation, enterprise AI platforms,
                RAG systems, and scalable infrastructure.
              </motion.p>
              <motion.p variants={itemVariants} className="text-[#718096] leading-relaxed">
                My work sits at the intersection of{' '}
                <span className="text-[#63b3ed]">AI product interfaces</span>,{' '}
                <span className="text-[#9f7aea]">workflow-driven backend systems</span>, and{' '}
                <span className="text-[#68d391]">applied machine learning</span>. The work ranges from
                HR analytics platforms and governance systems to RAG chatbots and medical imaging models.
              </motion.p>

              {/* Philosophy callout */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-xl p-5 relative overflow-hidden"
                style={{ borderLeft: '2px solid #63b3ed' }}
              >
                <div
                  className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(99,179,237,0.05), transparent)', transform: 'translate(40%, -40%)' }}
                />
                <p className="text-[#a0aec0] italic text-sm leading-relaxed">
                  &ldquo;The best AI systems are invisible to end users. They just make everything
                  faster, smarter, and more reliable — without anyone noticing the complexity
                  underneath.&rdquo;
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-2.5">
                <Zap size={13} className="text-[#63b3ed]" />
                <span className="text-sm text-[#718096]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Current focus: enterprise AI systems · workflow automation · retrieval pipelines
                </span>
              </motion.div>
            </div>

            {/* Trait cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {traits.map((trait) => (
                <motion.div
                  key={trait.title}
                  variants={itemVariants}
                  className="glass glass-hover rounded-xl p-5 group cursor-default relative overflow-hidden"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{ background: `radial-gradient(circle at 20% 20%, ${trait.color}08, transparent 60%)` }}
                  />
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${trait.color}12`, border: `1px solid ${trait.color}25` }}
                  >
                    <trait.icon size={16} style={{ color: trait.color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{trait.title}</h3>
                  <p className="text-xs text-[#718096] leading-relaxed">{trait.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
