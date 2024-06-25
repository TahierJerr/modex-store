import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Poppins } from 'next/font/google'
import './globals.css'
import { NavProvider } from '@/context/nav-provider'
import { CategoryProvider } from '@/context/category-provider'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import MobileNavbar from '@/components/mobile-navbar'

const font = Poppins({
  subsets: ['latin'],
  weight: '400'
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="nl">
      <body className={font.className + " bg-white"}>
        <NavProvider>
          <CategoryProvider>
          <ToastProvider />
            <div className='sm:block hidden'>
              <Navbar />
            </div>
            <div className="sm:hidden mb-16">
              <MobileNavbar />
            </div>
            <div className='min-h-screen mt-16'>
            {children}
            </div>
            <Footer />
          </CategoryProvider>
        </NavProvider >
        <CookieConsentComponent />
      </body>
    </html>
  )
}
