import Image from "next/image";

interface TiktokLogoProps {
    width: number;
    height: number;
    className?: string;
}

const TiktokLogo:React.FC<TiktokLogoProps> = ({ width, height, className }) => {
    return (
        <Image src="/tiktok.svg" alt="Tiktok Logo" width={width} height={height} className={className} />
    )
}

export default TiktokLogo