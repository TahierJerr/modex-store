import NoResults from "@/components/ui/no-results";
import ComputerCard from "./ui/computer-card";
import getComputers from "@/actions/get-computers";
import { Computer } from "@/types";
import Link from "next/link";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

interface ComputerListProps {
    title: string;
    description: string;
    id?: string;
    sortOrder?: 'asc' | 'desc' | 'random';
    maxItems?: number;
}

const ComputerList: React.FC<ComputerListProps> = async ({
    title,
    description,
    id,
    sortOrder = 'asc',
    maxItems,
}) => {

    const items: Computer[] = await getComputers({ isFeatured: true });

    let filteredItems: Computer[] = [];

    if (items) {
        filteredItems = id ? items.filter(item => item.id !== id) : items;
    } else {
        const fetchedItems = await getComputers({ isFeatured: true });
        filteredItems = id ? fetchedItems.filter(item => item.id !== id) : fetchedItems;
    }

    if (sortOrder === 'random') {
        filteredItems.sort(() => Math.random() - 0.5); // Randomize the order
    } else {
        filteredItems.sort((a, b) => {
            if (sortOrder === 'asc') {
                return Number(a.price) - Number(b.price);
            } else {
                return Number(b.price) - Number(a.price);
            }
        });
    }

    if (maxItems && maxItems > 0) {
        filteredItems = filteredItems.slice(0, maxItems);
    }

    return (
        <div className="space-y-4">
            <p className="text-white font-bold text-3xl mx-auto">{title}</p>
            <p className=" text-gray text-1xl mx-auto font-semibold ">{description}</p>
            {filteredItems.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4 text-white">
                {filteredItems.map(item => (
                    <ComputerCard key={item.id} data={item} />
                ))}
            </div>
            {maxItems && maxItems > 0 && (
                <div className="flex justify-center sm:justify-start">
                <Link href="/gaming-pcs" key="/gaming-pcs" className="">
                <Button className="translate-y-4 bg-white text-black px-16 sm:px-auto rounded-lg">
                    <span className="flex items-center hover:translate-x-2 transition-all">
                        <span className="mr-2 text-sm md:text-md">Meer computers zien? Klik hier!</span>
                        <ArrowRight className="" size={20} />
                    </span>
                </Button>
            </Link>
            </div>
            )}
        </div>
    );
};

export default ComputerList;
