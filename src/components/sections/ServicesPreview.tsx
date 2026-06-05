import {
  CalendarHeart,
  Palette,
  Camera,
  UtensilsCrossed,
  Building2,
  Users,
  Music,
  MapPin,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Button } from '../ui/Button'
import { services } from '../../data/services'

const iconMap: Record<string, React.ReactNode> = {
  'wedding-planning': <CalendarHeart className="w-7 h-7" />,
  'venue-selection': <Building2 className="w-7 h-7" />,
  'design-decor': <Palette className="w-7 h-7" />,
  photography: <Camera className="w-7 h-7" />,
  catering: <UtensilsCrossed className="w-7 h-7" />,
  hospitality: <Users className="w-7 h-7" />,
  entertainment: <Music className="w-7 h-7" />,
  'destination-wedding': <MapPin className="w-7 h-7" />,
}

export function ServicesPreview() {
  const featured = services.filter((s) => s.featured)

  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="Comprehensive wedding solutions tailored to make your celebration extraordinary."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <div className="group p-6 rounded-sm border border-gold/15 bg-surface hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.id]}
                </div>
                <h3 className="font-serif text-lg text-text mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description.slice(0, 100)}...
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
