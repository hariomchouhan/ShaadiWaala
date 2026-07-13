import { useCallback, useMemo, useState } from 'react'
import { EnquiryModalContext } from './enquiryModalContext'

export function EnquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openEnquiryModal = useCallback(() => setIsOpen(true), [])
  const closeEnquiryModal = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, openEnquiryModal, closeEnquiryModal }),
    [isOpen, openEnquiryModal, closeEnquiryModal]
  )

  return (
    <EnquiryModalContext.Provider value={value}>
      {children}
    </EnquiryModalContext.Provider>
  )
}
