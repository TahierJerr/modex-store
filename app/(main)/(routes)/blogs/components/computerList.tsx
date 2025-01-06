import { Computer } from "@/types";
import ComputerItem from "./computerItem";

interface ComputerListProps {
    computers: Computer[];
}

const ComputerList: React.FC<ComputerListProps> = ({ computers }) => {
    return (
        <div className="grid sm:grid-row-3 sm:grid-cols-1 grid-cols-3 gap-8">
            {computers.map((computer) => (
                <ComputerItem key={computer.id} computer={computer} />
            ))}
        </div>
    );
};

export default ComputerList;