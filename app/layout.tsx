import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs'
import Head from 'next/head'
import { Metadata } from 'next'

const font = Bricolage_Grotesque({
    subsets: ['latin'],
    weight: '400'
})

export const metadata: Metadata = {
    title: 'MODEX | Custom Gaming PCs Built for Performance & Value',
    description: 'MODEX is the best place to buy your new gaming PC. Our pre-built PCs deliver exceptional performance and reliability. Order your MODEX Gaming PC today!',
    twitter: {
        card: 'summary_large_image',
        site: 'https://x.com/MODEX_GAMING',
        title: 'MODEX | Custom Gaming PCs Built for Performance & Value',
        description: 'Get your custom-built gaming PCs from MODEX. Designed for performance and style.',
        images: ['https://res.cloudinary.com/dgbhzvy6k/image/upload/v1726565120/sgamyceqmgiuz5q9fzwm.webp'],
    },
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
