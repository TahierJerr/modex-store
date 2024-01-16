import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();
    return (
        <div className="border-b border-primary bg-black">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 mr-4 mb-0.5">
                        <Image src="/transparent.png" alt="Logo" width={100} height={1}/>
                    </Link>
                <MainNav data={categories}/>
                <NavbarActions />
                </div>
            </Container>
        </div>
        );  
    };
    
    export default Navbar;