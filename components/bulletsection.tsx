import React from 'react';
import { TruckIcon, ShieldIcon, EuroIcon } from "lucide-react";
import Image from 'next/image';
import Container from './ui/container';

const BulletSection = () => {
    return (
    <section className="w-full py-12 bg-muted">
        <Container>
        <div className="gap-8 lg:gap-12">
            <div className="flex flex-col items-center justify-center text-center gap-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary bg-white">Why Choose MODEX</div>
                    <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                        Clean, Powerful, and Affordable PCs Built for Gamers
                    </h3>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    MODEX delivers high-performance pre-built PCs designed for your unique needs. From powerful gaming systems to versatile workstations, each build offers a clean, optimized setup ready for anything you throw at it
                    </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
            <div className="grid gap-2">
                <h4 className="text-2xl font-bold text-primary flex items-center">
                    <ShieldIcon aria-label='Shield Icon' size={22} className="mr-2" />No Unwanted Software
                </h4>
                <p className="text-muted-foreground text-lg">
                    Every MODEX PC is delivered without unnecessary pre-installed software, giving you a clean and optimized
                    system right out of the box.
                </p>
            </div>
            <div className="grid gap-2">
                <h5 className="text-2xl font-bold text-primary flex items-center">
                    <TruckIcon aria-label='Truck Icon' size={22} className="mr-2" />Fast & Insured Shipping
                </h5>
                <p className="text-muted-foreground text-lg">
                    Enjoy peace of mind with fast delivery, fully insured by MODEX to ensure your PC arrives safely and on
                    time—usually within a week.
                </p>
            </div>
            <div className="grid gap-2">
                <h6 className="text-2xl font-bold text-primary flex items-center">
                    <EuroIcon aria-label='Euro Icon' size={22} className="mr-2" />Best Value for Money
                </h6>
                <p className="text-muted-foreground text-lg">
                    MODEX builds are designed to provide maximum value, ensuring you get the best gaming and computing power
                    for your investment.
                </p>
            </div>
        </div>
                <Image
                src="/ramimage.webp"
                alt="Modex Benefits"
                loading='lazy'
                width={800}
                height={600}
                quality={75}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
            </div>
        </div>
        </Container>
    </section>
    );
};

export default BulletSection;
