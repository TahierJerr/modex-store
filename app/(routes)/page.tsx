import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import type { Metadata } from 'next'
import Billboard from "@/components/billboard";
import ComputerList from "@/components/computer-list";
import getComputers from "@/actions/get-computers";
import BulletSection from "@/components/bulletsection";
import KlarnaSection from "@/components/klarna-section";

export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
    description: 'MODEX is de beste plek om je nieuwe gaming pc te kopen. Wij hebben computers voor elk budget.',
    keywords: ['Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Gaming Computer Kopen',
        'Gaming PC Kopen', 'Gaming PC Bestellen', 'Gaming Computer Bestellen', 'Gaming PC Kopen Nederland',
        'Gaming Computer Kopen Nederland', 'Gaming PC Bestellen Nederland', 'Gaming Computer Bestellen Nederland',
        'Budget Gaming PC', 'Budget Gaming Computer', 'Budget Gaming PC Kopen', 'Budget Gaming Computer Kopen',
        'Budget Gaming PC Bestellen', 'Budget Gaming Computer Bestellen', 'Budget Gaming PC Kopen Nederland',
        'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 'MODEX Gaming Computer', 'MODEX Gaming PC Kopen', 'MODEX Gaming Computer Kopen',
        'MODEX Gaming PC Bestellen', 'MODEX Gaming Computer Bestellen', 'MODEX Gaming PC Kopen Nederland',
    ]
}

const HomePage = async () => {
    
    const billboard = await getBillboard("5854fd05-b077-4185-b72e-16539570c641");
    const computers = await getComputers({ isFeatured: true });


    return (
        <div className="space-y-10 pb-10">
            <Container>
                <Billboard data={billboard} buttonLink="/gaming-pcs" buttonText="Check onze gaming pcs"/>
                <div className="flex flex-col gap-2 px-4 sm:px-6 lg:px-8">
                    <BulletSection />
                    <KlarnaSection />
                    <ComputerList description="Check onze MODEX Pre-Builds" title="MODEX PCs" items={computers} sortOrder="random" maxItems={3}/>
                </div>
            </Container>
        </div>
    )
}

export default HomePage;