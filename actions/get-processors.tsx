import { Processor } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/processors`;

const getProcessors = async (): Promise<Processor[]> => {
    const res = await fetch(URL, { cache: "no-store" });

    return res.json();
};

export default getProcessors;