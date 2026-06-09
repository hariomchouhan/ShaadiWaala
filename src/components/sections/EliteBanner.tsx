import { Crown } from 'lucide-react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { siteConfig } from '../../data/siteConfig'

export function EliteBanner() {
  return (
    <section className="py-16 md:py-20 bg-brown-deep border-y border-gold/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
            <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center shrink-0">
              <Crown className="w-8 h-8 text-gold" />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-text mb-3">
                Exclusively for <span className="gold-gradient-text">Elite Families & NRIs</span>
              </h2>
              <p className="text-text-muted leading-relaxed">
                {siteConfig.eliteNote} ShaadiWaala provides personal-level matrimonial
                services with complete confidentiality — not mass-market listings or
                small-scale enquiries.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
