import Image from "next/image";

interface XLogoProps {
    width: number;
    height: number;
    className?: string;
}

const XLogo:React.FC<XLogoProps> = ({ width, height, className }) => {
    return (
        <Image src="/x.svg" alt="X Logo" width={width} height={height} className={className} />
    )
}

export default XLogo;