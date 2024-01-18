import { Billboard as BillboardType } from "@/types";

import Image from "next/image";

interface BillboardProps {
    data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = async ({ data }) => {
    return (
        <section
            className="relative flex flex-col md:flex-row items-center justify-center py-28 sm:py-72 px-6 mb-4 md:mb-8"
        >
            <Image loading="eager" src={data?.imageUrl} alt="billboard" layout="fill" objectFit="cover" fetchPriority="high" quality={100} priority={true} />
            {data?.label && data?.description ? (
                <div className="container flex flex-col md:flex-row justify-between">
                    <div className="md:w-1/2 max-w-3xl  md:mr-10 md:order-none">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-6 transform translate-y-4 transition-all duration-700 delay-200 break-words" data-animate>
                            {data?.label}
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white mb-8 translate-y-4 break-words" data-animate>
                            {data?.description}
                        </p>
                    </div>
                </div>
            ) : null}
        </section>
    )
}

export default Billboard;
