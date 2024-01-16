import { Computer } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/computers`;

interface Query {
    categoryId?: string
    processorId?: string
    graphicsId?: string
    memoryId?: string
    softwareId?: string
    storageId?: string
    powerId?: string
    pccaseId?: string
    coolerId?: string
    motherboardId?: string
    warrantyId?: string
    colorId?: string
    isFeatured?: boolean
}

const getComputers = async (query: Query): Promise<Computer[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            processorId: query.processorId,
            graphicsId: query.graphicsId,
            memoryId: query.memoryId,
            softwareId: query.softwareId,
            storageId: query.storageId,
            powerId: query.powerId,
            pccaseId: query.pccaseId,
            coolerId: query.coolerId,
            colorId: query.colorId,
            motherboardId: query.motherboardId,
            warrantyId: query.warrantyId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await fetch(url);

    return res.json();
};

export default getComputers;