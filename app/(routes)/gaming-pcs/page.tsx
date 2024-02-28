import Container from "@/components/ui/container";

import type { Metadata } from 'next'
import { Suspense } from "react";
import LoadingProductList from "@/components/loading-components/loading-computer-list";
import ComputerList from "@/components/computer-list";



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
        <div className="bg-black mt-32 mb-12 mx-4">
            <Container>
                <Suspense fallback={<LoadingProductList description="Check onze MODEX Pre-Builds" title="MODEX PCs" loadingCards={6} />}>
                        <ComputerList description="Check onze MODEX Pre-Builds" title="MODEX PCs" sortOrder="desc" maxItems={6} />
                    </Suspense>
            </Container>
        </div>
    )
}

export default CategoryPage;
