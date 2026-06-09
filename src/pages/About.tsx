import { Target, Eye, Gem } from 'lucide-react'
import { images } from '../data/images'
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
      'To connect Elite and NRI families through personal, confidential matchmaking — with verified backgrounds and curated meetings, never public listings.',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Our Vision',
    description:
      'To be India\'s most trusted private matrimonial service for discerning families who value discretion, depth, and genuine compatibility over mass-market portals.',
  },
  {
    icon: <Gem className="w-8 h-8" />,
    title: 'Our Values',
    description:
      'Absolute privacy, thorough verification, and personal attention — because finding a life partner is too important to leave to algorithms or public databases.',
  },
]

export function About() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={images.aboutHero} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.25em] uppercase">About Us</span>
          <h1 className="font-serif text-4xl md:text-6xl text-text mt-4 mb-6">
            The Story Behind <span className="gold-gradient-text">ShaadiWaala</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Personal matchmaking for Elite families and NRIs — built on trust, privacy, and verification.
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
                  title="Beyond Public Matrimonial Portals"
                  align="left"
                />
                <div className="space-y-4 text-text-muted leading-relaxed">
                  <p>
                    Marriage is one of life&apos;s most important decisions — especially
                    for Elite families and NRIs who carry both tradition and high
                    expectations. Public matrimonial websites cannot offer the discretion,
                    verification, or personal attention that such families deserve.
                  </p>
                  <p>
                    ShaadiWaala was founded to fill that gap. We work exclusively with
                    Elite-class families and NRIs, providing one-on-one matchmaking where
                    every enquiry is handled privately. We do not list profiles publicly,
                    and we do not work with small-scale or casual enquiries.
                  </p>
                  <p>
                    From the first contact form to the final personal meeting, our team
                    manages every step — collecting detailed requirements, verifying
                    backgrounds, sharing confidential profiles, and arranging face-to-face
                    meetings only when both families are ready.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <img
                src={images.aboutStory}
                alt="Confidential matrimonial consultation"
                className="w-full h-[400px] object-cover rounded-sm"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="What Drives Us" title="Mission, Vision & Values" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.15}>
                <div className="p-8 rounded-sm border border-gold/15 bg-bg card-shadow text-center hover:border-gold/40 transition-colors duration-300 h-full">
                  <div className="text-gold flex justify-center mb-6">{v.icon}</div>
                  <h3 className="font-serif text-xl text-text mb-4">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{v.description}</p>
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
                  src={images.founder}
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
                    Register Your Interest
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
