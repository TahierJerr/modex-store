import { Computer } from "@/types"
import NoResults from "@/components/ui/no-results";
import ComputerCard from "./ui/computer-card";
import getComputers from "@/actions/get-computers";

interface ComputerListProps {
    title: string;
    description: string;
};




const ComputerList: React.FC<ComputerListProps> = async ({
    title,
    description,
}) => {
    const items = await getComputers({ isFeatured: true });
    
    return (
        <div className="space-y-4">
            <h1 className="text-white font-bold text-3xl mx-auto">{title}</h1>
            <p className=" text-gray text-1xl mx-auto font-semibold ">{description}</p>
            {items.length === 0 && <NoResults />}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-4 text-white">
                {items.map(item => (
                    <ComputerCard key={item.id} data={item} />
                ))}
            </div>
        </div>
    )
}

export default ComputerList;