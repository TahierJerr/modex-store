import Faq from "@/components/faq";
import getAnswers from "@/actions/get-answers";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX FAQ | MODEX',
    description: 'Hier vind je de meest gestelde vragen over MODEX.',
    keywords: ['MODEX vragen', 'MODEX FAQ', 'MODEX veelgestelde vragen',]
  }

const FaqPage = async () => {
    const data = await getAnswers();

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 text-white mt-20">
            <Faq data={data}/>
            </div>
    );
}

export default FaqPage;