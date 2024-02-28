"use client";

import { usePathname, useRouter } from "next/navigation";
import Button from "@/components/ui/button";

import { cn } from "@/lib/utils";



const MainNav = () => {
    const pathname = usePathname();
    const route = useRouter();

    const homeClick = () => {
        route.push("/");
    };

    const gamingPcsClick = () => {
        route.push("/gaming-pcs");
    };

    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            <Button
                onClick={homeClick}
                className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/" ? "text-primary" : "text-white")}
            >
                Home
            </Button>
            <Button
                onClick={gamingPcsClick}
                className={cn("text-sm font-medium transition-colors hover:text-primary", pathname === "/gaming-pcs" ? "text-primary" : "text-white")}
            >
                Gaming PCs
            </Button>
        </nav>
    )
}

export default MainNav;