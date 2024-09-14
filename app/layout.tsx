import Footer from '@/components/footer'
import { Poppins } from 'next/font/google'
import './globals.css'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import NavbarComponent from '@/components/navbar'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <>
    <Head>
        <meta property='og:title' content='MODEX | MODEX Gaming PCs offer the best performance and reliability' />
        <meta property='og:description' content='MODEX is the best place to buy your new gaming PC. We offer computers for every budget. Our pre-built PCs are designed to deliver exceptional performance and reliability. Order your MODEX Gaming PC today!' />
        <meta property='og:image' content='https://modexgaming.com/transparent.png' />
        <meta property='og:url' content='https://modexgaming.com' />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>MODEX</title>
    </Head>
    <html lang="en">
    <body className={font.className + " bg-white"}>
        <ToastProvider />
        <NavbarComponent />
        <div>
            {children}
        </div>
        <Footer />
        <CookieConsentComponent />
        <GoogleAnalytics gaId='G-Y8B38HERJE' />
    </body>
    </html>
    </>
    )
}
