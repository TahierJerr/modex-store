import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { NavProvider } from '@/context/nav-provider'
import { CategoryProvider } from '@/context/category-provider'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import dynamic from 'next/dynamic'


const font = Montserrat({ subsets: ['latin'] })

const ModalProvider = dynamic(
  () => import('@/providers/modal-provider'), {
  loading: () => <p>Loading...</p>
  }
);

const MobileNavbar = dynamic(
  () => import('@/components/mobile-navbar'), {
  loading: () => <p>Loading...</p>
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
            {children}
            <Footer />
          </CategoryProvider>
        </NavProvider >
        <CookieConsentComponent />
      </body>
    </html>
  )
}
