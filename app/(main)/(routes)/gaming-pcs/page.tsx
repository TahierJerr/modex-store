import type { Metadata } from 'next'
import ComputerList from "@/components/computer-list";
import Loader from '@/components/ui/loading';
import { Suspense } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

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

const data = [
{
    question: "What are prebuilt gaming PCs?",
    answers: "Prebuilt gaming PCs are computers that come fully assembled and ready to use. They are designed specifically for gaming, featuring optimized hardware components to ensure smooth performance."
},
{
    question: "Can I customize a prebuilt gaming PC from MODEX?",
    answers: "Currently, we do not offer custom PCs. However, we are actively working on providing customization options for our customers in the near future."
},
{
    question: "What is the warranty period for MODEX gaming PCs?",
    answers: "All MODEX gaming PCs come with a minimum 3-year warranty. If you encounter issues after this period, please contact us, and we will assist you in resolving any problems."
},
{
    question: "Do MODEX gaming PCs come with an operating system?",
    answers: "Yes, all our gaming PCs come standard with Windows 11 Home pre-installed, ensuring compatibility with a wide range of games and applications."
},
{
    question: "What performance can I expect from MODEX gaming PCs?",
    answers: "MODEX gaming PCs are built to deliver high-performance gaming experiences. Depending on the model, you can expect frame rates exceeding 60 FPS in most modern games at 1080p and even higher resolutions."
},
{
    question: "Are MODEX gaming PCs suitable for streaming?",
    answers: "Absolutely! Our gaming PCs are equipped with powerful CPUs and GPUs that can handle gaming and streaming simultaneously, making them ideal for content creators."
},
{
    question: "What should I do if my gaming PC encounters issues?",
    answers: "If you experience any problems with your gaming PC, please contact our customer support at info@modexgaming.com. We are here to help you troubleshoot and resolve any issues."
},
{
    question: "How can I keep my gaming PC in good condition?",
    answers: "Regular maintenance, such as cleaning dust from fans and ensuring good airflow, can help keep your gaming PC running smoothly. We also recommend updating your drivers and software regularly."
}
];


const GamingPCsPage =  () => {
    return (
    <div>
        <h1 className="text-4xl font-bold mb-8 text-center">
            Prebuilt Gaming PCs
        </h1>
        <Suspense fallback={<Loader />}>
        <ComputerList description="Explore our selection of pre-built PCs, each designed to deliver exceptional performance and reliability." title="Our Pre-Built PC Models" sortOrder="asc" />
    </Suspense>
    <div className="p-6 my-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-6">Here you will find the most frequently asked questions about MODEX.</p>
        <Accordion type="single" collapsible className="w-full">
            {data.map((item, index) => (
                <AccordionItem key={index} className="mb-4" value={index.toString()}>
                    <AccordionTrigger className="p-4 font-semibold text-xl hover:bg-gray-100 rounded-lg transition duration-200">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="p-4 text-lg bg-white">
                        {item.answers}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
        </div>
    </div>
    )
}

export default GamingPCsPage;
