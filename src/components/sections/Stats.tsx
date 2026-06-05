import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { siteConfig } from '../../data/siteConfig'

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-brown-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Numbers That Speak"
          description="Trusted by hundreds of families across India for creating unforgettable wedding experiences."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {siteConfig.stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
