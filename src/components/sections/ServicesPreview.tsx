import {
  Heart,
  Crown,
  ShieldCheck,
  UserCheck,
  ClipboardList,
  CalendarHeart,
  BadgeCheck,
  Lock,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Button } from '../ui/Button'
import { services } from '../../data/services'

const iconMap: Record<string, React.ReactNode> = {
  'personal-matchmaking': <Heart className="w-7 h-7" />,
  'elite-nri': <Crown className="w-7 h-7" />,
  'background-verification': <ShieldCheck className="w-7 h-7" />,
  'profile-sharing': <UserCheck className="w-7 h-7" />,
  'requirement-profiling': <ClipboardList className="w-7 h-7" />,
  'meetup-coordination': <CalendarHeart className="w-7 h-7" />,
  'financial-verification': <BadgeCheck className="w-7 h-7" />,
  'privacy-first': <Lock className="w-7 h-7" />,
}

export function ServicesPreview() {
  const featured = services.filter((s) => s.featured)

  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Offer"
          title="Our Services"
          description="Personal matrimonial services built on privacy, verification, and precision matching for Elite and NRI families."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <div className="group p-6 rounded-sm border border-gold/15 bg-bg card-shadow hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.id]}
                </div>
                <h3 className="font-serif text-lg text-text mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
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
