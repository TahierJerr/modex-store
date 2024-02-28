import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'MODEX Cookies | MODEX',
    description: 'Hier vind je het cookiebeleid van MODEX.'
  }

export default function Cookies() { 
    return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32 text-white mt-32">
        <h1 className="text-4xl font-bold mb-8 text-center">Cookiebeleid van MODEX</h1>
        <p className="text-2xl font-bold mb-4">Wat zijn cookies</p>
        <p className="text-lg mb-4">Zoals gebruikelijk is bij bijna alle professionele websites, gebruikt deze site cookies, dit zijn kleine bestanden die naar uw computer worden gedownload, om uw ervaring te verbeteren. Deze pagina beschrijft welke informatie ze verzamelen, hoe we deze gebruiken en waarom we deze cookies soms moeten opslaan. We zullen ook delen hoe u deze cookies kunt voorkomen dat ze worden opgeslagen, maar dit kan bepaalde elementen van de functionaliteit van de sites downgraden of breken.</p>
        <p className="text-2xl font-bold mb-4">Hoe we cookies gebruiken</p>
        <p className="text-lg mb-4">We gebruiken cookies om verschillende redenen die hieronder worden beschreven. Helaas zijn er in de meeste gevallen geen industriestandaard opties voor het uitschakelen van cookies zonder de functionaliteit en functies die ze aan deze site toevoegen volledig uit te schakelen. Het wordt aanbevolen dat u alle cookies aan laat staan als u niet zeker weet of u ze nodig heeft of niet, voor het geval ze worden gebruikt om een dienst te leveren die u gebruikt.</p>
        <p className="text-2xl font-bold mb-4">Cookies uitschakelen</p>
        <p className="text-lg mb-4">U kunt het instellen van cookies voorkomen door de instellingen in uw browser aan te passen (zie de Help van uw browser voor hoe u dit moet doen). Wees u ervan bewust dat het uitschakelen van cookies de functionaliteit van deze en vele andere websites die u bezoekt, zal beïnvloeden. Het uitschakelen van cookies zal meestal ook bepaalde functionaliteit en functies van deze site uitschakelen. Daarom wordt aanbevolen dat u cookies niet uitschakelt. Dit cookiebeleid is gemaakt met de hulp van de <a className="text-blue-500 underline" href="https://www.cookiepolicygenerator.com/cookie-policy-generator/">Cookiebeleid Generator</a>.</p>
        <p className="text-2xl font-bold mb-4">De cookies die we instellen</p>
        <ul className="list-disc list-inside">
            <li className="mb-4 list-none">
                <p className="text-lg font-bold">Cookies gerelateerd aan orderverwerking</p>
                <p className="text-lg">Deze site biedt e-commerce of betalingsfaciliteiten en sommige cookies zijn essentieel om ervoor te zorgen dat uw bestelling tussen paginas wordt onthouden, zodat we deze correct kunnen verwerken.</p>
            </li>
        </ul>
        <p className="text-2xl font-bold mb-4">Cookies van derden</p>
        <p className="text-lg mb-4">In sommige speciale gevallen gebruiken we ook cookies die door vertrouwde derde partijen worden geleverd. Het volgende gedeelte geeft details over welke cookies van derden u mogelijk tegenkomt op deze site.</p>
        <ul className="list-disc list-inside">
            <li className="mb-4 list-none">
                <p className="text-lg font-bold">Cookies voor het testen van nieuwe functies</p>
                <p className="text-lg">Van tijd tot tijd testen we nieuwe functies en maken we subtiele veranderingen aan de manier waarop de site wordt geleverd. Wanneer we nog steeds nieuwe functies testen, kunnen deze cookies worden gebruikt om ervoor te zorgen dat u een consistente ervaring op de site krijgt, terwijl we begrijpen welke optimalisaties onze gebruikers het meest waarderen.</p>
            </li>
        </ul>
        <p className="text-2xl font-bold mb-4">Meer informatie</p>
        <p className="text-lg mb-4">Hopelijk heeft dat dingen voor u verduidelijkt en zoals eerder vermeld, als er iets is waarvan u niet zeker weet of u het nodig heeft of niet, is het meestal veiliger om cookies ingeschakeld te laten voor het geval het interactie heeft met een van de functies die u op onze site gebruikt.</p>
        <p className="text-lg mb-4">Voor meer algemene informatie over cookies, lees het artikel over het <a className="text-blue-500 underline" href="https://www.cookiepolicygenerator.com/sample-cookies-policy/">Cookiebeleid</a>.</p>
        <p className="text-lg mb-4">Als u echter nog steeds op zoek bent naar meer informatie, kunt u contact met ons opnemen via een van onze voorkeurscontactmethoden:</p>
        <ul className="list-disc list-inside">
            <li className="mb-12 text-lg">E-mail: info@modex-pc.nl</li>
        </ul>
    </div>
    
    )
}