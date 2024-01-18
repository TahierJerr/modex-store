import React, { ReactNode } from "react";
import { Processor, Graphics, Memory, Motherboard, Storage, Power, Pccase } from "../types"; // Import the specific types from the appropriate location

interface ComputerSpecDataProps {
  data: {
    processor: Processor;
    graphics: Graphics;
    memory: Memory;
    motherboard: Motherboard;
    storage: Storage;
    power: Power;
    pccase: Pccase;
  }; // Update the 'data' prop to include the specific types
}

const ComputerSpecData: React.FC<ComputerSpecDataProps> = ({ data }) => {
  const renderSpecItem = (title: string, specs: Processor | Graphics | Memory | Motherboard | Storage | Power | Pccase) => { // Update the argument type to include the specific types
    return (
      <div>
        <h2 className="font-semibold text-primary text-2xl mb-4">{title}</h2>
        {Object.entries(specs).map(([key, value]) => (
          <p className="mb-2" key={key}>
            {key}: {value as ReactNode}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {renderSpecItem("Processor", data.processor)}
      {renderSpecItem("Graphics", data.graphics)}
      {renderSpecItem("Geheugen", data.memory)}
      {renderSpecItem("Moederbord", data.motherboard)}
      {renderSpecItem("Opslag", data.storage)}
      {renderSpecItem("Voeding", data.power)}
      {renderSpecItem("Behuizing", data.pccase)}
    </div>
  );
};

export default ComputerSpecData;