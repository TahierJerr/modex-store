import React from 'react';
import { PcCase, Shield, EuroIcon } from "lucide-react";

const BulletSection = () => {
  return (
    <div className="text-white space-y-4 my-12">
        <h3 className="text-primary font-bold text-3xl mx-auto">Waarom MODEX?</h3>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:gird-cols-3 gap-4 bg-black200 rounded-md py-4 px-2">
        <div className="px-4 py-2">
          <h4 className='text-primary font-semibold text-2xl mb-6 flex items-center'><PcCase className="mr-2 w-6 h-6"/>Prestaties eerst</h4>
          <p className='font-medium text-lg'>Bij MODEX staat prestatie voorop. Onze computers zijn gebouwd met de beste componenten om een soepele en meeslepende game-ervaring te garanderen.</p>
        </div>
        <div className="px-4 py-2">
          <h5 className='text-primary text-2xl font-semibold mb-6 flex items-center'><EuroIcon className="mr-2 w-6 h-6"/>Eerlijke prijzen</h5>
          <p className='text-lg font-medium'>Bij MODEX geloven we in eerlijke prijzen. We streven ernaar om de beste prestaties per euro te bieden, waardoor gamen toegankelijker wordt.</p>
        </div>
        <div className="px-4 py-2">
          <h6 className='text-primary text-2xl font-semibold mb-6 flex items-center'><Shield className="mr-2 w-6 h-6"/>Betrouwbare garantie</h6>
          <p className='font-medium text-lg'>We staan achter de kwaliteit van onze producten. Daarom bieden we een betrouwbare garantie op onze machines. Je kunt met een gerust hart gamen, wetende dat wij er voor je zijn als er iets misgaat.</p>
        </div>
      </div>
    </div>
  );
};

export default BulletSection;
