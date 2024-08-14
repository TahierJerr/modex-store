"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import Summary from "./components/summary";
import CartItem from "./components/cart-item";

const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;


    return (
            <Container>
                <div className="py-8 sm:px-6 lg:px-8 mt-16 mx-4 md:mx-0">
                    <h1 className="text-primary font-bold text-3xl">Cart ({cart.items.length})</h1>
                    <div className="mt-6 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                        <div className="lg:col-span-7  rounded-lg">
                            {cart.items.length === 0 && <p>No products in cart.</p>}
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
    );
}

export default CartPage;