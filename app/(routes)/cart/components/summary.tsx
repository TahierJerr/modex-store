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
            toast.success("Bestelling geplaatst!");
            removeAll();
        }

        if (searchParams.get("canceled")) {
            toast.error("Betaling geannuleerd.");
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
        <div className="mt-12 rounded-lg bg-black200  px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-4 lg:p-8 text-white">
            <h2 className="text-xl font-semibold text-primary">
                Samenvatting
            </h2>
            <div className="mt-6">
            <div className="font-medium flex items-center justify-between border-t border-primary pt-4 mb-4">
                    <p>Verzendkosten:</p>
                    <p>Gratis</p>
                </div>
                <div className="font-medium flex items-center justify-between border-t border-primary pt-4">
                        <p>Totaal inclusief BTW:</p>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length === 0} title="Checkout" onClick={onCheckout} className="bg-white w-full mt-6 text-black hover:bg-primary">
                Bestellen
            </Button>
        </div>
    )
}

export default Summary;