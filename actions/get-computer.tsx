import { Computer } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/computers`;

const getComputer = async (id: string): Promise<Computer> => {
    const res = await fetch(`${URL}/${id}`, { cache: "no-store" });

    return res.json();
};

export default getComputer;