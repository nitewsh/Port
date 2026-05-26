import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function CursorGlow() {
  const glowRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return undefined

    const glow = glowRef.current
    const dot = dotRef.current
    if (!glow || !dot) return

    let mouseX = 0
    let mouseY = 0
    let glowX = 0
    let glowY = 0
    let rafId = 0

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      gsap.to(dot, { x: mouseX - 3, y: mouseY - 3, duration: 0.12, ease: 'none' })
    }

    const animate = () => {
      glowX += (mouseX - glowX) * 0.08
      glowY += (mouseY - glowY) * 0.08
      gsap.set(glow, { x: glowX - 120, y: glowY - 120 })
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Large trailing glow */}
      <div
        ref={glowRef}
        className="fixed left-0 top-0 z-[9998] h-[240px] w-[240px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(145,186,255,0.08) 0%, rgba(145,186,255,0.03) 38%, transparent 72%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full pointer-events-none"
        style={{
          background: 'rgba(145,186,255,0.7)',
          boxShadow: '0 0 12px rgba(145,186,255,0.32)',
          willChange: 'transform',
          mixBlendMode: 'screen',
        }}
      />
    </>
  )
}
