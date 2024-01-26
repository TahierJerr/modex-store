"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
};

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/gaming-pcs`,
        label: route.name,
        active: pathname === `gaming-pcs`
    }));

    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={cn("text-sm font-medium transition-colors hover:text-primary", route.active ? "text-primary" : "text-white")}>
                    {route.label}
                </Link>
            )
            )}
        </nav>
    )
}

export default MainNav;