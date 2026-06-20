import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Lock, AlertCircle } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'
import { submitContactQuery } from '../services/queryService'

const inputClass =
  'w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await submitContactQuery({
        name: data.get('name') as string,
        phone: data.get('phone') as string,
        city: (data.get('city') as string) || '',
        age: (data.get('age') as string) || '',
      })

      setSubmitted(true)
      form.reset()
    } catch (err) {
      console.error('Failed to submit enquiry:', err)
      setError('Something went wrong. Please try again or contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.25em] uppercase">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl text-text mt-4 mb-6">
            Register Your <span className="gold-gradient-text">Interest</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Submit your enquiry privately. Our team will contact you personally —
            exclusively for Elite and NRI families.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading
                subtitle="Confidential Enquiry"
                title="Begin Your Journey"
                align="left"
              />

              <div className="flex items-start gap-3 p-4 mb-6 rounded-sm border border-gold/25 bg-gold/5">
                <Lock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-text-muted text-sm leading-relaxed">
                  Your information is <strong className="text-text">strictly private</strong> and
                  is never shared publicly or with other users. Only our team will
                  contact you to begin the matchmaking process.
                </p>
              </div>

              {submitted && (
                <div className="flex items-center gap-3 p-4 mb-6 rounded-sm border border-gold/30 bg-gold/5 text-gold text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Thank you! Your enquiry has been submitted. Our team will contact you shortly.
                </div>
              )}

              {error && (
                <div className="flex items-center gap-3 p-4 mb-6 rounded-sm border border-red-300 bg-red-50 text-red-700 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-text-muted text-sm mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    disabled={loading}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-text-muted text-sm mb-2">
                    Phone *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    disabled={loading}
                    className={inputClass}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-text-muted text-sm mb-2">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    disabled={loading}
                    className={inputClass}
                    placeholder="Your city"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-text-muted text-sm mb-2">
                    Age
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="text"
                    disabled={loading}
                    className={inputClass}
                    placeholder="Enter your age"
                  />
                </div>

                <Button type="submit" size="lg" className={loading ? 'opacity-70 pointer-events-none' : ''}>
                  <Send className="w-4 h-4" />
                  {loading ? 'Submitting...' : 'Submit Private Enquiry'}
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <SectionHeading subtitle="Reach Us" title="Contact Information" align="left" />

              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: siteConfig.address },
                  { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: siteConfig.businessHours },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 rounded-sm border border-gold/15 bg-surface card-shadow">
                    <div className="text-gold mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-text hover:text-gold transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-text">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-sm overflow-hidden border border-gold/15 h-64">
                <iframe
                  title="ShaadiWaala Location"
                  src={siteConfig.mapEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
