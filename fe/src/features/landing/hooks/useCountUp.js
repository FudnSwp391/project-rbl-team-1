import { useEffect, useRef, useState } from 'react'

export default function useCountUp(target, { duration = 1400, suffix = '', locale = false } = {}) {
  const ref = useRef(null)
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return undefined

    let frame = 0
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setCurrent(target * eased)

      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target, duration])

  const rounded = Math.round(current)
  const formatted = locale ? rounded.toLocaleString('vi-VN') : String(rounded)

  return {
    ref,
    text: `${formatted}${suffix}`,
  }
}
