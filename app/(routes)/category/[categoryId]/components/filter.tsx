"use client";

import qs from "query-string";
import { cn } from "@/lib/utils"
import { X } from 'lucide-react';

import Button from "@/components/ui/button"
import { Processor, Memory, Graphics, Storage } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";

interface FilterProps {
    data: (Processor | Memory | Graphics | Storage)[];
    name: string;
    valueKey: string;
}

const Filter: React.FC<FilterProps> = ({
    data, 
    name, 
    valueKey 
    }) => {
        const searchParams = useSearchParams();
        const router = useRouter();

        const selectedValue = searchParams.get(valueKey);

        const onClick = (id: string) => {

            const current = qs.parse(searchParams.toString());

            const query = {
                ...current,
                [valueKey]: id,
            }

            if (current[valueKey] === id) {
                query[valueKey] = null;
            }

            const url = qs.stringifyUrl({
                url: window.location.href,
                query,
            }, { skipNull: true });

            router.push(url, {scroll: false})
        }
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