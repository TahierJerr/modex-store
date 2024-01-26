import { Answers } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/answer`;

const getAnswers = async (id?: string): Promise<Answers[]> => {
    const url = id ? `${URL}/${id}` : URL;
    const res = await fetch(url, { cache: "no-store" });
    return res.json();
};


export default getAnswers;