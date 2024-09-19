import { Poppins } from 'next/font/google'
import './globals.css'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ClerkProvider } from '@clerk/nextjs'

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
        <meta property='og:title' content='MODEX | Custom Gaming PCs Built for Performance & Value' />
        <meta property='og:description' content='MODEX is the best place to buy your new gaming PC. Our pre-built PCs  deliver exceptional performance and reliability. Order your MODEX Gaming PC today!' />
        <meta property='og:image' content='https://modexgaming.com/transparent.png' />
        <meta property='og:url' content='https://modexgaming.com' />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>MODEX</title>
    </Head>
    <ClerkProvider>
        <html lang="en">
        <body className={font.className + " bg-white"}>
            <ToastProvider />
            <main>
                {children}
            </main>
            <CookieConsentComponent />
            <GoogleAnalytics gaId='G-Y8B38HERJE' />
            <GoogleAnalytics gaId='G-JNT40MYQTZ' />
        </body>
        </html>
    </ClerkProvider>
    </>
    )
}
