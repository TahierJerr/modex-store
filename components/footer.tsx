"use client"

import Link from 'next/link';
import { BanknoteIcon, InstagramIcon, LandmarkIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';


const Footer = () => {    
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText('NL03REVO8295671783');
    };

    return (
        <footer className="bg-background text-muted-foreground py-12 border-t">
            <div className="container max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <Link href="#" className="flex items-center gap-2" prefetch={false}>
                        <Image src="/transparent.png" alt="Logo" width={100} height={1} />
                    </Link>
                    <p className="text-sm">
                        Welcome to Modex! We are dedicated to providing top-tier gaming computers designed by gamers, for gamers. Our mission is to elevate your gaming experience with innovative, high-quality PCs that stands out. Join us and discover the future of gaming with Modex!
                    </p>
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                            <MailIcon className="w-5 h-5" />
                            <a href="mailto:info@modexgaming.com" className="underline underline-offset-2">
                                info@modexgaming.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="w-5 h-5" />
                            <a href="tel:+31649146060" className="underline underline-offset-2">
                                +31 6 49146060
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <BanknoteIcon className="w-5 h-5" />
                            <p>IBAN: <span className='underline underline-offset-2 cursor-pointer' onClick={handleCopyToClipboard}>NL03 REVO 8295 6717 83</span></p>
                        </div>
                        <div className="flex items-center gap-2">
                            <LandmarkIcon className="w-5 h-5" />
                            <span>BTW: NL004752554B13</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-semibold">Follow Us</h4>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition-colors">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-semibold">Legal</h4>
                    <div className="grid gap-2">
                        <Link href="#" className="hover:underline text-sm" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:underline text-sm" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="#" className="hover:underline text-sm" prefetch={false}>
                            Returns
                        </Link>
                        <Link href="#" className="hover:underline text-sm" prefetch={false}>
                            Our Services
                        </Link>
                        <p className="text-sm">&copy; 2024 Modex. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
