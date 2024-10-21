"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
<<<<<<< Updated upstream
=======
import Image from "next/image";
import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
>>>>>>> Stashed changes

const Summary = () => {
    const searchParams = useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);
    const auth = useUser();
    const isSignedIn = auth.isSignedIn;
    
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
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            computerIds: items.map((item) => item.id),
        });
        
        window.location.href = response.data.url;
    }
    
    const checkOutButton = () => {
        if (!isSignedIn) {
            return (
            <div className="my-6 p-6 border rounded-lg shadow-lg bg-gray-50">
                <p className="text-lg font-semibold text-gray-700 mb-4">
                    Sign in or sign up to checkout
                </p>
                <div className="flex items-center justify-between space-x-4">
                    <SignInButton forceRedirectUrl="/cart" fallbackRedirectUrl="/cart" signUpFallbackRedirectUrl="/cart" signUpForceRedirectUrl="/cart" mode="modal">
                        <Button variant="outline" className="w-28 h-10 border-2 transition duration-300">
                            <span className="text-sm font-medium">Sign In</span>
                        </Button>
                    </SignInButton>
                    <SignUpButton forceRedirectUrl="/cart" fallbackRedirectUrl="/cart" signInForceRedirectUrl="/cart" signInFallbackRedirectUrl="/cart" mode="modal">
                        <Button className="w-28 h-10 text-white  transition duration-300">
                            <span className="text-sm font-medium">Sign Up</span>
                        </Button>
                    </SignUpButton>
                </div>
            </div>
<<<<<<< Updated upstream
            <Button disabled={items.length === 0} title="Checkout" onClick={onCheckout} className="bg-white w-full mt-6 text-black border border-black">
                Order now
            </Button>
=======
            
            )
        }
        
        return (
        <Button disabled={items.length === 0} title="Checkout" onClick={onCheckout} className="w-full mt-6">
            Order now
        </Button>
        )
    }
    
    return (
        <div className="mt-12 rounded-lg bg-gray-100 px-6 py-8 sm:p-8 lg:col-span-5 lg:mt-4 lg:p-10 shadow-lg">
        <p className="text-2xl font-bold text-primary mb-4">
            Summary
        </p>
        <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-t border-primary pt-4">
                <p className="text-lg font-medium">Shipping:</p>
                <p className="text-lg">Free</p>
            </div>
            <div className="flex items-center justify-between border-t border-primary pt-4">
                <p className="text-lg font-medium">Total including VAT:</p>
                <Currency value={totalPrice} />
            </div>
>>>>>>> Stashed changes
        </div>
        {checkOutButton()}
        {searchParams.get("success") && (
            <div className="trustpilot-widget mt-10 text-xl border-2 border-green-500 text-center font-semibold py-2">
                <a href="https://www.trustpilot.com/review/modexgaming.com" className="flex items-center justify-center text-green-600 hover:text-green-800" target="_blank" rel="noopener">
                    Review us on 
                    <Image src='https://cdn.trustpilot.net/brand-assets/4.3.0/logo-black.svg' className="ml-2" alt="Trustpilot Logo" height={125} width={125} loading="lazy"/>
                </a>
            </div>
        )}
    </div>
    
    )
}

export default Summary;