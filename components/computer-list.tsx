import NoResults from "@/components/ui/no-results";
import ComputerCard from "./ui/computer-card";
import getComputers from "@/actions/get-computers";
import { Computer } from "@/types";

interface ComputerListProps {
    title: string;
    description: string;
    id?: string;
    items: Computer[];
    sortOrder?: 'asc' | 'desc';
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

    filteredItems.sort((a, b) => {
        if (sortOrder === 'asc') {
            return Number(a.price) - Number(b.price);
        } else {
            return Number(b.price) - Number(a.price);
        }
    });

    if (maxItems && maxItems > 0) {
        filteredItems = filteredItems.slice(0, maxItems);
    }

    return (
        <div className="space-y-4">
            <p className="text-white font-bold text-3xl mx-auto">{title}</p>
            <p className=" text-gray text-1xl mx-auto font-semibold ">{description}</p>
            {filteredItems.length === 0 && <NoResults />}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4 text-white">
                {filteredItems.map(item => (
                    <ComputerCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ComputerList;
