import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEnquiryModal } from '../../context/useEnquiryModal'
import { EnquiryForm } from '../ui/EnquiryForm'

export function EnquiryModal() {
  const { isOpen, closeEnquiryModal } = useEnquiryModal()

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEnquiryModal()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeEnquiryModal])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeEnquiryModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-sm border border-gold/20 bg-bg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeEnquiryModal}
              className="absolute top-4 right-4 z-10 text-text-muted hover:text-gold transition-colors"
              aria-label="Close enquiry form"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6 sm:p-8">
              <p className="text-gold text-sm tracking-[0.2em] uppercase mb-2">
                Confidential Enquiry
              </p>
              <h2
                id="enquiry-modal-title"
                className="font-serif text-2xl sm:text-3xl text-text mb-6 pr-8"
              >
                Register Your Interest
              </h2>

              <EnquiryForm idPrefix="modal" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
