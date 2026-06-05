import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

interface SectionHeadingProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignClass}`}
    >
      {subtitle && (
        <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
          {subtitle}
        </span>
      )}
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        {align === 'center' && <div className="h-px w-12 bg-gold/40" />}
        <Heart className="w-4 h-4 text-gold fill-gold/20" />
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold leading-tight ${
            light ? 'text-bg' : 'text-text'
          }`}
        >
          {title}
        </h2>
        <Heart className="w-4 h-4 text-gold fill-gold/20" />
        {align === 'center' && <div className="h-px w-12 bg-gold/40" />}
      </div>
      {description && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? 'text-bg/80' : 'text-text-muted'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
