"use client";

import qs from "query-string";
import { cn } from "@/lib/utils"
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';

import Button from "@/components/ui/button"
import { Processor, Memory, Graphics } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";

interface FilterProps {
    data: (Processor | Memory | Graphics )[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data, 
    name, 
    valueKey 
    }) => {
        const [selectedValue, setSelectedValue] = useState<string | null>(null);
        const searchParams = useSearchParams();
        const router = useRouter();

        const current = qs.parse(searchParams.toString());

        const onClick = (id: string) => {
            if (selectedValue === id) {
                setSelectedValue(null);
            } else {
                setSelectedValue(id);
            }
        };

        useEffect(() => {
            const query = {
                ...current,
                [valueKey]: selectedValue,
            }

            const url = qs.stringifyUrl({
                url: window.location.href,
                query,
            }, { skipNull: true });

            router.push(url, {scroll: false})
        }, [selectedValue]);

    return (
        <div className="mb-8 mt-16">
            <p className="text-lg text-primary font-semibold">
                {name}
            </p>
            <hr className="text-black200 my-4" />
            <div className="flex flex-wrap gap-2">
                {data.map((filter) => (
                    <div key={filter.id} className="flex items-center">
                        <Button className={cn("flex items-center rounded-md text-sm text-white bg-black200 p-2 border-primary border overflow-hidden gap-x-1", selectedValue === filter.id && "bg-primary text-black overflow-hidden")} onClick={() => onClick(filter.id)}>
                            {filter.name}{selectedValue === filter.id && <X className="" size={20} />}
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;
