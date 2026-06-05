import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
}

export function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(Math.round(increment * step), value)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-6 md:p-8 rounded-sm border border-gold/20 bg-surface hover:border-gold/50 transition-colors duration-300"
    >
      <div className="text-4xl md:text-5xl font-serif font-bold gold-gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-text-muted text-sm tracking-wide uppercase">{label}</p>
    </motion.div>
  )
}
