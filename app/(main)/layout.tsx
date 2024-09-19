import Footer from '@/components/footer'
import NavbarComponent from '@/components/navbar'
import { auth } from '@clerk/nextjs/server'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { userId } = auth()

    const checkIfUserIsSignedIn = () => {
        if (!userId) {
            return false
        }
        return true
    }

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
