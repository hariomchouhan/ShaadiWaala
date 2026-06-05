import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import {
  portfolioItems,
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioItem,
} from '../data/portfolio'

export function Portfolio() {
  const [filter, setFilter] = useState<PortfolioCategory>('all')
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null)

  const filtered =
    filter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter)

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.25em] uppercase">Gallery</span>
          <h1 className="font-serif text-4xl md:text-6xl text-text mt-4 mb-6">
            Wedding <span className="gold-gradient-text">Portfolio</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Explore our finest celebrations — each one a unique love story brought to life.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 text-sm tracking-wide rounded-sm border transition-all duration-300 ${
                  filter === cat.id
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-gold/20 text-text-muted hover:border-gold/50 hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.button
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group relative overflow-hidden rounded-sm aspect-[4/3] text-left"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-gold text-xs tracking-widest uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg text-text mt-1">{item.title}</h3>
                    <p className="text-text-muted text-xs mt-1">{item.venue}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-gold hover:text-gold-light z-10"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[70vh] object-contain rounded-sm"
              />
              <div className="text-center mt-6">
                <h3 className="font-serif text-2xl text-text">{lightbox.title}</h3>
                <p className="text-text-muted mt-2">{lightbox.venue}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
