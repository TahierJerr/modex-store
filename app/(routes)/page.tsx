import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import type { Metadata } from 'next'
import Billboard from "@/components/billboard";
import ComputerList from "@/components/computer-list";

export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
    description: 'MODEX is de beste plek om je nieuwe gaming pc te kopen. Wij hebben computers voor elk budget.'
}

const HomePage = async () => {
    const billboard = await getBillboard("5854fd05-b077-4185-b72e-16539570c641");

    return (
        <div className="space-y-10 pb-10">
            <Container>
                <Billboard data={billboard} />
                <div className="flex flex-col gap-2 px-4 sm:px-6 lg:px-8">
                    <ComputerList description="Check onze MODEX Pre-Builds" title="MODEX PCs" />
                </div>
            </Container>
        </div>
    )
}

export default HomePage;