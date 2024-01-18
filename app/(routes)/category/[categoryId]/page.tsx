import getCategory from "@/actions/get-category";
import getComputers from "@/actions/get-computers";
import getGraphics from "@/actions/get-graphics";
import getMemory from "@/actions/get-memory";
import getProcessors from "@/actions/get-processors";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import NoResults from "@/components/ui/no-results";
import dynamic from "next/dynamic";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
  }



export const revalidate = 0;

const ComputerCard = dynamic(
    () => import("@/components/ui/computer-card"), {
    loading: () => <div className="flex justify-center items-center"><p className="text-white font-semibold">Aan het laden...</p></div>
    }
);

const Filter = dynamic(
    () => import("./components/filter"), {
    loading: () => <div className="flex justify-center items-center"><p className="text-white font-semibold">Aan het laden...</p></div>,
    ssr: false,
    }
);

const MobileFilters = dynamic(
    () => import("./components/mobile-filters"), {
    loading: () => <div className="flex justify-center items-center"><p className="text-white font-semibold">Aan het laden...</p></div>
    }
);

interface CategoryPageProps {
    params: {
        categoryId: string;

    };
    searchParams: {
        processorId?: string;
        graphicsId?: string;
        memoryId?: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const [computers, processors, graphics, memory, category] = await Promise.all([
        getComputers({
            categoryId: params.categoryId,
            processorId: searchParams.processorId,
            graphicsId: searchParams.graphicsId,
            memoryId: searchParams.memoryId,
        }),
        getProcessors(),
        getGraphics(),
        getMemory(),
        getCategory(params.categoryId)
    ]);

    return (
        <div className="bg-black">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 mb-24">
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
