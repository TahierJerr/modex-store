import { Poppins } from 'next/font/google'
import './globals.css'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs'
import Head from 'next/head'
import { Metadata } from 'next'
import Script from 'next/script'

const font = Poppins({
    subsets: ['latin'],
    weight: '400'
})

/* <Head>
        <meta property='og:title' content='MODEX | Custom Gaming PCs Built for Performance & Value' />
        <meta property='og:description' content='MODEX is the best place to buy your new gaming PC. Our pre-built PCs  deliver exceptional performance and reliability. Order your MODEX Gaming PC today!' />
        <meta property='og:image' content='https://modexgaming.com/transparent.png' />
        <meta property='og:url' content='https://modexgaming.com' />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>MODEX</title>
</Head> */

export const metadata: Metadata = {
    title: 'MODEX | Custom Gaming PCs Built for Performance & Value',
    description: 'MODEX is the best place to buy your new gaming PC. Our pre-built PCs deliver exceptional performance and reliability. Order your MODEX Gaming PC today!',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <Head>
                <link rel="apple-touch-icon" href="/icon.png" type='image/png' sizes='32x32' />
            </Head>
            <Script type='text/javascript' src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js' async />
        <body className={font.className + " bg-white overflow-x-hidden"}>
            <ClerkProvider>
            <GoogleOneTap />
                {children}
            <ToastProvider />
            <CookieConsentComponent />
            <GoogleAnalytics gaId='G-Y8B38HERJE' />
            <GoogleAnalytics gaId='G-JNT40MYQTZ' />
        </ClerkProvider>
        </body>
        </html>
    )
}
