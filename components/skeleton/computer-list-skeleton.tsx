import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import ComputerCardSkeleton from "./computer-card-skeleton"
import Container from "../ui/container"

export default function SkeletonComputerList() {
    return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <Container>
        <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-center flex-col gap-4">
                <Skeleton className="h-8 w-32 rounded-lg" />
                <Skeleton className="h-12 w-3/4 sm:w-1/2 max-w-[600px]" />
                <Skeleton className="h-16 w-full sm:w-3/4 max-w-[900px]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                    <ComputerCardSkeleton key={index} />
                    ))}
                </div>
                <div className="flex items-center justify-center mt-8">
                    <Button disabled className="h-10 px-8">
                        View All Gaming PCs
                    </Button>
                </div>
            </div>
            </Container>
        </section>
        )
    }