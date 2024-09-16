"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Order placed!");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error("Payment canceled.");
        }
    }, [searchParams, removeAll]);

    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0);

    const onCheckout = async () => {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
            {
                computerIds: items.map((item) => item.id),
            },
            {
                headers: {
                    'referer': window.location.href,
                },
            }
        );
    
        window.location.href = response.data.url;
    };

    return (
        <div className="mt-12 rounded-lg bg-black200 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-4 lg:p-8">
            <p className="text-xl font-semibold text-primary">
                Summary
            </p>
            <div className="mt-6">
            <div className="font-medium flex items-center justify-between border-t border-primary pt-4 mb-4">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="font-medium flex items-center justify-between border-t border-primary pt-4">
                        <p>Total including VAT:</p>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length === 0} title="Checkout" onClick={onCheckout} className="bg-white w-full mt-6 text-black border border-black">
                Order now
            </Button>
        </div>
    )
}

export default Summary;