import React from 'react'
import CartPage from './pagej'
import { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Container from '@/components/ui/container'

export const metadata: Metadata = {
    title: 'Your Shopping Cart | MODEX',
    description: 'Checkout your items in the cart and proceed to payment.',
    keywords: 'cart, winkelwagen, panier, Warenkorb, checkout, afrekenen, caisse, zur Kasse gehen, payment, betaling, paiement, Zahlung, gaming pc, gaming computer, gaming laptop, gaming setup, gaming desktop, high-performance computer, high-end pc, powerful computer, krachtige computer, ordinateur puissant, leistungsstarker Computer, online shopping, online winkelen, achats en ligne, Online-Einkauf, secure payment, veilige betaling, paiement sécurisé, sichere Zahlung, add to cart, toevoegen aan winkelwagen, ajouter au panier, in den Warenkorb, shop, winkel, magasin, Geschäft, custom pc, aangepaste pc, pc personnalisé, benutzerdefinierter PC, computers, accessoires, accessoires, Zubehör, free shipping, gratis verzending, livraison gratuite, kostenloser Versand, discount, korting, remise, Rabatt, fast delivery, snelle levering, livraison rapide, schnelle Lieferung'
}

const data = [
{
    question: "What payment methods are accepted at MODEX?",
    answers: "We accept Mastercard, Visa, iDEAL, PayPal, and Bancontact for secure and convenient checkout options."
},
{
    question: "How long does shipping take?",
    answers: "We aim to deliver within 3 days, though shipping may take up to a week depending on location and component availability."
},
{
    question: "Is it possible to track my order after purchase?",
    answers: "Yes, you will receive an email with a tracking code from our shipping partner to monitor your order's delivery progress."
},
{
    question: "Do I need to create an account to place an order?",
    answers: "No, you can checkout as a guest. However, creating an account provides additional benefits like enhanced support, warranty management, and order insights. If you later create an account with the same email, your previous orders will automatically link to your account."
},
{
    question: "Can I return or exchange my order if I'm not satisfied?",
    answers: "Yes, returns are accepted within 30 days of delivery. Please ensure the computer is carefully packaged, as customers are responsible for any damage during return shipping."
},
{
    question: "Are there any additional shipping charges?",
    answers: "No, we cover all shipping costs for deliveries to you. There are no additional charges."
},
{
    question: "Can I apply discount codes on my order?",
    answers: "We currently do not offer discount codes. MODEX is committed to providing the best prices on the market every day."
},
{
    question: "What should I do if I encounter an issue during checkout?",
    answers: "If you experience any issues, please contact us at info@modexgaming.com. We're here to help with anything you may need."
},
{
    question: "Does MODEX offer warranty on its products?",
    answers: "Yes, all products come with a minimum 3-year warranty. If issues arise after the warranty period, feel free to reach out, and we will still do our best to assist you."
},
{
    question: "How can I contact customer support?",
    answers: "You can email us at info@modexgaming.com or message us on WhatsApp at +31 6 49164040 for prompt assistance."
}];



const CartPagePage = () => {
    return (
    <Container>
        <CartPage />
        <div className="p-6 my-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-6">Here you will find the most frequently asked questions about MODEX.</p>
            <Accordion type="single" collapsible className="w-full">
                {data.map((item, index) => (
                    <AccordionItem key={index} className="mb-4" value={index.toString()}>
                        <AccordionTrigger className="p-4 font-semibold text-lg sm:text-xl hover:bg-gray-100 rounded-lg transition duration-200">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-4 sm:text-lg bg-white">
                            {item.answers}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
            
        </Container>
        )
    }
    
    export default CartPagePage