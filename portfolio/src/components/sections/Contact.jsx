import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, ArrowUpRight } from 'lucide-react'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

const contactEmail = 'nitesh.jha22@st.niituniversity.in'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      formState.name ? `Portfolio inquiry from ${formState.name}` : 'Portfolio inquiry'
    )
    const body = encodeURIComponent(
      [
        formState.name ? `Name: ${formState.name}` : '',
        formState.email ? `Email: ${formState.email}` : '',
        '',
        formState.message || 'Hello Nitesh,',
      ].join('\n')
    )

    return `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }, [formState])

  const inputClass =
    'w-full rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#91baff]/40 focus:bg-white/[0.05]'

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden bg-[#05070b]">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[640px] -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse, rgba(145,186,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionLabel
          label="Contact"
          title={<>Let&apos;s build something serious.</>}
          subtitle="For roles, collaborations, or AI system discussions, the best path is direct email."
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={itemVariants} className="surface-outline glass rounded-[1.75rem] p-8">
            <div className="mb-6">
              <div className="eyebrow text-[10px] text-white/40">Direct outreach</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                Compose an email with context already filled in
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#a5aec5]">
                This form does not pretend to submit anywhere. It prepares a real email to
                <span className="text-white"> {contactEmail}</span> so outreach stays simple and reliable.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="eyebrow mb-2 block text-[10px] text-white/35">Your name</label>
                <input
                  className={inputClass}
                  placeholder="Your name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div>
                <label className="eyebrow mb-2 block text-[10px] text-white/35">Your email</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="you@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div>
                <label className="eyebrow mb-2 block text-[10px] text-white/35">Message</label>
                <textarea
                  rows={6}
                  className={`${inputClass} resize-none`}
                  placeholder="What kind of AI system, workflow, or product problem are you solving?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <motion.a
                href={mailtoHref}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-medium text-[#05070b] transition-transform duration-300 hover:-translate-y-0.5"
                whileTap={{ scale: 0.99 }}
              >
                <Send size={16} />
                Send via email
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-5">
            <div className="surface-outline glass rounded-[1.75rem] p-7">
              <div className="eyebrow text-[10px] text-white/40">Primary contact</div>
              <a
                href={`mailto:${contactEmail}`}
                className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 transition-colors duration-300 hover:border-[#91baff]/25 hover:bg-[#91baff]/[0.06]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#91baff]/20 bg-[#91baff]/10">
                    <Mail size={16} className="text-[#91baff]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">nitesh.jha22@st.niituniversity.in</div>
                    <div className="mt-1 text-xs text-white/40">Best way to reach out</div>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-white/30" />
              </a>
            </div>

            <div className="surface-outline glass rounded-[1.75rem] p-7">
              <div className="eyebrow text-[10px] text-white/40">What I build</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Enterprise AI platforms',
                  'Workflow automation systems',
                  'RAG chatbots',
                  'Executive dashboards',
                  'Scalable infrastructure',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-outline glass rounded-[1.75rem] p-7">
              <div className="eyebrow text-[10px] text-white/40">Core stack</div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  'React + Vite',
                  'TailwindCSS + Motion',
                  'FastAPI + MongoDB',
                  'Docker + Jenkins',
                  'TensorFlow',
                  'ChromaDB',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm text-white/72">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
