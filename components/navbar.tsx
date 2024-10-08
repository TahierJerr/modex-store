"use client"

import useCart from "@/hooks/use-cart";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { LogIn, ShoppingCartIcon,} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState } from 'react'
import { Button } from "./ui/button";

interface NavbarComponentProps {
    userSignedIn: boolean;
}

const NavbarComponent:React.FC<NavbarComponentProps> = ({ userSignedIn }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const handleUserButton = () => {
        if (!userSignedIn) {
            return(
            <NavbarItem>
                <SignInButton forceRedirectUrl="/" fallbackRedirectUrl="/" signUpFallbackRedirectUrl="/" signUpForceRedirectUrl="/" mode="modal" >
                    <Button className="h-10 w-10 rounded-md p-0 md:h-10 md:w-auto md:rounded-md flex items-center justify-center bg-black text-white md:px-4 md:py-2">
                        <LogIn className="h-4 w-4 md:mr-2" />
                        <span className="sr-only md:not-sr-only md:inline-block text-sm font-extralight">Sign In</span>
                    </Button>
                </SignInButton>
            </NavbarItem>
            )
        } 
            return(
                <NavbarItem>
                    <UserButton signInUrl="/sign-in">
                    {/* <UserButton.MenuItems>
                        <UserButton.Link label="Orders" labelIcon   ={<TruckIcon size={15} />} href="/orders" />
                            <UserButton.Link label="Favourites" labelIcon={<HeartIcon size={15} />} href="/favourites" />
                        </UserButton.MenuItems> */}
                    </UserButton>
                </NavbarItem>
            )
    }
    
    const menuItems = [{
        title: 'Gaming PCs',
        href: '/gaming-pcs'
    },
    {
        title: 'GPU Comparison Tool',
        href: '/gpu-comparison-tool'
    }
]
    
    const cart = useCart();
    
    return (
    <Navbar isBordered isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="flex sm:hidden" justify="start">
            <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
            />
        </NavbarContent>
        <NavbarContent className="flex sm:hidden" justify="center">
            <NavbarBrand>
                <Link prefetch={false} href="/">
                    <Image src="/transparent.png" className="object-contain" alt="Logo" width={100} height={100} />
                </Link>
            </NavbarBrand>
        </NavbarContent>
        <NavbarBrand className="hidden sm:flex">
            <Link prefetch={false} href="/">
                <Image src="/transparent.png" className="object-contain" alt="Logo" width={100} height={100} />
            </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
            <NavbarItem>
                <Link prefetch={false} href="/gaming-pcs" className="text-sm">Gaming PCs</Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <Link prefetch={false} className="flex items-center rounded-md bg-white relative py-2 px-2" href="/cart"><ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5 " /><span className="text-xs absolute top-0 right-0 bg-black text-white rounded-full px-1">{cart.items.length}</span></Link>
            </NavbarItem>
            {handleUserButton()}
        </NavbarContent>
        <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={index} onClick={handleMenuClose}>
                    <Link onClick={handleMenuClose} prefetch={false} href={item.href}>{item.title}</Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        )
    }
    
    export default NavbarComponent