"use client";

import { cn } from "@/lib/utils"
import { X } from 'lucide-react';
import { useCallback } from 'react';

import Button from "@/components/ui/button"
import { Processor, Memory, Graphics } from "@/types";

interface FilterProps {
    data: (Processor | Memory | Graphics )[];
    name: string;
    valueKey: string;
    selectedFilter: string | undefined;
    onFilterChange: (filterKey: string, filterValue: string) => void;
    isDisabled: boolean;
}


const Filter: React.FC<FilterProps> = ({
    data, 
    name, 
    valueKey,
    selectedFilter,
    onFilterChange,
    isDisabled
}) => {
    const onClick = useCallback((id: string) => {
        onFilterChange(valueKey, id);
    }, [valueKey, onFilterChange]);

    return (
        <div className="mb-8 mt-16">
            <p className="text-lg text-primary font-semibold">
                {name}
            </p>
            <hr className="text-black200 my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button 
                            className={cn("flex items-center rounded-md text-sm text-white bg-black200 p-2 border-primary border overflow-hidden gap-x-1", selectedFilter === filter.id && "bg-primary text-black overflow-hidden")} 
                            onClick={() => onClick(filter.id)}
                            disabled={isDisabled}
                        >
                            {filter.name}{selectedFilter === filter.id && <X className="" size={20} />}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;
