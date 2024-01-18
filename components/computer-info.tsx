"use client"

import { Computer } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import DeliveryTime from "./ui/delivery-time";

interface ComputerInfoProps {
    data: Computer;
}

const ComputerInfo: React.FC<ComputerInfoProps> = ({
    data
}) => {

    const cart = useCart();

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
  
        cart.addItem(data);
      }

    return (
        <div>
            <h1 className="text-3xl font-bold text-primary">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-white">
                    <Currency value={data?.price}/>
                </p>
            </div>
            <hr className="my-4 text-black200"/>
            <div className="flex gap-x-4 flex-col">
                <h2 className="font-semibold text-primary text-lg mb-4">Belangrijkste specificaties:</h2>                
                <p className="mb-2">Processorf: {data.processor.name}</p>
                <p className="mb-2">Grafische kaart: {data.graphics.name}</p>
                <p className="mb-2">Geheugen: {data.memory.name}</p>
                <p className="mb-2">Moederbord: {data.motherboard.name}</p>
                <p className="mb-2">Opslag: {data.storage.name}</p>
                <p className="mb-2">Voeding: {data.power.name}</p>
                <p className="mb-2">Behuizing: {data.pccase.name}</p>
            </div>
            <hr className="my-4 text-black200"/>
            <div className="mt-6 flex gap-x-3 flex-col">
            <DeliveryTime deliveryTime={data.deliveryTime} />
                <Button title="Add to cart" onClick={onAddToCart} className="bg-white text-black hover:bg-primary flex items-center w-full justify-center gap-x-2 mt-2 sm:mt-4">
                    Toevoegen aan winkelwagen
                    <ShoppingCart size={20} className="ml-2" />
                </Button>
            </div>
        </div>
    );
}

export default ComputerInfo;