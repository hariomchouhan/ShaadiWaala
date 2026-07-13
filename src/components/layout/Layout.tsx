import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { WhatsAppButton } from './WhatsAppButton'
import { EnquiryModalProvider } from '../../context/EnquiryModalProvider'
import { EnquiryModal } from '../ui/EnquiryModal'

export function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <EnquiryModalProvider>
      <div className="min-h-screen flex flex-col bg-bg">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <EnquiryModal />
      </div>
    </EnquiryModalProvider>
  )
}
