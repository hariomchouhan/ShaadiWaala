import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Button } from '../components/ui/Button'
import { ContactCTA } from '../components/sections/ContactCTA'
import { services, categoryLabels, type Service, type ServiceCategory } from '../data/services'
import { siteConfig } from '../data/siteConfig'

const categories: ServiceCategory[] = ['core']

const categorySubtitles: Record<ServiceCategory, string> = {
  core: 'Our Expertise',
  bride: 'For Bride Families',
  groom: 'For Groom Families',
}

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.25em] uppercase">Our Expertise</span>
          <h1 className="font-serif text-4xl md:text-6xl text-text mt-4 mb-6">
            Matrimonial <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-4">
            Personal, private matchmaking with background verification — exclusively
            for Elite families and NRIs.
          </p>
          <p className="text-gold text-sm tracking-wide max-w-xl mx-auto">
            {siteConfig.eliteNote}
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const categoryServices = services.filter((s) => s.category === category)
        return (
          <section
            key={category}
            className={`py-16 md:py-20 ${category === 'groom' ? 'bg-surface' : 'bg-bg'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                subtitle={categorySubtitles[category]}
                title={categoryLabels[category]}
                align="left"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service, i) => (
                  <ScrollReveal key={service.id} delay={i * 0.06}>
                    <button
                      type="button"
                      onClick={() => setSelected(service)}
                      className="group text-left w-full overflow-hidden rounded-sm border border-gold/15 bg-bg card-shadow hover:border-gold/40 transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-lg text-text group-hover:text-gold transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                        <span className="text-gold text-xs mt-3 inline-block tracking-wide uppercase">
                          Learn More →
                        </span>
                      </div>
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      <ContactCTA />

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-surface border border-gold/20 rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 text-gold hover:text-gold-light"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>
              <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
              <div className="p-8">
                <h3 className="font-serif text-2xl text-text mb-4">{selected.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{selected.description}</p>
                <Button to="/contact" size="md">
                  Register Your Interest
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
