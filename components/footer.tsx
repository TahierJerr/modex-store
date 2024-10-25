"use client"

import Link from 'next/link';
import { BanknoteIcon, CopyIcon, CopyCheckIcon, FacebookIcon, InstagramIcon, LandmarkIcon, MailIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import TiktokLogo from './tiktok-logo';
import Container from './ui/container';
import { useState } from 'react';
import toast from 'react-hot-toast';


const Footer = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyToClipboard = () => {
        setIsCopied(true);
        navigator.clipboard.writeText('NL03REVO8295671783');
        toast.success('IBAN copied to clipboard');
        setTimeout(() => {
            setIsCopied(false);
        }, 4000);
    };

    return (
        <footer className="bg-background text-muted-foreground py-12 border-t">
            <Container>
            <div className=" mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
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
                            <a href="mailto:info@modexgaming.com" title='E-mail' className="underline underline-offset-2">
                                info@modexgaming.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="w-5 h-5" />
                            <a href="tel:+31649146060" title='Phone Number' className="underline underline-offset-2">
                                +31 6 49146060
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <BanknoteIcon className="w-5 h-5" />
                            <p className='flex items-center'>IBAN: <span className='underline underline-offset-2 cursor-pointer' onClick={handleCopyToClipboard}> NL13 REVO 6924 8820 56</span>
                            {isCopied && <CopyCheckIcon className='w-5 h-5 ml-2' />}
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <LandmarkIcon className="w-5 h-5" />
                            <span>BTW: NL004752554B13</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold">Follow Us</p>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/modexgamingpc/" title='Instagram' className="hover:text-primary transition-colors">
                            <InstagramIcon className="w-6 h-6" />
                        </a>
                        <a href="https://www.tiktok.com/@modexgaming" title='TikTok'>
                            <TiktokLogo width={24} height={24} />
                        </a>
                        <a href="https://www.facebook.com/people/MODEX/61566822210338/" title='Facebook' className='hover:text-primary transition-colors'>
                            <FacebookIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-lg font-semibold">Legal</p>
                    <div className="grid gap-2">
                        <Link href="/privacy" className="hover:underline text-sm" prefetch={false}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms-of-service" className="hover:underline text-sm" prefetch={false}>
                            Terms of Service
                        </Link>
                        <Link href="/return" className="hover:underline text-sm" prefetch={false}>
                            Returns
                        </Link>
                        <p className="text-sm">&copy; 2024 Modex. All rights reserved.</p>
                    </div>
                </div>
            </div>
            </Container>
        </footer>
    );
}

export default Footer;
