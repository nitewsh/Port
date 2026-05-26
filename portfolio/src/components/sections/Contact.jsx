import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, GitBranch, Globe, AtSign, Send, Loader2, CheckCircle2, ArrowUpRight } from 'lucide-react'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

const socialLinks = [
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com', username: '@niteshjha' },
  { icon: Globe, label: 'LinkedIn', href: 'https://linkedin.com', username: 'linkedin.com/in/niteshjha' },
  { icon: AtSign, label: 'Twitter / X', href: 'https://twitter.com', username: '@niteshjha_ai' },
  { icon: Mail, label: 'Email', href: 'mailto:nitesh@example.com', username: 'nitesh@example.com' },
]

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulate async
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  const inputClass = `w-full px-4 py-3.5 rounded-xl text-white text-sm placeholder-[#4a5568] outline-none transition-all duration-300 focus:border-[#63b3ed]/50 focus:ring-1 focus:ring-[#63b3ed]/30`
  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  }

  return (
    <SectionWrapper id="contact" className="relative overflow-hidden bg-[#05070b]">
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(99,179,237,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionLabel
          label="Contact"
          title={<>Let&apos;s build<br />something remarkable.</>}
          subtitle="Open to roles, consulting engagements, and interesting problems."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: form */}
          <motion.div variants={itemVariants}>
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full min-h-64"
                style={{ border: '1px solid rgba(104,211,145,0.2)' }}
              >
                <CheckCircle2 size={48} className="text-[#68d391] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                <p className="text-[#718096] text-sm">I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                <div>
                  <label className="text-xs text-[#4a5568] mb-2 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    YOUR NAME
                  </label>
                  <input
                    className={inputClass}
                    style={inputStyle}
                    placeholder="Alex Chen"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-[#4a5568] mb-2 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    className={inputClass}
                    style={inputStyle}
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-[#4a5568] mb-2 block" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    placeholder="Tell me about the problem you're solving..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #63b3ed, #9f7aea)',
                    boxShadow: '0 0 30px rgba(99,179,237,0.2)',
                  }}
                  whileHover={{ boxShadow: '0 0 50px rgba(99,179,237,0.35)', scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Right: contact info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass rounded-2xl p-7">
              <h3 className="text-lg font-semibold text-white mb-2">Open to opportunities</h3>
              <p className="text-[#718096] text-sm leading-relaxed mb-5">
                Looking for senior AI/ML engineering roles, technical leadership positions, or
                high-impact consulting engagements. I move fast and build for the long term.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Full-time', 'Contract', 'Advisory', 'Consulting'].map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{
                      background: 'rgba(99,179,237,0.1)',
                      border: '1px solid rgba(99,179,237,0.2)',
                      color: '#63b3ed',
                    }}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 rounded-xl glass glass-hover group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(99,179,237,0.1)', border: '1px solid rgba(99,179,237,0.15)' }}
                    >
                      <link.icon size={15} className="text-[#63b3ed]" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{link.label}</div>
                      <div className="text-xs text-[#4a5568]">{link.username}</div>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-[#4a5568] group-hover:text-[#63b3ed] transition-colors duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
