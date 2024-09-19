import Footer from '@/components/footer'
import NavbarComponent from '@/components/navbar'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body >
            <NavbarComponent />
                {children}
            <Footer />
        </body>
        </html>
    )
}
