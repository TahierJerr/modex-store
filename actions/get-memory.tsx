import { Memory } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/memory`;

const getMemory = async (): Promise<Memory[]> => {
    const res = await fetch(URL, { cache: "no-store" });

    return res.json();
};

export default getMemory;