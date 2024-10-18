export interface User {
    id: string;
}

export interface Billboard {
    id: string;
    label: string;
    description: string;
    imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

export interface Computer {
    id: string;
    name: string;
    deliveryTime: string;
    price: string;
    images: Image[];
    category: Category;
    isFeatured: boolean;
    processor: Processor;
    graphics: Graphics;
    software: Software;
    storage: Storage;
    power: Power;
    pccase: Pccase;
    cooler: Cooler;
    color: Color;
    motherboard: Motherboard;
    warranty: Warranty;
    memory: Memory;
    updatedAt: Date;
}

export interface Image {
    id: string;
    url: string;
}

export enum MemoryType {
    DDR3 = "DDR3",
    DDR4 = "DDR4",
    DDR5 = "DDR5",
}

export enum SocketType { // add to prisma schema
    AM5 = "AM5",
    AM4 = "AM4",
    LGA1700 = "LGA1700",
    LGA1200 = "LGA1200",
    LGA1151 = "LGA1151",
}

export enum FormFactor {
    ATX = "ATX",
    MicroATX = "MicroATX",
    MiniITX = "MiniITX",
}

export enum CoolerType {
    Air = "Air",
    AIO = "AIO",
}

export enum StorageType {
    HDD = "HDD",
    SSD = "SSD",
    NVMe = "NVMe",
}

export interface Processor {
    id: string;
    name: string;
    brand: string;
    series: string;
    baseSpeed: string;
    cores: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
    socket: SocketType; // add to prisma schema
}

export interface Graphics {
    id: string;
    name: string;
    brand: string;
    model: string;
    memory: string;
    memoryType: string;
    maxClock: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
    performance: number;
    length: number; // add to prisma schema
    width: number; // add to prisma schema
    slots: number; // add to prisma schema
    minWattage: number; // add to prisma schema
}

export interface Memory {
    id: string;
    name: string;
    model: string;
    speed: string;
    capacity: string;
    type: string;
    rgb: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
    modules: number; // add to prisma schema
    capacityNumber: number; // add to prisma schema
    newType: MemoryType; // add to prisma schema
}

export interface Software {
    id: string;
    name: string;
}

export interface Storage {
    id: string;
    name: string;
    model: string;
    capacity: string;
    type: string;
    speed: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
    newType: StorageType; // add to prisma schema
}

export interface Power {
    id: string;
    name: string;
    model: string;
    wattage: string;
    rating: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
}

export interface Pccase {
    id: string;
    name: string;
    model: string;
    color: string;
    motherboardSupport: string;
    ports: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
    maxGpuLength: number; // add to prisma schema
    maxGpuWidth: number; // add to prisma schema
    maxGpuSlots: number; // add to prisma schema
    maxCoolerHeight: number; // add to prisma schema
    maxRadiatorLength: number; // add to prisma schema
    maxRadiatorThickness: number; // add to prisma schema
    formFactor: FormFactor; // add to prisma schema
}

export interface Cooler {
    id: string;
    name: string;
    model: string;
    type: string;
    fanModel: string;
    rgb: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
    height: number; // Height of the cooler in millimeters
    radiatorLength: number; // Length of the radiator for AIO coolers (if applicable)
    radiatorThickness: number; // Thickness of the radiator for AIO coolers (if applicable)
    newType: CoolerType; // add to prisma schema
    socket: SocketType; // add to prisma schema
}

export interface Motherboard {
    id: string;
    name: string;
    model: string;
    formFactor: string;
    wifi: string;
    price: number;
    priceTrackUrl: string;
    productUrl: string;
    socket: SocketType; // add to prisma schema
    memoryType: MemoryType; // add to prisma schema
    maxMemoryCapacity: number; // add to prisma schema
    memorySlots: number; // add to prisma schema
}

export interface Warranty {
    id: string;
    name: string;
}

export interface Color {
    id: string;
    name: string;
    value: string;
}

export interface Answers {
    id: string;
    question: string;
    answers: string;
}