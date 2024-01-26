import React from 'react';
import { PcCase, Shield, EuroIcon } from "lucide-react";

const BulletSection = () => {
  return (
    <div className="text-white space-y-4 my-12">
        <h3 className="text-primary font-bold text-3xl mx-auto">Waarom MODEX?</h3>
        <p className="text-white text-1xl mx-auto font-semibold">MODEX is een bedrijf dat gespecialiseerd is in het bouwen van hoogwaardige computers tegen een eerlijke prijs. We begrijpen de behoeften van gamers en streven ernaar om de beste prestaties per euro te bieden, zodat je het meeste uit je investering haalt.</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:gird-cols-3 gap-4 bg-black200 rounded-md py-4 px-2">
        <div className="px-4 py-2">
          <h4 className='text-primary font-semibold text-2xl mb-6 flex items-center'><PcCase className="mr-2 w-6 h-6"/>Gericht op prestaties</h4>
          <p className='font-medium text-lg'>Bij MODEX geven we prioriteit aan prestaties. Onze computers zijn gebouwd met eersteklas componenten om een soepele en meeslepende game-ervaring te garanderen. We begrijpen dat elke frame telt bij het gamen, en we streven ernaar om elke bit aan prestaties uit onze machines te halen.</p>
        </div>
        <div className="px-4 py-2">
          <h5 className='text-primary text-2xl font-semibold mb-6 flex items-center'><EuroIcon className="mr-2 w-6 h-6"/>Eerlijke prijzen</h5>
          <p className='text-lg font-medium'>We geloven in eerlijke prijzen. Bij MODEX streven we ernaar om de beste prestaties per euro te bieden. We begrijpen dat gamen een dure hobby kan zijn, en we proberen het toegankelijker te maken door hoogwaardige computers aan te bieden tegen een eerlijke prijs.</p>
        </div>
        <div className="px-4 py-2">
          <h6 className='text-primary text-2xl font-semibold mb-6 flex items-center'><Shield className="mr-2 w-6 h-6"/>Betrouwbare garantie</h6>
          <p className='font-medium text-lg'>We staan achter de kwaliteit van onze computers. Daarom bieden we een betrouwbare garantie bij onze machines. Je kunt met een gerust hart gamen, wetende dat als er iets misgaat, wij je gedekt hebben!</p>
        </div>
      </div>
    </div>
  );
};

export default BulletSection;
