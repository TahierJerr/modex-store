import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import MobileNavbar from '@/components/mobile-navbar'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { NavProvider } from '@/context/nav-provider'
import { CategoryProvider } from '@/context/category-provider'
import CookieConsentComponent from '@/components/cookie-consent'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MODEX',
  description: 'MODEX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className + " bg-black"}>
        <NavProvider>
          <CategoryProvider>
            <div className='sm:block hidden'>
              <ModalProvider />
              <ToastProvider />
              <Navbar />
            </div>
            <div className="sm:hidden mb-16">
              <MobileNavbar />
            </div>
            <CookieConsentComponent />
            {children}
            <Footer />
          </CategoryProvider>
        </NavProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
