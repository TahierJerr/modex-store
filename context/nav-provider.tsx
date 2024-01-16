"use client";

import { useContext, useState, createContext } from "react";

type ContextProps = {
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const NavContext = createContext<ContextProps>({
    isMenuOpen: false,
    setIsMenuOpen: (): boolean => false,
})

export const NavProvider = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <NavContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </NavContext.Provider>
    );
}

export const useNavContext = () => useContext(NavContext);