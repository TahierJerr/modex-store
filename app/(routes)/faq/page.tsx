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
    description: 'Here you will find the most frequently asked questions about MODEX.',
    keywords: ['MODEX questions', 'MODEX FAQ', 'MODEX frequently asked questions'],
};

const FaqPage = async () => {
    const data = await getAnswers();

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 mt-32">
            <h1 className="mb-10 text-2xl sm:text-3xl font-bold">Frequently Asked Questions</h1>
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
                <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
                <p className="text-xl mb-4 font-semibold">Contact us:</p>
                    <p className="mb-2">Email: <a title='email' href="mailto:info@modexgaming.com" className='hover:text-primary transition-colors'>info@modexgaming.com</a></p>
                <p className="mb-2">Phone number: <a title='phone number' href="tel:+31649146060" className='hover:text-primary transition-colors mr-2'>+31649146060</a> (Available only from Mon to Fri, 8:00 AM to 6:00 PM)</p>
            </div>
        </div>
    );
};

export default FaqPage;