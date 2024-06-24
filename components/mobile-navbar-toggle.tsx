const NavbarToggle = ({
    isMenuOpen, setIsMenuOpen
}: {
    isMenuOpen: boolean
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <button className={`h-6 w-6 relative focus:outline-none px-0 py-0 ${isMenuOpen ? 'transform translate-y-0.5 transition-all' : 'transition-all'} `} onClick={handleMenuToggle} title="Menu">
            <span className={`block w-6 h-0.5 bg-black transition-all duration-500 relative ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-500 relative mt-1.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-500 relative mt-1.5 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
    )
}

export default NavbarToggle;
