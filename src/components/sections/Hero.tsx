import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '../ui/Button'
import { heroSlides } from '../../data/heroSlides'

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="hero-swiper h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg/90" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg/50 to-transparent" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl pointer-events-auto"
        >
          <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Premium Wedding Planners
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text leading-tight mb-4">
            {heroSlides[0].title}
            <br />
            <span className="gold-gradient-text">{heroSlides[0].subtitle}</span>
          </h1>
          <p className="text-text-muted text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            From intimate gatherings to lavish destination affairs — we transform
            your vision into an extraordinary celebration across India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/services" size="lg">
              Explore Services
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  )
}
