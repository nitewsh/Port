import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export function useAnimatedCounter(target, duration = 2, start = false) {
  const [value, setValue] = useState(0)
  const tweenRef = useRef(null)

  useEffect(() => {
    if (!start) return
    const obj = { val: 0 }
    tweenRef.current = gsap.to(obj, {
      val: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => setValue(Math.round(obj.val)),
    })
    return () => tweenRef.current?.kill()
  }, [target, duration, start])

  return value
}
