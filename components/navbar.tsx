"use client"

import useCart from "@/hooks/use-cart";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/navbar";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useState } from 'react'

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };
    
    const menuItems = [{
        title: 'Gaming PCs',
        href: '/gaming-pcs'
    }]
    
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
            <NavbarMenuItem>
                <p className="text-gray-500 text-sm">Mini PCs (Coming Soon!)</p>
            </NavbarMenuItem>
            <NavbarMenuItem>
                <p className="text-gray-500 text-sm">Refurbished PCs (Coming Soon!)</p>
            </NavbarMenuItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <Link prefetch={false} className="flex items-center rounded-md bg-white relative py-2 px-2" href="/cart"><ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5 " /><span className="text-xs absolute top-0 right-0 bg-black text-white rounded-full px-1">{cart.items.length}</span></Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
            {menuItems.map((item, index) => (
                <NavbarMenuItem key={index} onClick={handleMenuClose}>
                    <Link onClick={handleMenuClose} prefetch={false} href={item.href}>{item.title}</Link>
                </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <p className="text-gray-500">Mini PCs (Coming Soon!)</p>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <p className="text-gray-500">Refurbished PCs (Coming Soon!)</p>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
        )
    }
    
    export default NavbarComponent