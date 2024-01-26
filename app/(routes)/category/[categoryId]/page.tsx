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

import LoadingNow from "@/components/loading";


export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
    description: 'MODEX is de beste plek om je nieuwe gaming pc te kopen. Wij hebben computers voor elk budget.'
  }



export const revalidate = 0;

const ComputerCard = dynamic(
    () => import("@/components/ui/computer-card"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
    }
);

const Filter = dynamic(
    () => import("./components/filter"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>,
    ssr: false,
    }
);

const MobileFilters = dynamic(
    () => import("./components/mobile-filters"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
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
        <NoResults />
    )
}

export default CategoryPage;
