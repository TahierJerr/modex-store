import Footer from '@/components/footer'
import { Poppins } from 'next/font/google'
import './globals.css'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import NavbarComponent from '@/components/navbar'

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
    <html lang="en">
      <body className={font.className + " bg-white"}>
          <ToastProvider />
          <NavbarComponent />
            <div>
            {children}
            </div>
            <Footer />
        <CookieConsentComponent />
      </body>
    </html>
  )
}
