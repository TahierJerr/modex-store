import Image from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface ComputerGalleryTabProps {
    image: ImageType;
}

const ComputerGalleryTab: React.FC<ComputerGalleryTabProps> = ({
    image
}) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-lg">
                        <Image fill src={image.url} alt="computer image" className="object-cover object-center " quality={100} fetchPriority="high" priority={true} />
                    </span>
                    <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2 ",
                    selected ? "ring-primary" : "")} />
                </div>
            )}

        </Tab>
    )
}

export default ComputerGalleryTab;