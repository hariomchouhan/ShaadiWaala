import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
