"use client";

import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react";
import Button from '@/components/ui/button';
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const MobileActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cart = useCart();
    const router = useRouter();

    if (!isMounted) {
        return null;
    }


    return (
            <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full px-4 py-2">
                <ShoppingBag size={20} color="#cfb968"/>
                <span className="ml-2 text-sm font-medium text-primary">
                    {cart.items.length}
                </span>
            </Button>
    )
}

export default MobileActions;
