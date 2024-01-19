import Container from "@/components/ui/container";
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'MODEX Retour | MODEX',
  description: 'Dit is de retour pagina van MODEX.'
}

const RetourPage = () => {
  return (
  <div className="bg-black text-white">
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Retourneren</h1>
        <div className="mt-4 max-w-2xl text-lg">
          <p className="mb-4">Je hebt het recht om je bestelling tot 30 dagen na ontvangst zonder opgave van reden te annuleren. Je hebt na annulering nogmaals 14 dagen om je product retour te sturen. De kosten voor het retourneren van het pakket zijn voor eigen rekening en verantwoordelijkheid. Stuur het pakket alstublieft niet terug tenzij uw aanvraag is geaccepteerd.</p>
          <p className="mb-4">Als u een retour wilt aanvragen, kunt u een e-mail sturen naar <a href="mailto:info@modex-pc.nl" className="text-primary underline">info@modex-pc.nl</a> met uw factuurnummer, naam en adres. U kunt geen retour aanvragen voor computers die op maat voor u zijn gebouwd. Indien uw aanvraag wordt geaccepteerd, dient u het pakket terug te sturen naar Draakstraat 7, 9742TD.</p>
        </div>
      </div>
    </Container>
  </div>
  )
}

export default RetourPage;  