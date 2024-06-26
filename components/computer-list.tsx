import NoResults from "@/components/ui/no-results";
import ComputerCard from "./ui/computer-card";
import getComputers from "@/actions/get-computers";
import { Computer } from "@/types";

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
        filteredItems.sort(() => Math.random() - 0.5);
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
            <p className="font-bold text-3xl mx-auto flex justify-center items-center">{title}</p>
            <p className="text-1xl mx-auto font-semibold flex justify-center items-center">{description}</p>
            {filteredItems.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-3 gap-4">
                {filteredItems.map(item => (
                    <ComputerCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default ComputerList;
