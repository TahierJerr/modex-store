"use client"

import { Computer } from "@/types";
import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { CheckIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { track } from "@vercel/analytics";
import Container from "./ui/container";

interface ComputerInfoProps {
    data: Computer;
}

const ComputerInfo: React.FC<ComputerInfoProps> = ({
    data
}) => {

    const cart = useCart()
    
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        track('Added to cart', { product: data.name, }, { flags: ['product_add_to_cart'] });
        cart.addItem(data);
    }
    
    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(Number(data.price));
    
    return (
    <section className=" py-12 px-4 md:px-6 w-full pt-12 md:pt-24 lg:pt-32 my-12">
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
            <Image
            quality={100}
            priority
            src={data.images[0].url}
            alt={data.name}
            width={600}
            height={600}
            className="w-full max-w-[500px] rounded-lg"
            />
        </div>
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold">{data.name}</h1>
            </div>
            <div className="grid gap-4">
                <div>
                    <h3 className="text-lg font-semibold">Key Features:</h3>
                    <ul className="mt-2 space-y-2 text-muted-foreground">
                        <li>
                            <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                            {data.processor.name}
                        </li>
                        <li>
                            <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                            {data.graphics.name}
                        </li>
                        <li>
                            <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                            {data.memory.name}
                        </li>
                        <li>
                            <CheckIcon className="w-5 h-5 inline-block mr-2 text-primary" />
                            {data.storage.name}
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Warranty:</h3>
                    <p className="mt-2 text-muted-foreground">{data.warranty.name} year comprehensive warranty with excellent customer support.</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="text-4xl font-bold">{formattedPrice}</p>
            </div>
            <Button className="bg-primary flex items-center text-white justify-center w-full hover:bg-primary/90" onClick={onAddToCart}><ShoppingCartIcon size={24} className="mr-2" />Add to Cart</Button>
        </div>
        </div>
        </Container>
    </section>
    );
}

export default ComputerInfo;