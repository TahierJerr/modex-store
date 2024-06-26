import { Computer } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/computers`;

interface Query {
    categoryId?: string
    processorId?: string
    graphicsId?: string
    memoryId?: string
    pccaseId?: string
    coolerId?: string
    isFeatured?: boolean
    isArchived?: boolean
}

const getComputers = async (query: Query): Promise<Computer[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            processorId: query.processorId,
            graphicsId: query.graphicsId,
            memoryId: query.memoryId,
            pccaseId: query.pccaseId,
            coolerId: query.coolerId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
            isArchived: query.isArchived,
        },
    });

    const res = await fetch(url, { cache: "no-store" });

    return res.json();
};

export default getComputers;