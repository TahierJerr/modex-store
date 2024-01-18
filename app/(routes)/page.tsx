import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import getComputers from "@/actions/get-computers";
import type { Metadata } from 'next'
import dynamic from "next/dynamic";
import Billboard from "@/components/billboard";

export const revalidate = 0;

export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
    description: 'MODEX is de beste plek om je nieuwe gaming pc te kopen. Wij hebben computers voor elk budget.'
}

const ComputerList = dynamic(
    () => import("@/components/computer-list"), {
    loading: () => <div className="flex justify-center items-center"><p className="text-white font-semibold">Aan het laden...</p></div>
    }
);


const HomePage = async () => {
    const [computers, billboard] = await Promise.all([
        getComputers({ isFeatured: true }),
        getBillboard("5854fd05-b077-4185-b72e-16539570c641")
    ]);

    return (
        <div className="space-y-10 pb-10">
            <Container>
                <Billboard data={billboard} />
                <div className="flex flex-col gap-2 px-4 sm:px-6 lg:px-8">
                    <ComputerList description="Check onze MODEX Pre-Builds" title="MODEX PCs" items={computers} />
                </div>
            </Container>
        </div>
    )
}

export default HomePage;