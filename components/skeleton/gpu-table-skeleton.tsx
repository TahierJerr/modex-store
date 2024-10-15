import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const GPUTableSkeleton = () => {
    return (
    <section className="my-12 gap-4 flex flex-col">
        <div className="flex flex-col md:flex-row gap-4">
            <Input
            placeholder="Search GPUs by name..."
            className="w-full md:w-1/2"
            disabled
            />
            <Select disabled>
                <SelectTrigger className="w-full md:w-1/6">
                    <SelectValue placeholder="Resolutions" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1080p,1440p,4k">All Resolutions</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="1440p">1440p</SelectItem>
                    <SelectItem value="4k">4K</SelectItem>
                </SelectContent>
            </Select>
            <Input
            type="number"
            placeholder="Min Price"
            className="w-full md:w-1/6"
            disabled
            />
            <Input
            type="number"
            placeholder="Max Price"
            className="w-full md:w-1/6"
            disabled
            />
        </div>
        <div className="flex flex-wrap gap-4">
            <Label className="flex items-center space-x-2">
                <Checkbox disabled />
                <span>NVIDIA</span>
            </Label>
            <Label className="flex items-center space-x-2">
                <Checkbox disabled />
                <span>AMD</span>
            </Label>
            <Label className="flex items-center space-x-2">
                <Checkbox disabled />
                <span>Intel</span>
            </Label>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[30%]">Name</TableHead>
                    <TableHead className="w-[10%]">Score</TableHead>
                    <TableHead className="w-[10%]">Price (€)</TableHead>
                    <TableHead className="w-[10%]">Price/Perf</TableHead>
                    <TableHead className="w-[10%]">VRAM</TableHead>
                    <TableHead className="w-[15%]">Store</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[...Array(5)].map((_, index) => (
                    <TableRow key={index}>
                        <TableCell><Skeleton className="h-6 w-full" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-12" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                        <TableCell><Skeleton className="h-10 w-24" /></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </section>
        )
    }

export default GPUTableSkeleton