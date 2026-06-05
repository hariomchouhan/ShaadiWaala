import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { Button } from '../ui/Button'
import { portfolioItems } from '../../data/portfolio'

export function PortfolioPreview() {
  const preview = portfolioItems.slice(0, 6)

  return (
    <section className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Work"
          title="Wedding Portfolio"
          description="A glimpse into the magical celebrations we've crafted for our beloved couples."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {preview.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-sm aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gold text-xs tracking-widest uppercase mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-text text-center px-4">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-xs mt-2">{item.venue}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/portfolio" variant="outline" size="lg">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  )
}
