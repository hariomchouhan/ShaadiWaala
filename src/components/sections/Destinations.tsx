import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { destinations } from '../../data/destinations'

export function Destinations() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Destination Weddings"
          title="Celebrate Across India"
          description="From royal palaces in Rajasthan to serene beaches in Goa — we bring your dream destination to life."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <ScrollReveal key={dest.id} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-2xl text-white group-hover:text-gold-light transition-colors">
                    {dest.name}
                  </h3>
                  <p className="text-white/75 text-sm mt-1">{dest.tagline}</p>
                </div>
                <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-colors duration-300 rounded-sm" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
