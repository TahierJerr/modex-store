import Footer from '@/components/footer'
import checkIfUserIsSignedIn from '@/components/functions/check-if-user-is-signed-in'
import NavbarComponent from '@/components/navbar'
import Container from '@/components/ui/container'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <header>
                <NavbarComponent userSignedIn={checkIfUserIsSignedIn()}/>
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
