'use client';

import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { Button } from "./ui/button";
import { usePathname } from 'next/navigation'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from "./ui/container";
import { useRouter } from "next/navigation";

interface NavbarComponentProps {
    userSignedIn: boolean;
}

const menuItems = [
{ title: 'Gaming PCs', href: '/gaming-pcs' },
{ title: 'GPU Comparison Tool', href: '/gpu-comparison-tool' }
];

const NavbarComponent: React.FC<NavbarComponentProps> = ({ userSignedIn }) => {
    const router = useRouter()
    
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    const handleCartButton = () => {
        router.push('/cart')
    }
    
    const handleUserButton = () => {
        if (!userSignedIn) {
            return (
            <div className="flex items-center space-x-4">
                <SignInButton
                forceRedirectUrl="/"
                fallbackRedirectUrl="/"
                signUpFallbackRedirectUrl="/"
                signUpForceRedirectUrl="/"
                mode="modal"
                >
                <Button variant="outline" className="w-24 h-10">
                    <span className="text-sm font-medium">Sign In</span>
                </Button>
            </SignInButton>
            <SignUpButton
            forceRedirectUrl="/"
            fallbackRedirectUrl="/"
            signInFallbackRedirectUrl="/"
            signInForceRedirectUrl="/"
            mode="modal"
            >
            <Button className="w-24 h-10">
                <span className="text-sm font-medium">Sign Up</span>
            </Button>
        </SignUpButton>
    </div>
    )
}

return (
<UserButton signInUrl="/sign-in">
    {/* <UserButton.MenuItems>
        <UserButton.Link label="Orders" labelIcon={<TruckIcon size={15} />} href="/orders" />
        <UserButton.Link label="Favourites" labelIcon={<HeartIcon size={15} />} href="/favourites" />
    </UserButton.MenuItems> */}
</UserButton>
)
}

return (
<nav className="fixed w-full top-0 z-50 bg-white shadow-md">
    <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" prefetch={false}>
                        <Image src="/transparent.png" className="object-contain" alt="Logo" width={100} height={100} />
                    </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
                    {menuItems.map((item) => (
                        <Link
                        key={item.title}
                        href={item.href}
                        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                            pathname === item.href
                            ? 'border-black text-black'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                        }`}
                        >
                        {item.title}
                    </Link>
                    ))}
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <motion.div
                    onClick={handleCartButton}
                    className="relative cursor-pointer"
                    initial={false}
                    >
                    <ShoppingCart className="h-6 w-6 text-gray-500" />
                    </motion.div>
                    <button
                    onClick={handleUserButton}
                    className="ml-4 p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                    {handleUserButton()}
                </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
        </div>
    </div>
</div>

<AnimatePresence>
    {isOpen && (
        <motion.div
        className="sm:hidden"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        >
        <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
                <Link
                key={item.title}
                href={item.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                    pathname === item.href
                    ? 'border-black text-black bg-gray-50'
                    : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                }`}
                >
                {item.title}
            </Link>
            ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
                <div className="flex-shrink-0 text-gray-400">
                    <User className="h-10 w-10 ml-auto flex-shrink-0 bg-transparent p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
                </div>
                <div className="ml-3">
                    {handleUserButton()}
                </div>
                <motion.div
                    onClick={handleCartButton}
                    className="relative cursor-pointer"
                    initial={false}
                    >
                    <ShoppingCart className="h-6 w-6 text-gray-500" />
                </motion.div>
            </div>
        </div>
    </motion.div>
    )}
</AnimatePresence>
</Container>
</nav>
);
}

export default NavbarComponent;
