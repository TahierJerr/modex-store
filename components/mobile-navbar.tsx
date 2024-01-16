"use client"

import Container from "@/components/ui/container";
import MobileActions from "@/components/mobile-navbar-actions";
import NavbarToggle from "@/components/mobile-navbar-toggle";
import MobileMenuPage from "@/components/mobile-menu-page";

import Link from "next/link";
import Image from "next/image";
import { useNavContext } from "@/context/nav-provider";


const MobileNavbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useNavContext();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="border-b bg-black border-primary fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="flex gap-x-2 " onClick={handleLinkClick}>
            <Image src="/transparent.png" alt="Logo" width={100} height={100} quality={100} placeholder="empty" priority={true} />
          </Link>
          <div className="ml-auto flex items-center gap-x-4">
            <MobileActions />
            <NavbarToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
          {isMenuOpen && <MobileMenuPage />}
        </div>
      </Container>
    </div>
  );
};

export default MobileNavbar;