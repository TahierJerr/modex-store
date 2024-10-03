"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import Image from "next/image";

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

    const onCheckout  = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            computerIds: items.map((item) => item.id),
        });

        window.location.href = response.data.url;
    }

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
            {searchParams.get("success") && (
                <div className="trustpilot-widget mt-10 text-xl border-2 text-center border-green-400 font-semibold py-1" data-locale="en-US" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="66f416fabcdb0d2e51902d5a" data-style-height="52px" data-style-width="100%">
                    <a href="https://www.trustpilot.com/review/modexgaming.com" className="flex items-center justify-center" target="_blank" rel="noopener">Review us on <Image src='https://cdn.trustpilot.net/brand-assets/4.3.0/logo-black.svg' className="ml-2" alt="Trustpilot Logo" height={125} width={125} loading="lazy"/></a>
                </div>
            )}
        </div>
    )
}

export default Summary;