import { Processor, Motherboard, Memory, Pccase, Graphics, Cooler, Power } from "@/types";

export function isSocketCompatible(processor: Processor, motherboard: Motherboard): boolean {
    return processor.socket === motherboard.socket;
}

export function isMemoryCompatible(memory: Memory, motherboard: Motherboard): boolean {
    
    if (memory.type !== motherboard.memoryType) {
        return false;
    }

    if (memory.modules > motherboard.memorySlots) {
        return false;
    }

    if (memory.capacityNumber > motherboard.maxMemoryCapacity) {
        return false;
    }

    return true;
}

export function isGpuCompatibleWithCase(graphics: Graphics, pccase: Pccase) {
    const lengthCompatible = graphics.length <= pccase.maxGpuLength;

    const widthCompatible = graphics.width <= pccase.maxGpuWidth;

    const slotsCompatible = graphics.slots <= pccase.maxGpuSlots;

    return lengthCompatible && widthCompatible && slotsCompatible;
}

export function isCoolerCompatibleWithCase(cooler: Cooler, pccase: Pccase): boolean {
    if (cooler.height !== undefined) {
        return cooler.height <= pccase.maxCoolerHeight;
    }
    
    if (cooler.radiatorLength !== undefined) {
        const maxRadiatorLength = pccase.maxGpuLength;
        const maxRadiatorThickness = 60;

        return (
            cooler.radiatorLength <= maxRadiatorLength &&
            (cooler.radiatorThickness !== undefined ? cooler.radiatorThickness <= maxRadiatorThickness : true)
        );
    }

    return false;
}

export function isPowerCompatibleWithGpu(graphics: Graphics, power: Power): boolean {
    const wattage = parseInt(power.wattage.replace(/W/i, "").trim());

    return wattage >= graphics.minWattage;
}

export function isMotherboardCompatibleWithCase(motherboard: Motherboard, pccase: Pccase): boolean {
    return motherboard.formFactor === pccase.formFactor;
}