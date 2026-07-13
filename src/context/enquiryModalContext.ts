import { createContext } from 'react'

export interface EnquiryModalContextValue {
  isOpen: boolean
  openEnquiryModal: () => void
  closeEnquiryModal: () => void
}

export const EnquiryModalContext = createContext<EnquiryModalContextValue | null>(null)
