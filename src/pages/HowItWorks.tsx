import {
  Lock,
  Shield,
  EyeOff,
  FileText,
  PhoneCall,
  ClipboardList,
  ShieldCheck,
  UserRoundSearch,
  Users,
} from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { howItWorks } from '../data/howItWorks'
import { ContactCTA } from '../components/sections/ContactCTA'

const stepIcons: Record<string, React.ReactNode> = {
  register: <FileText className="w-6 h-6" />,
  consultation: <PhoneCall className="w-6 h-6" />,
  profiling: <ClipboardList className="w-6 h-6" />,
  verification: <ShieldCheck className="w-6 h-6" />,
  matching: <UserRoundSearch className="w-6 h-6" />,
  meetup: <Users className="w-6 h-6" />,
}

const privacyPoints = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Private Data Storage',
    description:
      'Every enquiry is stored securely within our private system. No information is visible to other users on this website.',
  },
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: 'No Public Listings',
    description:
      'We do not operate like public matrimonial portals. There are no searchable profiles — matching is done personally by our team.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Anonymous Until Approved',
    description:
      'The bride does not know who the groom is, and the groom does not know who the bride is, until both families approve a personal meeting.',
  },
]

export function HowItWorksPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.25em] uppercase">Our Process</span>
          <h1 className="font-serif text-4xl md:text-6xl text-text mt-4 mb-6">
            How It <span className="gold-gradient-text">Works</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A fully private journey from your first enquiry to a personal family meeting —
            designed for Elite and NRI matrimonial alliances.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 max-w-3xl mx-auto">
            {howItWorks.map((step, i) => (
              <ScrollReveal key={step.id} delay={i * 0.06}>
                <div className="flex gap-6 p-6 md:p-8 rounded-sm border border-gold/15 bg-surface card-shadow">
                  <div className="w-12 h-12 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    {stepIcons[step.id]}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-text mb-2">{step.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Your Privacy"
            title="Our Confidentiality Promise"
            description="Matchmaking at this level demands absolute discretion. Here is how we protect every family we serve."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {privacyPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.1}>
                <div className="p-8 rounded-sm border border-gold/15 bg-bg text-center card-shadow h-full">
                  <div className="text-gold flex justify-center mb-5">{point.icon}</div>
                  <h3 className="font-serif text-lg text-text mb-3">{point.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
