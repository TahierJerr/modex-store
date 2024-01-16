import getCategory from "@/actions/get-category";
import getComputers from "@/actions/get-computers";
import getGraphics from "@/actions/get-graphics";
import getMemory from "@/actions/get-memory";
import getProcessors from "@/actions/get-processors";
import getStorage from "@/actions/get-storage";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import MobileFilters from "./components/mobile-filters";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ComputerCard from "@/components/ui/computer-card";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX',
  }

export const revalidate = 0;

interface CategoryPageProps {
    params: {
        categoryId: string;

    };
    searchParams: {
        processorId?: string;
        graphicsId?: string;
        memoryId?: string;
        storageId?: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params,
    searchParams
}) => {
    const computers = await getComputers({
        categoryId: params.categoryId,
        processorId: searchParams.processorId,
        graphicsId: searchParams.graphicsId,
        memoryId: searchParams.memoryId,
        storageId: searchParams.storageId,
    });
    

    const processors = await getProcessors();
    const graphics = await getGraphics();
    const memory = await getMemory();
    const storage = await getStorage();
    const category = await getCategory(params.categoryId);

    return (
        <div className="bg-black">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-6 lg:mt-0">
                        <MobileFilters  graphics={graphics} processors={processors} memory={memory} storage={storage} />
                        <div className="hidden lg:block ">
                            <Filter valueKey="graphicsId" name="Grafische kaart" data={graphics} />
                            <Filter valueKey="processorId" name="Processor" data={processors} />
                            <Filter valueKey="memoryId" name="Geheugen" data={memory} />
                            <Filter valueKey="storageId" name="Opslag" data={storage} />
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