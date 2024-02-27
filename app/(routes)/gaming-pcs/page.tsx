import getCategory from "@/actions/get-category";
import getComputers from "@/actions/get-computers";
import getGraphics from "@/actions/get-graphics";
import getMemory from "@/actions/get-memory";
import getProcessors from "@/actions/get-processors";

import Container from "@/components/ui/container";

import NoResults from "@/components/ui/no-results";
import dynamic from "next/dynamic";
import type { Metadata } from 'next'

import LoadingNow from "@/components/loading";
import LoadingCard from "@/components/loading-components/loading-card";


export const metadata: Metadata = {
    title: 'Gaming PCs | MODEX',
    description: 'MODEX is de beste plek om je nieuwe gaming pc te kopen. Wij hebben computers voor elk budget.',
    keywords: ['Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Gaming Computer Kopen',
        'Gaming PC Kopen', 'Gaming PC Bestellen', 'Gaming Computer Bestellen', 'Gaming PC Kopen Nederland',
        'Gaming Computer Kopen Nederland', 'Gaming PC Bestellen Nederland', 'Gaming Computer Bestellen Nederland',
        'Budget Gaming PC', 'Budget Gaming Computer', 'Budget Gaming PC Kopen', 'Budget Gaming Computer Kopen',
        'Budget Gaming PC Bestellen', 'Budget Gaming Computer Bestellen', 'Budget Gaming PC Kopen Nederland',
        'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 'MODEX Gaming Computer', 'MODEX Gaming PC Kopen', 'MODEX Gaming Computer Kopen',
        'MODEX Gaming PC Bestellen', 'MODEX Gaming Computer Bestellen', 'MODEX Gaming PC Kopen Nederland',
    ]
  }

export const revalidate = 0;

const ComputerCard = dynamic(
    () => import("@/components/ui/computer-card"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
    }
);

const Filter = dynamic(
    () => import("./components/filter"), {
    loading: () => <LoadingNow />,
    ssr: false,
    }
);

const MobileFilters = dynamic(
    () => import("./components/mobile-filters"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
    }
);

interface CategoryPageProps {
    searchParams: {
        processorId?: string;
        graphicsId?: string;
        memoryId?: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    searchParams
}) => {
    const categoryId = "ac6c2c0a-1a72-49f3-85eb-e5be863186de";

    const [computers, processors, graphics, memory, category] = await Promise.all([
        getComputers({
            categoryId: categoryId,
            processorId: searchParams.processorId,
            graphicsId: searchParams.graphicsId,
            memoryId: searchParams.memoryId,
        }),
        getProcessors(),
        getGraphics(),
        getMemory(),
        getCategory(categoryId)
    ]);

    return (
        <div className="bg-black">
            <Container>
                <div className="px-4 sm:px-6 lg:px-8 mb-8 mt-6">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-6 lg:mt-0">
                        <MobileFilters  graphics={graphics} processors={processors} memory={memory} />
                        <div className="hidden lg:block ">
                            <Filter valueKey="graphicsId" name="Grafische kaart" data={graphics} />
                            <Filter valueKey="processorId" name="Processor" data={processors} />
                            <Filter valueKey="memoryId" name="Geheugen" data={memory} />
                        </div>
                        <div className="mt-6 lg:col-span-4">
                            {computers.length === 0 && <NoResults />}
                            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 text-white gap-2">
                                {computers.map((item) => (
                                    <ComputerCard key={item.id} data={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;
