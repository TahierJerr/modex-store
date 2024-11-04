"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import Currency from "@/components/ui/currency";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);
    const { isSignedIn, user } = useUser();
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    
    const router = useRouter();
    
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
        try {
            const payload = {
                computerIds: items.map((item) => item.id),
                userId: user ? user.id : null,
            };
            
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, payload);
            router.push(response.data.url);
        } catch (error) {
            toast.error("Failed to start checkout process.");
        }
    };
    
    const CheckoutButton = () => (
    <Button 
    disabled={items.length === 0} 
    onClick={isSignedIn ? onCheckout : () => setIsDialogOpen(true)} 
    className="w-full mt-6"
    >
    {isSignedIn ? 'Order now' : 'Proceed to Checkout'}
</Button>
)

const AuthDialog = () => (
<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
    <DialogContent className="sm:max-w-[425px]">
        <h2 className="text-lg font-semibold mb-4">Choose an option to continue</h2>
        <div className="grid gap-4">
            <SignInButton mode="modal" forceRedirectUrl="/cart" fallbackRedirectUrl="/cart">
                <Button className="w-full">Sign In</Button>
            </SignInButton>
            <Button variant="outline" onClick={() => { onCheckout(); setIsDialogOpen(false); }}>
                Order as Guest
            </Button>
        </div>
    </DialogContent>
</Dialog>
)

return (
<div className="mt-8 rounded-lg bg-card p-6 shadow-md lg:col-span-5">
    <h2 className="text-xl font-semibold text-foreground mb-4">Order Summary</h2>
    <div className="space-y-2">
        <div className="flex justify-between text-sm">
            <span>Premium Shipping (Track & Trace)</span>
            <span className="font-bold">Free</span>
        </div>
        <div className="flex justify-between text-sm font-medium">
            <span>Total (incl. VAT)</span>
            <Currency value={totalPrice} />
        </div>
    </div>
    <CheckoutButton />
    <AuthDialog />
    {searchParams.get("success") && (
    <a 
    href="https://www.trustpilot.com/review/modexgaming.com" 
    className="mt-6 block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
    target="_blank" 
    rel="noopener noreferrer"
    >
    <span className="mr-2">Review us on</span>
    <Image 
    src='https://cdn.trustpilot.net/brand-assets/4.3.0/logo-black.svg' 
    alt="Trustpilot Logo" 
    height={20} 
    width={80} 
    className="inline-block"
    />
</a>
)}
</div>
)
}

export default Summary;
