import { Graphics } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/graphics`;

const getGraphic = async (id: string): Promise<Graphics> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getGraphic;