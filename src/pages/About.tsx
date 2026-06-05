import { Target, Eye, Gem } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Stats } from '../components/sections/Stats'
import { Testimonials } from '../components/sections/Testimonials'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Our Mission',
    description:
      'To make every wedding a stress-free, magical experience by handling every detail with passion, precision, and personalized care.',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Our Vision',
    description:
      'To be India\'s most trusted luxury wedding planning brand, known for transforming dreams into extraordinary celebrations.',
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'Our Values',
    description:
      'Integrity, creativity, and unwavering commitment to excellence — because your special day deserves nothing less.',
  },
]

export function About() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f29da8c2f2?w=1920&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-bg/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.25em] uppercase">About Us</span>
          <h1 className="font-serif text-4xl md:text-6xl text-text mt-4 mb-6">
            The Story Behind <span className="gold-gradient-text">ShaadiWaala</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Where passion meets perfection in the art of wedding celebration.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeading
                  subtitle="Our Story"
                  title="A Passion for Perfect Weddings"
                  align="left"
                />
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Wedding is an event that happens once in a lifetime, and every
                    person dreams of it in the most splendid manner. Planning a wedding
                    can be overwhelming — that&apos;s where we step in.
                  </p>
                  <p>
                    We bring together, plan, and organize weddings and renewal-vow
                    ceremonies with your most wanted theme. At ShaadiWaala, we get into
                    your thoughts, align with your desires, and add a touch of
                    experience and professionalism to make your wedding day{' '}
                    <em className="text-gold">THE DAY</em> of your life.
                  </p>
                  <p>
                    From decoration and dresses to photography, food, and floral
                    arrangements — we coordinate every element so your wedding day
                    becomes unforgettable for everyone who attends.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                alt="Wedding celebration"
                className="w-full h-[400px] object-cover rounded-sm"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="What Drives Us"
            title="Mission, Vision & Values"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.15}>
                <div className="p-8 rounded-sm border border-gold/15 bg-bg text-center hover:border-gold/40 transition-colors duration-300 h-full">
                  <div className="text-gold flex justify-center mb-6">{v.icon}</div>
                  <h3 className="font-serif text-xl text-text mb-4">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt={siteConfig.founder.name}
                  className="w-full max-w-md mx-auto h-[500px] object-cover rounded-sm"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/30 rounded-sm -z-10 max-w-md mx-auto" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="text-gold text-sm tracking-[0.25em] uppercase">
                  Meet the Founder
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-text mt-3 mb-2">
                  {siteConfig.founder.name}
                </h2>
                <p className="text-gold text-sm mb-6">{siteConfig.founder.title}</p>
                <p className="text-text-muted leading-relaxed mb-6">
                  {siteConfig.founder.bio}
                </p>
                <blockquote className="border-l-2 border-gold pl-6 italic text-text-muted">
                  &ldquo;{siteConfig.founder.quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <Button to="/contact" size="md">
                    Work With Us
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
    </>
  )
}
