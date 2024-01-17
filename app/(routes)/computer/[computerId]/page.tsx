import getComputer from "@/actions/get-computer";
import getComputers from "@/actions/get-computers";
import Container from "@/components/ui/container";
import ComputerList from "@/components/computer-list";
import Gallery from "@/components/gallery";
import ComputerInfo from "@/components/computer-info";
import ComputerSpec from "@/components/computer-spec";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
}

interface ComputerPageProps {
    params: {
        computerId: string;
    }
}

const ComputerPage: React.FC<ComputerPageProps> = async ({ params }) => {
    const computer = await getComputer(params.computerId);
    const otherComputers = await getComputers({
        categoryId: computer?.category?.id
    });

    const filteredComputers = otherComputers.filter(
        (item) => item.id !== computer.id
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
                    <ComputerList title="Andere Computers" description="Check onze andere pre-builds" items={filteredComputers} />
                </div>
            </Container>
        </div>
    )
}

export default ComputerPage;