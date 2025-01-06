import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, HardDrive, MemoryStickIcon as Memory, CpuIcon as Gpu } from 'lucide-react';
import Currency from "@/components/ui/currency";

import { Computer } from "@/types";
import Link from "next/link";

interface ComputerCardProps {
    computer: Computer;
}

const ComputerItem: React.FC<ComputerCardProps> = ({ computer }) => {
    return (
        <Link href={`/gaming-pcs/${computer.id}`}>
    <Card className="w-64 overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-64 w-full">
            <Image
            src={computer.images[0].url}
            alt={computer.name}
            layout="fill"
            objectFit="cover"
            />
            {computer.isFeatured && (
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    Featured
                </Badge>
                )}
            </div>
            <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-1">{computer.name}</h3>
                <p className="text-primary font-bold mb-2">
                    <Currency value={computer.price} />
                </p>
                <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                        <Cpu className="w-4 h-4" />
                        <span className="truncate">{computer.processor.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Gpu className="w-4 h-4" />
                        <span className="truncate">{computer.graphics.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Memory className="w-4 h-4" />
                        <span>{computer.memory.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <HardDrive className="w-4 h-4" />
                        <span>{computer.storage.capacity}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
        </Link>
        );
    }
    
    export default ComputerItem;