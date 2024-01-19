import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import ComputerList from "@/components/computer-list";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
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