import {
  Lock,
  FileText,
  PhoneCall,
  ClipboardList,
  ShieldCheck,
  UserRoundSearch,
  Users,
} from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../ui/ScrollReveal'
import { howItWorks } from '../../data/howItWorks'

const stepIcons: Record<string, React.ReactNode> = {
  register: <FileText className="w-6 h-6" />,
  consultation: <PhoneCall className="w-6 h-6" />,
  profiling: <ClipboardList className="w-6 h-6" />,
  verification: <ShieldCheck className="w-6 h-6" />,
  matching: <UserRoundSearch className="w-6 h-6" />,
  meetup: <Users className="w-6 h-6" />,
}

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Process"
          title="How It Works"
          description="A completely private, step-by-step journey from enquiry to personal meeting — designed exclusively for Elite and NRI families."
        />

        <div className="flex items-center justify-center gap-3 mb-12 p-4 rounded-sm border border-gold/25 bg-gold/5 max-w-2xl mx-auto">
          <Lock className="w-5 h-5 text-gold shrink-0" />
          <p className="text-text-muted text-sm text-center">
            Your information is <strong className="text-text">never shared publicly</strong>.
            Only our team accesses your data privately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {howItWorks.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 0.08}>
              <div className="relative p-8 rounded-sm border border-gold/15 bg-bg card-shadow hover:border-gold/40 transition-colors duration-300 h-full">
                <div className="w-12 h-12 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center text-gold mb-5">
                  {stepIcons[step.id]}
                </div>
                <h3 className="font-serif text-xl text-text mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
