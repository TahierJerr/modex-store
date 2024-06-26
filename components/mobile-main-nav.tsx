"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useNavContext } from "@/context/nav-provider";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
};

const MainNavMobile: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();
    const { isMenuOpen, setIsMenuOpen } = useNavContext();

    const routes = data.map((route) => ({
        href: `/gaming-pcs`,
        label: route.name,
        active: pathname === `gaming-pcs`
    }));


    const handleLinkClick = () => {
      setIsMenuOpen(false);
    };

    
    return (
        <nav className="flex flex-col">
            {routes.map((route) => (
                <Link onClick={handleLinkClick} key={route.href} href={route.href} className={cn("text-xl text-black font-medium transition-colors my-6", route.active ? "underline underline-offset-2" : "")}>
                    {route.label}
                </Link>
            )
            )}
        </nav>
    )
}

export default MainNavMobile;