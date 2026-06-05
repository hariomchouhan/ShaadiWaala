import { Heart } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { siteConfig } from '../../data/siteConfig'

export function Intro() {
  return (
    <section id="intro" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Welcome"
          title="Where Dreams Become Reality"
          description="ShaadiWaala is a destination wedding management company based in Jaipur, crafting bespoke celebrations across India."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c2f2?w=800&q=80"
                alt="Luxury wedding venue"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-sm"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 rounded-sm -z-10" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                {siteConfig.description}
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Whether you need full wedding planning, stunning decor, photography,
                or consulting — we customize every package to your unique vision.
                We travel across India and are happy to come to you.
              </p>
              <div className="flex items-center gap-3 py-4">
                <div className="h-px flex-1 bg-gold/30" />
                <Heart className="w-5 h-5 text-gold fill-gold/20" />
                <div className="h-px flex-1 bg-gold/30" />
              </div>
              <p className="font-serif text-xl text-gold italic">
                &ldquo;Each wedding is as exceptional as the couple themselves.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
