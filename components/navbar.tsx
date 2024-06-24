import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";

import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
    return (
        <div className="border-b border-black bg-white fixed top-0 left-0 w-full z-50">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 mr-4 mb-0.5">
                        <Image src="/transparent.png" alt="Logo" width={100} height={1}/>
                    </Link>
                <MainNav />
                <NavbarActions />
                </div>
            </Container>
        </div>
        );  
    };
    
    export default Navbar;