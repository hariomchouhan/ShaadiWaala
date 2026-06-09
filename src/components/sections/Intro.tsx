import { Heart, Shield, Lock } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { siteConfig } from '../../data/siteConfig'
import { images } from '../../data/images'

const highlights = [
  {
    icon: <Lock className="w-5 h-5" />,
    text: '100% private — your details never appear publicly',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: 'Full background verification for both families',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    text: 'Personal matchmaking, not mass-market listings',
  },
]

export function Intro() {
  return (
    <section id="intro" className="py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Welcome"
          title="A New Standard in Matrimony"
          description="ShaadiWaala connects Elite families and NRIs through personal, confidential matchmaking — with verified backgrounds and curated meetings."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={images.intro}
                alt="Premium matrimonial consultation"
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
                Whether you are a bride family or a groom family, our process begins
                with a private enquiry. We contact you personally, collect every
                detail that matters — age, community, education, profession, financial
                background, and partner preferences — and match you only when
                requirements align on both sides.
              </p>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-text-muted text-sm">
                    <span className="text-gold mt-0.5 shrink-0">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 py-4">
                <div className="h-px flex-1 bg-gold/30" />
                <Heart className="w-5 h-5 text-gold fill-gold/20" />
                <div className="h-px flex-1 bg-gold/30" />
              </div>
              <p className="font-serif text-xl text-gold italic">
                &ldquo;The right match deserves the right discretion.&rdquo;
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
