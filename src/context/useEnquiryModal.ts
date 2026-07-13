import { useContext } from 'react'
import { EnquiryModalContext } from './enquiryModalContext'

export function useEnquiryModal() {
  const context = useContext(EnquiryModalContext)
  if (!context) {
    throw new Error('useEnquiryModal must be used within EnquiryModalProvider')
  }
  return context
}
