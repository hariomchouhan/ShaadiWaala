import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { heroSlides } from '../../data/heroSlides'

export function Hero() {
  return (
    <section className="mt-20 md:mt-0 bg-bg relative w-full overflow-hidden md:h-screen md:min-h-[600px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        autoHeight
        className="hero-swiper w-full md:h-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full flex items-center justify-center bg-bg md:h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-image"
                loading={slide.id === heroSlides[0].id ? 'eager' : 'lazy'}
                fetchPriority={slide.id === heroSlides[0].id ? 'high' : 'auto'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.a
        href="#intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  )
}
