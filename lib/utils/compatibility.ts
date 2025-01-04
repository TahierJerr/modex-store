import { Processor, Motherboard, Memory, Pccase, Graphics, Cooler, Power } from "@/types";

class CompatibilityChecker {
    static isSocketCompatible(processor: Processor, motherboard: Motherboard): boolean {
        return processor.socket === motherboard.socket;
    }

    static isMemoryCompatible(memory: Memory, motherboard: Motherboard): boolean {
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

    static isGpuCompatibleWithCase(graphics: Graphics, pccase: Pccase): boolean {
        const lengthCompatible = graphics.length <= pccase.maxGpuLength;
        const widthCompatible = graphics.width <= pccase.maxGpuWidth;
        const slotsCompatible = graphics.slots <= pccase.maxGpuSlots;

        return lengthCompatible && widthCompatible && slotsCompatible;
    }

    static isCoolerCompatibleWithCase(cooler: Cooler, pccase: Pccase): boolean {
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

    static isPowerCompatibleWithGpu(graphics: Graphics, power: Power): boolean {
        const wattage = parseInt(power.wattage.replace(/W/i, "").trim());

        return wattage >= graphics.minWattage;
    }

    static isMotherboardCompatibleWithCase(motherboard: Motherboard, pccase: Pccase): boolean {
        return motherboard.formFactor === pccase.formFactor;
    }

    static isCoolerCompatibleWithProcessor(cooler: Cooler, processor: Processor): boolean {
        return cooler.socket === processor.socket;
    }

    static isBuildCompatible(
        processor: Processor,
        motherboard: Motherboard,
        memory: Memory,
        graphics: Graphics,
        pccase: Pccase,
        cooler: Cooler,
        power: Power
    ): boolean {
        return (
            this.isSocketCompatible(processor, motherboard) &&
            this.isMemoryCompatible(memory, motherboard) &&
            this.isGpuCompatibleWithCase(graphics, pccase) &&
            this.isCoolerCompatibleWithCase(cooler, pccase) &&
            this.isPowerCompatibleWithGpu(graphics, power) &&
            this.isMotherboardCompatibleWithCase(motherboard, pccase)
        );
    }
}

export default CompatibilityChecker;
