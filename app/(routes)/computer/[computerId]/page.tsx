import getComputer from "@/actions/get-computer";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import ComputerInfo from "@/components/computer-info";
import type { Metadata } from 'next'
import dynamic from "next/dynamic";
import LoadingNow from "@/components/loading";
import NoResults from "@/components/ui/no-results";


export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
    description: 'MODEX is de beste plek om je nieuwe gaming pc te kopen. Wij hebben computers voor elk budget.'
}

interface ComputerPageProps {
    params: {
        computerId: string;
    }
}



const ComputerPage: React.FC<ComputerPageProps> = async ({ params }) => {
    const computer = await getComputer(params.computerId);

    const ComputerSpec = dynamic(
        () => import("@/components/computer-spec"), {
        loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
        }
    );

    const ComputerList = dynamic(
        () => import("@/components/computer-list"), {
        loading: () => <div className="flex justify-center items-center my-4"><LoadingNow /></div>
        }
    );

    return (
        <NoResults />
    )
}

export default ComputerPage;