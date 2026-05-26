export function SectionDivider({ color = '#63b3ed' }) {
  return (
    <div className="flex items-center gap-4 py-2 px-6 max-w-7xl mx-auto">
      <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
      <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />
    </div>
  )
}
