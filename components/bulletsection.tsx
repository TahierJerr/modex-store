import React from 'react';
import { HeadsetIcon, WrenchIcon, TruckIcon } from "lucide-react";
import Image from 'next/image';

const BulletSection = () => {
    return (
    <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Why Choose Modex</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                        MODEX computers tailored for your needs
                    </h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        MODEX offers a wide range of pre-built PCs, each designed to meet your unique computing needs. From
                        powerful gaming rigs to versatile workstations, we have the perfect solution for you.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="grid gap-4">
                    <div className="grid gap-1">
                        <p className="text-xl font-bold text-primary flex items-center"><WrenchIcon size={22} className='mr-2' />Customizable Configurations</p>
                        <p className="text-muted-foreground">
                            Choose one of our well thought-out configurations, that suits your needs.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <p className="text-xl font-bold text-primary flex items-center"><TruckIcon size={22} className='mr-2' />Fast Delivery</p>
                        <p className="text-muted-foreground">
                            Get your new PC delivered to your doorstep quickly, with our efficient delivery and handling
                            process.
                        </p>
                    </div>
                    <div className="grid gap-1">
                        <p className="text-xl font-bold text-primary flex items-center"><HeadsetIcon size={22} className='mr-2' />Excellent Support</p>
                        <p className="text-muted-foreground">
                            Our knowledgeable support team is always here to assist you with any questions or issues you may
                            have.
                        </p>
                    </div>
                </div>
                <Image
                src="/ramimage.webp"
                alt="Modex Benefits"
                loading='lazy'
                width={550}
                height={310}
                quality={75}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
            </div>
        </div>
    </section>
    );
};

export default BulletSection;
