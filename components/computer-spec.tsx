import { Computer } from "@/types";
import { CpuIcon, FanIcon, HardDriveIcon, LockIcon, MemoryStickIcon, PcCaseIcon, PowerIcon, ServerIcon } from "lucide-react";
import Container from "./ui/container";

interface ComputerSpecProps {
    data: Computer;
}

const ComputerSpec: React.FC<ComputerSpecProps> = ({ data }) => {
    
    const specs = [
        {
            title: "CPU",
            icon: <CpuIcon className="h-6 w-6 text-gray-300" />,
            description: `${data.processor.cores} cores, ${data.processor.baseSpeed} base clock. For the best gaming performance.`,
            detail: data.processor.name,
            span: "col-span-2 row-span-2",
        },
        {
            title: "GPU",
            icon: <CpuIcon className="h-6 w-6 text-gray-300" />,
            description: `${data.graphics.memory} ${data.graphics.memoryType}, ${data.graphics.maxClock} boost clock. For high-quality gaming visuals.`,
            detail: data.graphics.name,
            span: "col-span-2 row-span-2",
        },
        {
            title: "RAM",
            icon: <MemoryStickIcon className="h-6 w-6 text-gray-300" />,
            description: `${data.memory.type} ${data.memory.capacity} ${data.memory.speed}. For seamless multitasking.`,
            detail: data.memory.name,
            span: "col-span-1 row-span-1",
        },
        {
            title: "Storage",
            icon: <HardDriveIcon className="h-6 w-6 text-gray-300" />,
            description: `Storage of ${data.storage.capacity}, with really fast reading and writing speeds.`,
            detail: data.storage.name,
            span: "col-span-1 row-span-1",
        },
        {
            title: "Cooling",
            icon: <FanIcon className="h-6 w-6 text-gray-300" />,
            description: "Keeps CPU temperatures really cool ;)",
            detail: data.cooler.name,
            span: "col-span-1 row-span-1",
        },
        {
            title: "Power Supply",
            icon: <PowerIcon className="h-6 w-6 text-gray-300" />,
            description: `${data.power.wattage} ${data.power.rating}. Ample power for high-end components.`,
            detail: data.power.name,
            span: "col-span-1 row-span-1",
        },
        {
            title: "Case",
            icon: <PcCaseIcon className="h-6 w-6 text-gray-300" />,
            description: "Ample power for high-end components.",
            detail: data.pccase.name,
            span: "col-span-1 row-span-1",
        },
        {
            title: "Motherboard",
            icon: <ServerIcon className="h-6 w-6 text-gray-300" />,
            description: `${data.motherboard.formFactor} form factor. Best handling for high-end components.`,
            detail: data.motherboard.name,
            span: "col-span-2 row-span-1",
        },
        {
            title: "Operating System",
            icon: <LockIcon className="h-6 w-6 text-gray-300" />,
            description: `${data.software.name} operating system.`,
            detail: data.software.name,
            span: "col-span-1 row-span-1",
        },
    ]
    
    
    return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <Container>
            <div className="container px-4">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 md:mb-12 lg:mb-16 text-center">
                        <h2 className="text-4xl font-bold tracking-tight text-white">Gaming PC Specifications</h2>
                        <p className="mt-2 text-gray-400">
                            Detailed breakdown of the components.
                        </p>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {specs.map((spec, index) => (
                            <div
                            key={index}
                            className={`rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 p-4 shadow-lg backdrop-blur-lg border border-gray-500/30 ${spec.span}`}
                            style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(10px)",
                            }}
                            >
                            <h3 className="text-lg font-semibold text-white">{spec.title}</h3>
                            <div className="mt-2 flex items-center gap-2">
                                {spec.icon}
                                <p className="text-sm text-gray-200">{spec.detail}</p>
                            </div>
                            <p className="mt-2 text-xs text-gray-400">{spec.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    </section>
    );
};

export default ComputerSpec;
