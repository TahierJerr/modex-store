import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { NavProvider } from '@/context/nav-provider'
import { CategoryProvider } from '@/context/category-provider'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import dynamic from 'next/dynamic'
import MobileNavbar from '@/components/mobile-navbar'


const font = Montserrat({ subsets: ['latin'] })

const ModalProvider = dynamic(
  () => import('@/providers/modal-provider'), {
  loading: () => <div className="flex justify-center items-center"><p className="text-white font-semibold">Aan het laden...</p></div>
  }
);


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
            <div className='min-h-screen'>
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
