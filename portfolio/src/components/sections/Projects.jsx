import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { SectionWrapper, itemVariants } from '../ui/SectionWrapper'
import { SectionLabel } from '../ui/SectionLabel'

function ArchitectureFlow({ project }) {
  return (
    <div className="surface-outline glass relative overflow-hidden rounded-[1.75rem] p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_45%)]" />
      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <div className="eyebrow text-[10px] text-white/40">Architecture overview</div>
            <div className="mt-2 text-lg font-medium text-white">{project.category}</div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-white/50">
            Production topology
          </div>
        </div>

        <div className="grid gap-3">
          {project.systemLabels.map((label, index) => (
            <div key={label} className="grid grid-cols-[72px_1fr] items-center gap-3">
              <div className="eyebrow text-[10px] text-white/35">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
              <div className="relative rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                <div className="text-sm font-medium text-white">{label}</div>
                <div className="mt-1 text-xs leading-5 text-white/45">{project.architecture[index]}</div>
                {index < project.systemLabels.length - 1 && (
                  <div className="pointer-events-none absolute left-6 top-full h-5 w-px bg-gradient-to-b from-white/25 to-transparent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TerminalPreview({ project }) {
  return (
    <div className="surface-outline glass relative overflow-hidden rounded-[1.75rem]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 text-[11px] text-white/45">{project.id}.workflow</span>
      </div>
      <div className="grid gap-4 p-5">
        {project.workflow.map((step, index) => (
          <div key={step} className="grid grid-cols-[22px_1fr] gap-3">
            <div className="mt-1.5 h-2 w-2 rounded-full" style={{ background: project.color }} />
            <div>
              <div className="text-[11px] text-white/35">step_{index + 1}</div>
              <div className="mt-1 text-sm leading-6 text-white/78">{step}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectCaseStudy({ project }) {
  return (
    <motion.article
      variants={itemVariants}
      className="relative rounded-[2rem] border border-white/8 bg-white/[0.02] px-5 py-8 md:px-8 md:py-10 lg:px-10"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-60"
        style={{ background: `radial-gradient(circle at top right, ${project.color}10, transparent 38%)` }}
      />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="eyebrow text-[10px]" style={{ color: project.color }}>
            Case study {project.index}
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-[2.4rem]">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-[#a5aec5]">{project.tagline}</p>

          <div className="mt-6 space-y-2 rounded-2xl border border-white/8 bg-black/20 p-4">
            <div className="eyebrow text-[10px] text-white/35">Problem statement</div>
            <p className="text-sm leading-6 text-white/72">{project.problem}</p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="eyebrow text-[10px] text-white/35">Business value</div>
            {project.businessImpact.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                <div className="text-sm leading-6 text-white/72">{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:gap-8">
          <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="surface-outline glass rounded-[1.75rem] p-6">
              <div className="eyebrow text-[10px] text-white/40">Why existing systems failed</div>
              <p className="mt-3 text-base leading-7 text-white/78">{project.whyExistingSystemsFail}</p>
            </div>
            <div className="surface-outline glass rounded-[1.75rem] p-6">
              <div className="eyebrow text-[10px] text-white/40">Engineering approach</div>
              <p className="mt-3 text-base leading-7 text-white/78">{project.engineeringApproach}</p>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <ArchitectureFlow project={project} />
            <TerminalPreview project={project} />
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="surface-outline glass rounded-[1.75rem] p-6">
              <div className="eyebrow text-[10px] text-white/40">Technical challenges</div>
              <div className="mt-4 space-y-3">
                {project.challenges.map((challenge) => (
                  <div key={challenge} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <span className="mt-1 h-2 w-2 rounded-full" style={{ background: project.color }} />
                    <p className="text-sm leading-6 text-white/72">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-outline glass rounded-[1.75rem] p-6">
              <div className="eyebrow text-[10px] text-white/40">Business impact</div>
              <div className="mt-4 grid gap-3">
                {project.businessImpact.map((item) => (
                  <div key={item} className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                    <p className="text-sm leading-6 text-white/72">{item}</p>
                    <ArrowRight size={14} className="mt-1 shrink-0 text-white/25" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {project.architecture.map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <div className="text-[11px] text-white/35">component</div>
                <div className="mt-2 text-sm leading-6 text-white/72">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-[#05070b]">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel
          label="Selected work"
          title={<>Cinematic case studies for real AI systems.</>}
          subtitle="Each project is framed as an engineering case study: the problem, the system design, the workflow, the constraints, and the business value."
        />

        <div className="space-y-8 md:space-y-10">
          {projects.map((project) => (
            <ProjectCaseStudy key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
