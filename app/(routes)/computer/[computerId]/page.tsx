import getComputer from "@/actions/get-computer";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import ComputerInfo from "@/components/computer-info";
import type { Metadata } from 'next'
import dynamic from "next/dynamic";
import LoadingNow from "@/components/loading";


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
        <div className="bg-black text-white mt-16 md:mt-0">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={computer.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <ComputerInfo data={computer} />
                        </div>
                    </div>
                    <hr className="my-10 text-black200" />
                    <ComputerSpec data={computer} />
                    <hr className="my-10 text-black200" />
                    <ComputerList title="Andere Computers" description="Check onze andere pre-builds" id={params.computerId} />
                </div>
            </Container>
        </div>
    )
}

export default ComputerPage;