import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'

export function ContactCTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-gold/10 to-brown/20" />
      <div className="absolute inset-0 bg-bg/80" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-text mb-4">
            Ready to Plan Your{' '}
            <span className="gold-gradient-text">Dream Wedding?</span>
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
            Let us take away the stress so you can truly enjoy every moment of
            your celebration. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={siteConfig.social.whatsapp}
              size="lg"
              external
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
            <Button to="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
