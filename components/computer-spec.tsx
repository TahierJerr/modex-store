import { Computer } from "@/types";
import { CpuIcon, FanIcon, HardDriveIcon, LockIcon, MemoryStickIcon, PcCaseIcon, PowerIcon, ServerIcon } from "lucide-react";
import Container from "./ui/container";

interface ComputerSpecProps {
    data: Computer;
}

const ComputerSpec: React.FC<ComputerSpecProps> = ({ data }) => {
    return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <Container>
        <div className="container px-4 ">
            <div className="mx-auto max-w-4xl">
                <div className="mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Gaming PC Specifications</h2>
                    <p className="mt-2 text-muted-foreground">
                        Detailed breakdown of the components..
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">CPU</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <CpuIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.processor.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {data.processor.cores} cores, {data.processor.baseSpeed} base clock. For the best gaming performance.
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">GPU</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <CpuIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.graphics.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {data.graphics.memory} {data.graphics.memoryType}, {data.graphics.maxClock} boost clock. For high-quality gaming visuals.
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">RAM</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <MemoryStickIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.memory.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{data.memory.type} {data.memory.capacity} {data.memory.speed}. For seamless multitasking.</p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">Storage</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <HardDriveIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.storage.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">Storage of {data.storage.capacity}, with really fast reading and writing speeds.</p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">Cooling</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <FanIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.cooler.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">Keeps CPU temperatures really cool ;{")"}</p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">Power Supply</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <PowerIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.power.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{data.power.wattage} {data.power.rating}. Ample power for high-end components</p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">Case</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <PcCaseIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.pccase.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">Ample power for high-end components</p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">Motherboard</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <ServerIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.motherboard.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                            {data.motherboard.formFactor} form factor. Best handling for high-end components.
                        </p>
                    </div>
                    <div className="rounded-lg border bg-card p-6 bg-gray-100 shadow-xl">
                        <h3 className="text-lg font-semibold">Operating system</h3>
                        <div className="mt-2 flex items-center gap-2">
                            <LockIcon className="h-6 w-6 text-muted-foreground" />
                            <p>{data.software.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{data.software.name} operating system.</p>
                    </div>
                </div>
            </div>
        </div>
        </Container>
    </section>
    );
}

export default ComputerSpec;