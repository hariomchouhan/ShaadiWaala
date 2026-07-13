import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EnquiryForm } from '../components/ui/EnquiryForm'
import { siteConfig } from '../data/siteConfig'

export function Contact() {
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
                isHeart={false}
              />
              <EnquiryForm idPrefix="contact" />
            </div>

            <div className="space-y-8">
              <SectionHeading subtitle="Reach Us" title="Contact Information" align="left" isHeart={false} />

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
