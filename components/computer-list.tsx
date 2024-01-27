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
    items: Computer[];
    sortOrder?: 'asc' | 'desc' | 'random';
    maxItems?: number;
}

const ComputerList: React.FC<ComputerListProps> = async ({
    title,
    description,
    id,
    items,
    sortOrder = 'asc',
    maxItems,
}) => {

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
                <Link href="/gaming-pcs" key="/gaming-pcs" scroll={true} >
                <Button className="translate-y-4 bg-white text-black">
                    <span className="flex items-center hover:translate-x-2 transition-all">
                        <span className="mr-2 ">Meer computers zien? Klik hier!</span>
                        <ArrowRight className="" size={20} />
                    </span>
                </Button>
            </Link>
            )}
        </div>
    );
};

export default ComputerList;
