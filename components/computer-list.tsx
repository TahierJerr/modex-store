import NoResults from "@/components/ui/no-results";
import ComputerCard from "./ui/computer-card";
import getComputers from "@/actions/get-computers";
import { Computer } from "@/types";
import Link from "next/link";
import Container from "./ui/container";

interface ComputerListProps {
    title: string;
    description: string;
    id?: string;
    sortOrder?: 'asc' | 'desc' | 'random';
    maxItems?: number;
    viewAllLink?: boolean;
}

const ComputerList: React.FC<ComputerListProps> = async ({
    title,
    description,
    id,
    sortOrder = 'asc',
    maxItems,
    viewAllLink,
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <Container>
            <div className="mb-8 flex items-center justify-center flex-col gap-4">
                <p className="rounded-lg bg-white px-4 mb-1">MODEX PCs</p>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">{title}</h2>
                <p className="max-w-[900px] text-muted-foreground text-center px-4 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">{description}</p>
            </div>
            {filteredItems.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-3 gap-4 ">
                {filteredItems.map(item => (
                    <ComputerCard key={item.id} data={item} />
                ))}
            </div>
            {viewAllLink && (
                <div className="flex items-center justify-center mt-4">
                <Link
                href="/gaming-pcs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                >
                View All Gaming PCs
            </Link>
            </div>
            )}
            </Container>
        </section>
    );
};

export default ComputerList;
