import { motion } from 'framer-motion'
import { itemVariants } from './SectionWrapper'

export function SectionLabel({ label, title, subtitle }) {
  return (
    <div className="mb-14 md:mb-18 lg:mb-20">
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 mb-5"
      >
        <div className="h-px w-10 bg-white/12" />
        <span
          className="eyebrow text-[11px] font-medium text-[#91baff]"
        >
          {label}
        </span>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-balance max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-[4.25rem]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-2xl text-base leading-7 text-[#a5aec5] md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
