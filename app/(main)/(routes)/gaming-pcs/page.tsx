import type { Metadata } from 'next'
import ComputerList from "@/components/computer-list";
import GamingPcHero from "./components/gaming-pc-hero";
import Loader from '@/components/ui/loading';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'MODEX Prebuilt Gaming PCs | MODEX',
    description: 'MODEX is the best place to buy your new gaming PC. We offer computers for every budget.',
    keywords: ['Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Buy Gaming Computer',
    'Buy Gaming PC', 'Order Gaming PC', 'Order Gaming Computer', 'Buy Gaming PC Netherlands',
    'Buy Gaming Computer Netherlands', 'Order Gaming PC Netherlands', 'Order Gaming Computer Netherlands',
    'Budget Gaming PC', 'Budget Gaming Computer', 'Buy Budget Gaming PC', 'Buy Budget Gaming Computer',
    'Order Budget Gaming PC', 'Order Budget Gaming Computer', 'Buy Budget Gaming PC Netherlands',
    'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 'MODEX Gaming Computer', 'Buy MODEX Gaming PC', 'Buy MODEX Gaming Computer',
    'Order MODEX Gaming PC', 'Order MODEX Gaming Computer', 'Buy MODEX Gaming PC Netherlands',
    'Prebuilt Gaming PC', 'High-Performance PC', 'Custom Gaming PC', 'Affordable Gaming PC', 'Best Gaming PC Deals',
    'Gaming Setup', 'Gaming Workstation', 'MODEX Gaming Setup', 'MODEX PC Build', 'Cheap Gaming PC', 'Powerful Gaming PC',
    'Gaming Rig', 'Esports PC', 'Gaming Enthusiast PC', 'PC for Streaming', 'Prebuilt PC for Gaming', 'Ready-to-Ship Gaming PC'
    ]
}


const CategoryPage =  () => {
    
    return (
    <>
        <GamingPcHero />
        <Suspense fallback={<Loader />}>
            <ComputerList description="Explore our selection of pre-built PCs, each designed to deliver exceptional performance and reliability." title="Our Pre-Built PC Models" sortOrder="asc" />
        </Suspense>
    </>
    )
}

export default CategoryPage;
