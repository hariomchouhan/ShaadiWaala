import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'

export function ContactCTA() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/15 via-brown-deep to-gold/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-text mb-4">
            Ready to Find Your{' '}
            <span className="gold-gradient-text">Perfect Match?</span>
          </h2>
          <p className="text-text-muted text-lg mb-4 max-w-2xl mx-auto">
            Submit your enquiry privately. Our team will contact you personally to
            begin the matchmaking process — exclusively for Elite and NRI families.
          </p>
          <p className="text-gold text-sm mb-8 tracking-wide">
            Your information is never shared publicly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/contact" size="lg">
              Register Your Interest
            </Button>
            <Button
              href={siteConfig.social.whatsapp}
              variant="outline"
              size="lg"
              external
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
