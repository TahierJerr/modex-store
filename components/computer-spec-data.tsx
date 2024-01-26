import { Computer } from "@/types";


interface ComputerSpecDataProps {
    data: Computer;
}


const ComputerSpecData: React.FC<ComputerSpecDataProps> = ({ data }) => {
    return (

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <p className="font-semibold text-primary text-2xl mb-4">Processor</p>
                <p className="mb-2">CPU: {data.processor.name}</p>
                <p className="mb-2">Merk: {data.processor.brand}</p>
                <p className="mb-2">Series: {data.processor.series}</p>
                <p className="mb-2">Cores: {data.processor.cores}</p>
                <p className="mb-2">Base Clock: {data.processor.baseSpeed}</p>
              </div>
              <div>
                <p className="font-semibold text-primary text-2xl mb-4">Processor Koeler</p>
                <p className="mb-2">Koeler: {data.cooler.name}</p>
                <p className="mb-2">Model: {data.cooler.model}</p>
                <p className="mb-2">Type: {data.cooler.type}</p>
                <p className="mb-2">RGB: {data.cooler.rgb}</p>
              </div>
              <div>
                <p className="font-semibold text-primary text-2xl mb-4">Grafische Kaart</p>
                <p className="mb-2">GPU: {data.graphics.name}</p>
                <p className="mb-2">Merk: {data.graphics.brand}</p>
                <p className="mb-2">Model: {data.graphics.model}</p>
                <p className="mb-2">Geheugen: {data.graphics.memory}</p>
                <p className="mb-2">Geheugen Type: {data.graphics.memoryType}</p>
                <p className="mb-2">Maximale kloksnelheid: {data.graphics.maxClock}</p>
              </div>
              <div>
                <p className="font-semibold text-primary text-2xl mb-4">Geheugen</p>
                <p className="mb-2">Geheugen: {data.memory.name}</p>
                <p className="mb-2">Model: {data.memory.model}</p>
                <p className="mb-2">Capaciteit: {data.memory.capacity}</p>
                <p className="mb-2">Geheugen Type: {data.memory.type}</p>
                <p className="mb-2">Kloksnelheid: {data.memory.speed}</p>
                <p className="mb-2">RGB: {data.memory.rgb}</p>
              </div>
              <div>
                <p className="font-semibold text-primary text-2xl mb-4">Moederbord</p>
                <p className="mb-2">Moederbord: {data.motherboard.name}</p>
                <p className="mb-2">Model: {data.motherboard.model}</p>
                <p className="mb-2">Form Factor: {data.motherboard.formFactor}</p>
                <p className="mb-2">Wi-Fi: {data.motherboard.wifi}</p>
                </div>
                <div>
                <p className="font-semibold text-primary text-2xl mb-4">Opslag</p>
                <p className="mb-2">Opslag: {data.storage.name}</p>
                <p className="mb-2">Model: {data.storage.model}</p>
                <p className="mb-2">Capaciteit: {data.storage.capacity}</p>
                <p className="mb-2">Type: {data.storage.type}</p>
                </div>
                <div>
                <p className="font-semibold text-primary text-2xl mb-4">Voeding</p>
                <p className="mb-2">Voeding: {data.power.name}</p>
                <p className="mb-2">Model: {data.power.model}</p>
                <p className="mb-2">Capaciteit: {data.power.wattage}</p>
                <p className="mb-2">Certificering: {data.power.rating}</p>
                </div>
                <div>
                <p className="font-semibold text-primary text-2xl mb-4">Behuizing</p>
                <p className="mb-2">Behuizing: {data.pccase.name}</p>
                <p className="mb-2">Model: {data.pccase.model}</p>
                <p className="mb-2">Moederbord ondersteuning: {data.pccase.motherboardSupport}</p>
                <p className="mb-2">Poorten: {data.pccase.ports}</p>
                <p className="mb-2">Kleur: {data.pccase.color}</p>
                </div>
            </div>
    )
}

export default ComputerSpecData;