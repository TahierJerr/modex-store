"use client"

import { Computer } from "@/types";

import Image from "next/image";
import { CpuIcon, InfoIcon, MemoryStickIcon, ShoppingCartIcon } from "lucide-react";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface CardProps {
    data: Computer;
}

const Card: React.FC<CardProps> = ({ data }) => {
    const router = useRouter();
    
    const handleClick = () => {
        const slug = `${data?.name.toLowerCase().replace(/\s/g, '-')}*${data?.id}`;
        router.push(`/gaming-pcs/${encodeURIComponent(slug)}`);
    };

    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
  
        cart.addItem(data);
    }

    const formattedPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(Number(data.price));
    
    return (
        <div onClick={handleClick} className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <Image src={data.images[0].url} alt={`${data.name} image`} width={500} height={400} quality={100} className=" object-contain w-full h-64 bg-white pt-1" />
            <div className="p-4 bg-background">
                <h3 className="text-xl font-bold text-primary">{data.name}</h3>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm">
                        <CpuIcon className="w-4 h-4" />
                        <span>{data.processor.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <MemoryStickIcon className="w-4 h-4" />
                        <span>{data.memory.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <CpuIcon className="w-4 h-4" />
                        <span>{data.graphics.name}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <h4 className="text-lg font-semibold md:text-xl text-primary">{formattedPrice}</h4>
                    <div className="gap-2 flex items-center ">
                    <Button onClick={handleClick} className="inline-flex h-8 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        Learn more
                    </Button>
                    <Button onClick={onAddToCart} className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        <ShoppingCartIcon className="w-4 h-4 mr-2" />
                        Buy now
                    </Button>
                    </div>
                </div>
            </div>
        </div>
        );
    };
    
    export default Card;
    