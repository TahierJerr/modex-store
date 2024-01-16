import Link from 'next/link';
import Container from '@/components/ui/container';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-primary text-white py-8">
            <Container>
            <div className="container mx-auto flex flex-wrap justify-between md:pl-8">
                <div className="mb-4 bg-black p-4  md:w-1/2 lg:w-1/4">
                    <h3 className="text-lg font-bold mb-2">Volg Ons!</h3>
                    <a href="https://www.instagram.com/modexpcs">
                        <p className='text-white hover:text-primary transition-all mb-2'>Instagram</p>
                    </a>
                    <a href="https://www.tiktok.com/@modexpcs">
                        <p className='text-white hover:text-primary transition-all mb-2'>TikTok</p>
                    </a>
                    <a href="https://discord.gg/2nz9fqMweu">
                        <p className='text-white hover:text-primary transition-all'>Discord</p>
                    </a>
                </div>
                <div className="mb-4 bg-black p-4 md:w-1/2 lg:w-1/4">
                    <h3 className="text-lg font-bold mb-2">Voorwaarden</h3>
                    <Link key="/privacy" href="/privacy">
                        <p className='text-white hover:text-primary transition-all mb-2'>Privacy</p>
                    </Link>
                    <Link key="/voorwaarden" href="/voorwaarden">
                        <p className='text-white hover:text-primary transition-all mb-2'>Algemene Voorwaarden</p>
                    </Link>
                    <Link key="/cookies" href="/cookies">
                        <p className='text-white hover:text-primary transition-all'>Cookies</p>
                    </Link>
                </div>
                <div className="mb-4 bg-black p-4 md:w-1/2 lg:w-1/4">
                    <h3 className="text-lg font-bold mb-2">Contact Informatie</h3>
                    <p className="mb-2">Telefoonnummer: <a title='phone number' href="tel:+31649146060" className='hover:text-primary transition-colors'>+31649146060</a></p>
                    <p className="mb-2">Email: <a title='email' href="mailto:info@modex-pc.nl" className='hover:text-primary transition-colors'>info@modex-pc.nl</a></p>
                    <Link title='frequently asked questions' key="/faq" href="/faq" ><p className='hover:text-primary transition-colors mb-2'>Veelgestelde Vragen</p></Link>
                    <p title='Bank number' className="mb-2">IBAN: NL03 REVO 8295 6717 83</p>
                    <p title='KVK nummer' className='mb-2'>KVK: 89703685</p>
                    <p title='BTW Nummer'>BTW: NL004752554B13</p>
                </div>
                <div className="mb-4 bg-black p-4 md:w-1/2 lg:w-1/4">
                    <h3 className="text-lg font-bold mb-2">Service</h3>
                    <Link key="/retour" href="/retour" ><p className='mb-2 hover:text-primary transition-colors'>Retourneren</p></Link>
                </div>
            </div>
            <p className="text-center mt-8">
                © {currentYear} MODEX. Alle prijzen zijn inclusief BTW.
            </p>
            </Container>
        </footer>
    )
}

export default Footer;
