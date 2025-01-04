import CompatibilityChecker from '@/lib/utils/compatibility';
import { Processor, Motherboard, Memory, Pccase, Graphics, Cooler, Power, SocketType, MemoryType } from '@/types';

describe('CompatibilityChecker', () => {
    test('isSocketCompatible should return true for matching sockets', () => {
        const processor: Processor = { 
            socket: SocketType.AM4, 
            id: 'proc-123', 
            name: 'Ryzen 5 5600X', 
            brand: 'AMD', 
            series: 'Ryzen 5', 
            baseSpeed: '3.7 GHz', 
            cores: '6', 
            price: 299, 
            priceTrackUrl: 'https://example.com/price/proc-123', 
            productUrl: 'https://example.com/products/proc-123' 
        };

        const motherboard: Motherboard = { 
            socket: SocketType.AM4, 
            id: 'mb-456', 
            name: 'MSI B550-A PRO', 
            model: 'B550-A', 
            formFactor: 'ATX', 
            wifi: 'No', 
            price: 129, 
            priceTrackUrl: 'https://example.com/price/mb-456', 
            productUrl: 'https://example.com/products/mb-456', 
            memoryType: MemoryType.DDR4, 
            maxMemoryCapacity: 128, 
            memorySlots: 4 
        };

        expect(CompatibilityChecker.isSocketCompatible(processor, motherboard)).toBe(true);
    });

    test('isSocketCompatible should return false for mismatching sockets', () => {
        const processor: Processor = { 
            socket: SocketType.LGA1700, 
            id: 'proc-789', 
            name: 'Intel Core i5-12600K', 
            brand: 'Intel', 
            series: 'Core i5', 
            baseSpeed: '3.7 GHz', 
            cores: '10', 
            price: 289, 
            priceTrackUrl: 'https://example.com/price/proc-789', 
            productUrl: 'https://example.com/products/proc-789' 
        };

        const motherboard: Motherboard = { 
            socket: SocketType.AM4, 
            id: 'mb-456', 
            name: 'MSI B550-A PRO', 
            model: 'B550-A', 
            formFactor: 'ATX', 
            wifi: 'No', 
            price: 129, 
            priceTrackUrl: 'https://example.com/price/mb-456', 
            productUrl: 'https://example.com/products/mb-456', 
            memoryType: MemoryType.DDR4, 
            maxMemoryCapacity: 128, 
            memorySlots: 4 
        };

        expect(CompatibilityChecker.isSocketCompatible(processor, motherboard)).toBe(false);
    });

    test('isMemoryCompatible should return true for compatible memory', () => {
        const memory: Memory = { 
            type: MemoryType.DDR4, 
            id: 'mem-123', 
            name: 'Corsair Vengeance LPX', 
            capacity: '16 GB', 
            speed: '3200 MHz', 
            modules: 2, 
            price: 79, 
            priceTrackUrl: 'https://example.com/price/mem-123', 
            productUrl: 'https://example.com/products/mem-123',
            capacityNumber: 16,
            newType: MemoryType.DDR4,
            model: 'Vengeance LPX',
            rgb: 'No',
        };

        const motherboard: Motherboard = { 
            socket: SocketType.AM4, 
            id: 'mb-456', 
            name: 'MSI B550-A PRO', 
            model: 'B550-A', 
            formFactor: 'ATX', 
            wifi: 'No', 
            price: 129, 
            priceTrackUrl: 'https://example.com/price/mb-456', 
            productUrl: 'https://example.com/products/mb-456', 
            memoryType: MemoryType.DDR4, 
            maxMemoryCapacity: 128, 
            memorySlots: 4,
        };

        expect(CompatibilityChecker.isMemoryCompatible(memory, motherboard)).toBe(true);
    });

    test('isMemoryCompatible should return false for incompatible memory', () => {
        const memory: Memory = { 
            type: MemoryType.DDR5, 
            id: 'mem-123', 
            name: 'Corsair Vengeance LPX', 
            capacity: '16 GB', 
            speed: '3200 MHz', 
            modules: 2, 
            price: 79, 
            priceTrackUrl: 'https://example.com/price/mem-123', 
            productUrl: 'https://example.com/products/mem-123',
            capacityNumber: 32,
            newType: MemoryType.DDR5,
            model: 'Vengeance LPX',
            rgb: 'No',
        };

        const motherboard: Motherboard = { 
            socket: SocketType.AM4, 
            id: 'mb-456', 
            name: 'MSI B550-A PRO', 
            model: 'B550-A', 
            formFactor: 'ATX', 
            wifi: 'No', 
            price: 129, 
            priceTrackUrl: 'https://example.com/price/mb-456', 
            productUrl: 'https://example.com/products/mb-456', 
            memoryType: MemoryType.DDR4, 
            maxMemoryCapacity: 128, 
            memorySlots: 4,
        };

        expect(CompatibilityChecker.isMemoryCompatible(memory, motherboard)).toBe(false);
    });
});
