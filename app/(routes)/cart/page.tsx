"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import Summary from "./components/summary";
import CartItem from "./components/cart-item";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX | Winkelwagen',
  }

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;


    return (
        <div className="bg-black">
            <Container>
                <div className="py-8 sm:px-6 lg:px-8 mt-8 sm:mt-0 mx-4 md:mx-0">
                    <h1 className="text-primary font-bold text-3xl">Winkelwagen</h1>
                    <div className="mt-6 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7  rounded-lg">
                            {cart.items.length === 0 && <p className="text-white">Geen producten in de winkelwagen.</p>}
                            <ul>
                                {cart.items.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </ul>
                        </div>
                        <Summary />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CartPage;