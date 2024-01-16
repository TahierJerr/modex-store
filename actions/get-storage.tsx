import { Storage } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/storage`;

const getStorage = async (): Promise<Storage[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getStorage;