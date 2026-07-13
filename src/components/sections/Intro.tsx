import { Heart, Shield, Lock, Users } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { images } from '../../data/images'

const highlights = [
  {
    icon: <Lock className="w-5 h-5" />,
    text: 'Profile to Profile Match Making',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    text: 'Complete Privacy',
  },
  {
    icon: <Users className="w-5 h-5" />,
    text: 'Personal Scrutiny of Every Family',
  },
]

export function Intro() {
  return (
    <section id="intro" className="pt-10 pb-16 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Welcome"
          title="A New Standard in Personalized Matchmaking"
          description="Where Elite Families Find Lifelong Relationships with Trust & Discretion"
        />

        <p className="text-text-muted text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12 md:mb-16">
          ShaadiWaala is an exclusive, privacy-first matrimonial service for Elite Indian
          families and NRIs. We personally connect compatible families through confidential,
          one-to-one matchmaking backed by thorough background verification and genuine
          family interactions.
        </p>

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
            <div className="space-y-6 text-justify">
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                At ShaadiWaala, matchmaking is not driven by algorithms or public profiles.
                Every introduction is personally managed by our experienced relationship team,
                ensuring complete privacy, authenticity, and compatibility.
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Whether you&apos;re a bride&apos;s family or a groom&apos;s family, we work
                directly with parents to understand every important detail—from family values
                and lifestyle to education, profession, financial background, and future
                expectations.
              </p>
              <p className="text-text-muted text-base md:text-lg leading-relaxed">
                Before any introduction is made, we personally verify every family&apos;s
                background and social standing, helping you build relationships with confidence
                and peace of mind.
              </p>

              <ul className="space-y-3 pt-2">
                {highlights.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-text text-sm md:text-base">
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
