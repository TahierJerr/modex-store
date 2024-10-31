import type { Metadata } from 'next'
import Billboard from "@/components/billboard";
import ComputerList from "@/components/computer-list";
import BulletSection from "@/components/bulletsection";
import WhyModex from "@/components/why-modex";
import BuiltByComponent from "@/components/builtby";
import { Suspense } from "react";
import Loader from "@/components/ui/loading";

export const metadata: Metadata = {
    title: 'MODEX | Pre-built Gaming PCs Built for Performance & Value',
    description: 'MODEX is the best place to buy your new gaming PC. Our pre-built PCs deliver exceptional performance and reliability. Order your MODEX Gaming PC today!',
        keywords: [
            'Computer', 'Gaming PC', 'PC', 'Gaming', 'Gaming Computer', 'Buy Gaming Computer', 'Gaming Laptop', 'Game Laptop', 
            'Buy Gaming PC', 'Order Gaming PC', 'Order Gaming Computer', 'Buy Gaming PC Netherlands', 'Acheter PC Gaming', 'Commander PC Gaming', 
            'Acheter PC Gamer', 'Commander PC Gamer', 'Acheter PC Gaming Belgique', 'PC Gamer France', 'PC Gamer Belgique', 
            'Acheter PC Gamer Belgique', 'Commander PC Gamer Belgique', 'Gaming PC France', 'Gaming PC Belgium', 
            'Buy Gaming Computer Netherlands', 'Order Gaming PC Netherlands', 'Order Gaming Computer Netherlands', 'Netherlands Gaming PC', 
            'PC Gamer Pas Cher', 'Budget Gaming PC', 'Budget Gaming Computer', 'Buy Budget Gaming PC', 'Buy Budget Gaming Computer', 
            'Order Budget Gaming PC', 'Order Budget Gaming Computer', 'Acheter PC Gaming Pas Cher', 'Commander PC Gaming Pas Cher', 
            'Buy Budget Gaming PC Netherlands', 'PC Gaming Economique', 'PC Gaming Prix', 'MODEX', 'MODEX Gaming', 'MODEX Gaming PC', 
            'MODEX Gaming Computer', 'Acheter MODEX Gaming PC', 'Acheter MODEX Gaming Computer', 'Commander MODEX Gaming PC', 
            'Commander MODEX Gaming Computer', 'Buy MODEX Gaming PC Netherlands', 'Prebuilt Gaming PC', 'PC Gaming Préconstruit', 
            'PC Gamer Préassemblé', 'High-Performance PC', 'Custom Gaming PC', 'Affordable Gaming PC', 'Best Gaming PC Deals', 
            'Meilleur PC Gaming', 'Gaming Setup', 'Gaming Workstation', 'MODEX Gaming Setup', 'MODEX PC Build', 'Cheap Gaming PC', 
            'Powerful Gaming PC', '1000 euro gaming pc', '1300 euro gaming pc', '1600 euro gaming pc', '1900 euro gaming pc', 
            '2200 euro gaming pc', 'gaming pc nederland', 'gaming pc belgie', 'goedkoop gaming pc', 'game pc', 
            'Gaming Rig', 'Esports PC', 'Gaming Enthusiast PC', 'PC for Streaming', 'Prebuilt PC for Gaming', 
            'Ready-to-Ship Gaming PC', 'modex computer', 'modex computers', '1000 euro pc', 'game pc 1000 euro', 
            'game pc 1300 euro', 'game pc 1600 euro', 'game pc 1900 euro', 'game pc 2200 euro', '800 euro game pc', 
            'PC Gamer Puissant', 'PC Gaming Fiable', 'Acheter PC de Jeu', 'Commander PC de Jeu', 'PC Gamer France', 
            'PC Gamer Belgique', 'PC Gaming Fiabilité', 'Computer kopen', 'PC Kopen', 'Gaming Computer Kopen', 
            'Bestellen Gaming PC', 'Bestellen Gaming Computer', 'Goedkoop PC Gaming', 'Betrouwbare Gaming PC', 
            'High-Performance Gaming Computer', 'PC de jeu performant', 'PC gaming bon marché', 'Custom PC gaming', 
            'PC gaming abordable', 'Montage PC gaming', 'Bouwen Gaming PC', 'Acheter ordinateur gaming', 'Krachtige Gaming PC', 
            'PC Gaming Puissant et Abordable', 'PC Gamer sur Mesure', 'PC Gaming sur Mesure', 'Ordinateur de Jeu', 
            'Acheter Ordinateur de Jeu', 'Bestellen Gaming Laptop', 'Budget PC Gaming', 'Gamer Laptop', 'Esports Computer', 
            'PC pour Esports', 'PC de Streaming', 'Montage de PC Gamer', 'Config PC Gaming', 'Configuratie Gaming PC', 
            'Bouwen Computer', 'Computer Samenstellen', 'PC de Jeu Configurateur', 'PC gamer à prix abordable', 
            'Meilleur ordinateur gaming', 'Top PC gaming', 'Livraison PC Gamer', 'Gaming Computer France', 
            'Gaming Computer België', 'Commander PC Gamer France', 'Commander PC Gamer Pas Cher', 'Acheter PC Gamer Pas Cher France', 
            'Bestellen Goedkope Gaming PC', 'Aankoop Gaming Computer', 'Ordinateur Gamer Belgique', 'Configurateur PC Gaming Belgique', 
            'PC gaming sur mesure Belgique', 'Game PC Samenstellen Nederland', 'PC Gaming à Prix Réduit', 
            'PC Gamer Belgique Fiable', 'Commander Gaming Setup', 'PC pour Gaming Setup', 'Livraison Rapide PC Gaming', 
            'Gaming Computer Kopen België', 'Acheter un PC Gamer France', 'Config PC Gamer France', 'Montage sur mesure PC', 
            'Commander Gaming Computer France', 'Goedkoop Gaming Laptop Kopen', 'Krachtige Gaming Setup', 
            'Esports Gaming PC', 'Ordinateur Préconfiguré Gaming', 'PC sur mesure Belgique', 'PC Gamer Nederland', 
            'Gaming Computer Nederland', 'Acheter Gaming Setup', 'Livraison Ordinateur de Jeu', 
            'Ordinateur gaming puissant', 'PC Gamer Portable', 'Portable Gaming Laptop', 'Commander un Gaming Setup',
            'PC Gaming 1000 euros', 'PC Gaming 1300 euros', 'PC Gaming 1600 euros', 'PC Gaming 1900 euros', 
            'PC Gaming 2200 euros', 'Gaming Computer 1000 euros', 'Gaming Computer 1300 euros', 
            'Gaming Computer 1600 euros', 'Gaming Computer 1900 euros', 'Gaming Computer 2200 euros',
            '600 euro gaming pc', 'gaming pc 600 euro', 'gaming pc deutschland', 'gaming pc germany', 'best price to performance ratio'
        ]
    }


const HomePage = () => {

    return (
        <div>
            <Billboard />
            <BuiltByComponent />
            <BulletSection />
            <Suspense fallback={<Loader />}>
                <ComputerList description="Explore our selection of pre-built PCs, each designed to deliver exceptional performance and reliability." title="Our Pre-Built PC Models" sortOrder="desc" maxItems={6} />
            </Suspense>
            <WhyModex />
        </div>
    )
}

export default HomePage;