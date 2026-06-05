import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { siteConfig } from '../data/siteConfig'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const phone = data.get('phone') as string
    const date = data.get('date') as string
    const city = data.get('city') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`Wedding Enquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nWedding Date: ${date}\nCity: ${city}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    form.reset()
  }

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm tracking-[0.25em] uppercase">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl text-text mt-4 mb-6">
            Contact <span className="gold-gradient-text">Us</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Ready to start planning? We&apos;d love to hear about your dream wedding.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading
                subtitle="Send a Message"
                title="Plan Your Wedding"
                align="left"
              />

              {submitted && (
                <div className="flex items-center gap-3 p-4 mb-6 rounded-sm border border-gold/30 bg-gold/5 text-gold text-sm">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  Thank you! Your email client should open shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-text-muted text-sm mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-muted text-sm mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-text-muted text-sm mb-2">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-text-muted text-sm mb-2">
                      Wedding Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-text-muted text-sm mb-2">
                    City / Venue
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors"
                    placeholder="Jaipur, Udaipur, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-muted text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-gold/20 rounded-sm text-text focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your dream wedding..."
                  />
                </div>

                <Button type="submit" size="lg">
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </Button>
              </form>
            </div>

            <div className="space-y-8">
              <SectionHeading
                subtitle="Reach Us"
                title="Contact Information"
                align="left"
              />

              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
                  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: <MapPin className="w-5 h-5" />, label: 'Address', value: siteConfig.address },
                  { icon: <Clock className="w-5 h-5" />, label: 'Hours', value: siteConfig.businessHours },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-5 rounded-sm border border-gold/15 bg-surface">
                    <div className="text-gold mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-text hover:text-gold transition-colors"
                        >
                          {item.value}
                        </a>
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
