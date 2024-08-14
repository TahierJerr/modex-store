import Container from "@/components/ui/container";
import type { Metadata } from 'next'
import ComputerList from "@/components/computer-list";
import GamingPcHero from "./components/gamingpchero";



export const metadata: Metadata = {
    title: 'Gaming PCs | MODEX',
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

export const revalidate = 0;

const CategoryPage =  () => {

    return (
            <Container>
                <GamingPcHero />
                <ComputerList description="Explore our selection of pre-built PCs, each designed to deliver exceptional performance and reliability." title="Our Pre-Built PC Models" sortOrder="desc" maxItems={6} />
            </Container>
    )
}

export default CategoryPage;
