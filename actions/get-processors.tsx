import { Processor } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/processors`;

const getProcessors = async (): Promise<Processor[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getProcessors;