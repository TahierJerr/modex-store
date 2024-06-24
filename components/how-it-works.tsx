import { Home, Search, Wrench } from "lucide-react"

const HowItWorks = () => {
    return (
    <>
    <h3 className="text-3xl font-semibold text-black mb-4">Hoe het werkt</h3>
    <div className="grid grid-cols-1 gap-4 text-black rounded-lg py-4 px-4 mb-6 -mt-4 ">
        <div>
            <h4 className="text-2xl font-semibold flex items-center mb-2"><Search size={24} className="mr-2 text-black200"/> Stap 1</h4>
            <p className="font-medium text-lg">Kies een van onze game{"\'"}pcs, die zorgvuldig zijn samengesteld door onze experts en hoogwaardige componenten bevatten.</p>
        </div>
        <div>
            <h4 className="text-2xl font-semibold flex items-center mb-2"><Wrench size={24} className="mr-2" /> Stap 2</h4>
            <p className="font-medium text-lg">Onze experts assembleren jouw nieuwe computer met zorg en precisie, gebruikmakend van de beste componenten en de nieuwste technologieën.</p>
        </div>
        <div>
            <h4 className="text-2xl font-semibold flex items-center mb-2"><Home size={24} className="mr-2" /> Stap 3</h4>
            <p className="font-medium text-lg">En nu: gamen maar! Binnen een week wordt je game{"\'"}pc bij je thuisbezorgd. Sluit hem aan, voer updates uit en begin met gamen!</p>
        </div>
    </div>
    </>
    )
}

export default HowItWorks