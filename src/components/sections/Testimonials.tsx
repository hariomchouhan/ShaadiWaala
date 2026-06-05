import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { testimonials } from '../../data/testimonials'

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Happy Couples"
          title="What Our Clients Say"
          description="Real stories from couples who trusted us with their most special day."
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-swiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="p-8 rounded-sm border border-gold/15 bg-surface h-full flex flex-col">
                <Quote className="w-8 h-8 text-gold/40 mb-4" />
                <p className="text-text-muted text-sm leading-relaxed flex-1 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <h4 className="font-serif text-lg text-text">{t.couple}</h4>
                <p className="text-text-muted text-xs mt-1">
                  {t.venue} &middot; {t.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
