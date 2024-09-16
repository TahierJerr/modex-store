import Container from "@/components/ui/container";
import type { Metadata } from 'next'
import Billboard from "@/components/billboard";
import ComputerList from "@/components/computer-list";
import BulletSection from "@/components/bulletsection";
import WhyModex from "@/components/why-modex";
import Reviews from "@/components/reviews";

export const metadata: Metadata = {
    title: 'MODEX | Custom Gaming PCs Built for Performance & Value',
    description: 'MODEX is the best place to buy your new gaming PC. Our pre-built PCs  deliver exceptional performance and reliability. Order your MODEX Gaming PC today!',
    keywords: ['Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Buy Gaming Computer',
        'Buy Gaming PC', 'Order Gaming PC', 'Order Gaming Computer', 'Buy Gaming PC Netherlands',
        'Buy Gaming Computer Netherlands', 'Order Gaming PC Netherlands', 'Order Gaming Computer Netherlands',
        'Budget Gaming PC', 'Budget Gaming Computer', 'Buy Budget Gaming PC', 'Buy Budget Gaming Computer',
        'Order Budget Gaming PC', 'Order Budget Gaming Computer', 'Buy Budget Gaming PC Netherlands',
        'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 'MODEX Gaming Computer', 'Buy MODEX Gaming PC', 'Buy MODEX Gaming Computer',
        'Order MODEX Gaming PC', 'Order MODEX Gaming Computer', 'Buy MODEX Gaming PC Netherlands',
        'Prebuilt Gaming PC', 'High-Performance PC', 'Custom Gaming PC', 'Affordable Gaming PC', 'Best Gaming PC Deals',
        'Gaming Setup', 'Gaming Workstation', 'MODEX Gaming Setup', 'MODEX PC Build', 'Cheap Gaming PC', 'Powerful Gaming PC', '1000 euro gaming pc', '800 euro gaming pc', 'gaming pc nederland', 'gaming pc belgie', 'goedkoop gaming pc', 'game pc',
        'Gaming Rig', 'Esports PC', 'Gaming Enthusiast PC', 'PC for Streaming', 'Prebuilt PC for Gaming', 'Ready-to-Ship Gaming PC', 'modex computer', 'modex computers', '1000 euro pc', 'game pc 1000 euro', 'game pc 800 euro', '800 euro game pc'
    ]
}


const HomePage = () => {

    return (
        <div>
            <Container>
            <Billboard />
            <BulletSection />
            <ComputerList description="Explore our selection of pre-built PCs, each designed to deliver exceptional performance and reliability." title="Our Pre-Built PC Models" sortOrder="desc" maxItems={3} viewAllLink={true} />
            <WhyModex />
            <Reviews />
            </Container>
        </div>
    )
}

export default HomePage;