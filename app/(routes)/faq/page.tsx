import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import getAnswers from "@/actions/get-answers";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MODEX FAQ | MODEX',
    description: 'Hier vind je de meest gestelde vragen over MODEX.',
    keywords: ['MODEX vragen', 'MODEX FAQ', 'MODEX veelgestelde vragen'],
};

const FaqPage = async () => {
    const data = await getAnswers();

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 mt-32">
            <h1 className="mb-10 text-2xl sm:text-3xl font-bold">Veelgestelde vragen</h1>
            <Accordion type="single" collapsible className="w-full">
                {data.map((item, index) => (
                    <AccordionItem key={index} className="mb-4 border-b-primary20" value={index.toString()}>
                        <AccordionTrigger className="p-4 font-semibold text-xl">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-4 text-lg">
                            {item.answers}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            <div className="mt-16 bg-black200 px-4 py-4 rounded-lg ">
                <h2 className="text-2xl font-bold mb-4">Kan je niet vinden wat je zoekt?</h2>
                <p className="text-xl mb-4 font-semibold">Neem contact met ons op:</p>
                    <p className="mb-2">Email: <a title='email' href="mailto:info@modex-pc.nl" className='hover:text-primary transition-colors'>info@modex-pc.nl</a></p>
                <p className="mb-2">Telefoonnummer: <a title='phone number' href="tel:+31649146060" className='hover:text-primary transition-colors mr-2'>+31649146060</a> (Alleen beschikbaar op ma t/m vr 8:00 tot 18:00)</p>
            </div>
        </div>
    );
};

export default FaqPage;