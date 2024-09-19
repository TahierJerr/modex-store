import { Poppins } from 'next/font/google'
import './globals.css'
import CookieConsentComponent from '@/components/cookie-consent'
import ToastProvider from '@/providers/toast-provider'
import { GoogleAnalytics } from '@next/third-parties/google'
import { ClerkProvider, GoogleOneTap } from '@clerk/nextjs'

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


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
    <ClerkProvider>
    <GoogleOneTap />
        <body className={font.className + " bg-white"}>
            <ToastProvider />
                {children}
            <CookieConsentComponent />
            <GoogleAnalytics gaId='G-Y8B38HERJE' />
            <GoogleAnalytics gaId='G-JNT40MYQTZ' />
        </body>
    </ClerkProvider>
        </html>
    )
}
