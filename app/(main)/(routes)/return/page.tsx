import Container from "@/components/ui/container";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Returns & Refund Policy | MODEX',
    description: 'Learn about MODEX hassle-free return policy. Easily return or exchange gaming PCs and accessories within our clear guidelines to ensure customer satisfaction.',
    keywords: ['MODEX return', 'MODEX returning', 'MODEX Return conditions', 'MODEX Return conditions', 'MODEX Returning', 'MODEX Returning Netherlands', 'MODEX Return Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Returning Netherlands', 'MODEX Returning Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Returning Netherlands', 'MODEX Returning Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Returning Netherlands', 'MODEX Returning Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Returning Netherlands', 'MODEX Returning Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Returning Netherlands', 'MODEX Returning Netherlands', 'MODEX Return conditions Netherlands', 'MODEX Return conditions Netherlands',]
}

const ReturnPage = () => {
    return (
    <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 my-24">
            <h1 className="text-3xl font-bold">Returning</h1>
            <div className="mt-4 max-w-2xl text-lg">
                <p className="mb-4">You have the right to cancel your order within 30 days of receipt without giving any reason. After cancellation, you have an additional 14 days to return the product. The costs for returning the package are at your own expense and responsibility. Please do not return the package unless your request has been accepted.</p>
                <p className="mb-4">If you want to request a return, you can send an email to <a href="mailto:info@modexgaming.com" className="text-primary underline">info@modexgaming.com</a> with your invoice number, name, and address. You cannot request a return for custom-built computers. If your request is accepted, please return the package to Asingastraat 98, 9716ES Groningen, The Netherlands.</p>
            </div>
        </div>
    </Container>
    )
}

export default ReturnPage;  