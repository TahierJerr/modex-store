"use client"

import { Computer } from "@/types";

import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";

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
    
    return (
    <div onClick={handleClick} className="bg-white rounded-lg drop-shadow-lg shadow-xl text-black flex-col flex cursor-pointer transition-all duration-300 hover:bg-slate border">
        <div className="w-full min-h-80 aspect-square rounded-t-md flex items-center">
            {data?.images?.[0]?.url ? (
                <div className="relative">
                    <Image src={data?.images?.[0]?.url} width={1000} height={1000} quality={100} alt={data.name} loading="lazy" className="rounded-md" />
                </div>
                ) : (
                <p className="w-full h-auto text-center text-gray">Geen afbeelding beschikbaar.</p>
                )}
            </div>
            <div className="py-2 flex flex-col justify-center text-center">
                <p className="font-bold text-xl ">{data.name}</p>
                <hr className="mt-2 " />
                <div className="mt-2">
                    <p className="">{data.graphics.model}</p>
                    <p className="">{data.processor.name}</p>
                    <p className="">{data.memory.name}</p>
                </div>
                <hr className="my-2 text-black100" />
                <p className="text-lg font-semibold">€ {data.price}</p>
            </div>
            <Button title="Toevoegen aan winkelwagen" onClick={onAddToCart} className="py-2 rounded-b-lg flex rounded-t-none hover:bg-blue-950 hover:transition-all justify-center items-center text-white bg-black w-full text-center">
                <ShoppingCartIcon size={20} className="mr-2" /> Toevoegen aan winkelwagen
            </Button>
        </div>
        );
    };
    
    export default Card;
    