import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { weddingJourney } from '../../data/weddingJourney'

export function WeddingJourney() {
  const [active, setActive] = useState(weddingJourney[0].id)
  const activeStep = weddingJourney.find((s) => s.id === active) ?? weddingJourney[0]

  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="The Celebration"
          title="Your Wedding Journey"
          description="From Haldi to Reception — we orchestrate every sacred ceremony with elegance and precision."
        />

        <div className="hidden md:flex items-center justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/20 -translate-y-1/2" />
          {weddingJourney.map((step, i) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActive(step.id)}
              className="relative z-10 flex flex-col items-center gap-3 group"
            >
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-serif text-sm transition-all duration-300 ${
                  active === step.id
                    ? 'border-gold bg-gold text-bg scale-110'
                    : 'border-gold/30 bg-surface text-gold group-hover:border-gold'
                }`}
              >
                {i + 1}
              </div>
              <span
                className={`text-xs tracking-wide uppercase transition-colors ${
                  active === step.id ? 'text-gold' : 'text-text-muted'
                }`}
              >
                {step.name}
              </span>
            </button>
          ))}
        </div>

        <div className="md:hidden flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {weddingJourney.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActive(step.id)}
              className={`shrink-0 px-4 py-2 text-sm rounded-sm border transition-all ${
                active === step.id
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-gold/20 text-text-muted'
              }`}
            >
              {step.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={activeStep.image}
                alt={activeStep.name}
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-serif text-3xl text-text">{activeStep.name}</h3>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-2xl md:text-3xl text-gold">
                {activeStep.name} Ceremony
              </h3>
              <p className="text-text-muted text-lg leading-relaxed">
                {activeStep.description}
              </p>
              <p className="text-text-muted leading-relaxed">
                Our team handles every detail — from decor and styling to
                entertainment and guest hospitality — ensuring this cherished
                moment unfolds flawlessly.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
