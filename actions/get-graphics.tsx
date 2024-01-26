import { Graphics } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/graphics`;

const getGraphics = async (): Promise<Graphics[]> => {
    const res = await fetch(URL, { cache: "no-store" });

    return res.json();
};

export default getGraphics;