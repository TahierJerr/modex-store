"use client"

import React, { useState } from 'react';
import getCategory from "@/actions/get-category";
import getComputers from "@/actions/get-computers";
import getGraphics from "@/actions/get-graphics";
import getMemory from "@/actions/get-memory";
import getProcessors from "@/actions/get-processors";

import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";

import dynamic from "next/dynamic";

import LoadingNow from "@/components/loading";



export const revalidate = 0;

const ComputerCard = dynamic(
    () => import("@/components/ui/computer-card"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
});

const Filter = dynamic(
    () => import("./components/filter"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>,
    ssr: false,
});

const MobileFilters = dynamic(
    () => import("./components/mobile-filters"), {
    loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
});

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
    const [selectedFilters, setSelectedFilters] = useState<{
        processorId?: string;
        graphicsId?: string;
        memoryId?: string;
    }>(searchParams);

    const handleFilterChange = (filterKey: string, filterValue: string) => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [filterKey]: filterValue
        }));
    };

    const [computers, processors, graphics, memory, category] = await Promise.all([
        getComputers({
            categoryId: params.categoryId,
            processorId: selectedFilters.processorId,
            graphicsId: selectedFilters.graphicsId,
            memoryId: selectedFilters.memoryId,
        }),
        getProcessors(),
        getGraphics(),
        getMemory(),
        getCategory(params.categoryId)
    ]);

    const isNoResults = computers.length === 0;

    return (
        <div className="bg-black">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-6 lg:mt-0">
                        <MobileFilters
                            graphics={graphics}
                            processors={processors}
                            memory={memory}
                            selectedFilters={selectedFilters}
                            onFilterChange={handleFilterChange}
                            isNoResults={isNoResults}
                        />
                        <div className="hidden lg:block ">
                            <Filter
                                valueKey="graphicsId"
                                name="Grafische kaart"
                                data={graphics}
                                selectedFilter={selectedFilters.graphicsId}
                                onFilterChange={handleFilterChange}
                                isDisabled={isNoResults}
                            />
                            <Filter
                                valueKey="processorId"
                                name="Processor"
                                data={processors}
                                selectedFilter={selectedFilters.processorId}
                                onFilterChange={handleFilterChange}
                                isDisabled={isNoResults}
                            />
                            <Filter
                                valueKey="memoryId"
                                name="Geheugen"
                                data={memory}
                                selectedFilter={selectedFilters.memoryId}
                                onFilterChange={handleFilterChange}
                                isDisabled={isNoResults}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CategoryPage;
