"use client"

import { Computer } from "@/types";

import Image from "next/image";
import { ShoppingCartIcon, InfoIcon, ChevronRightIcon } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import DeliveryTime from "./delivery-time";

interface CardProps {
    data: Computer;
}

const Card: React.FC<CardProps> = ({ data }) => {
    const cart = useCart();
    const router = useRouter();
    
    const handleClick = () => {
        const slug = `${data?.name.toLowerCase().replace(/\s/g, '-')}*${data?.id}`;
        router.push(`/gaming-pcs/${encodeURIComponent(slug)}`);
    };

    const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        cart.addItem(data);
    };
    
    return (
    <div onClick={handleClick} className="bg-black200 rounded-lg shadow-xl  text-black flex-col flex cursor-pointer transition-all duration-300  hover:bg-black100">
        <div className="w-full min-h-80 aspect-square rounded-t-md bg-white flex items-center">
            {data?.images?.[0]?.url ? (
                <div className="relative">
                    <Image src={data?.images?.[0]?.url} width={1000} height={1000} quality={100} alt={data.name} loading="lazy" className="rounded-md" />
                    <Button onClick={handleAddToCart} className="rounded-none hover:bg-primary20 absolute bottom-0 left-0 w-full bg-primary text-black py-1 text-center">
                        Toevoegen aan winkelwagen
                    </Button>
                </div>
                ) : (
                <p className="w-full h-auto text-center text-gray">Geen afbeelding beschikbaar.</p>
                )}
            </div>
            <div className="p-4 flex flex-col">
                <p className="font-bold text-xl text-white">{data.name}</p>
                <p className="text-lg text-white font-semibold">€ {data.price}</p>
                <hr className="mt-2 text-black100" />
                <div className="mt-2">
                    <p className="text-gray">{data.graphics.model}</p>
                    <p className="text-gray">{data.processor.name}</p>
                    <p className="text-gray">{data.memory.name}</p>
                </div>
                <hr className="mt-2 text-black100" />
                <div className="flex items-center mt-4">
                    <Button onClick={handleClick} className="px-4 py-2 flex text-md items-center w-full justify-center rounded-lg hover:opacity-75 transition-all bg-primary text-black hover:bg-white">
                        Ontdek!
                        <ChevronRightIcon size={20} className="ml-1" />
                    </Button>
                </div>
            </div>
        </div>
        );
    };
    
    export default Card;
    