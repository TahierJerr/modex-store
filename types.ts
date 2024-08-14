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

export interface Processor {
    id: string;
    name: string;
    brand: string;
    series: string;
    baseSpeed: string;
    cores: string;
}

export interface Graphics {
    id: string;
    name: string;
    brand: string;
    model: string;
    memory: string;
    memoryType: string;
    maxClock: string;
}

export interface Memory {
    id: string;
    name: string;
    model: string;
    speed: string;
    capacity: string;
    type: string;
    rgb: string;
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
}

export interface Power {
    id: string;
    name: string;
    model: string;
    wattage: string;
    rating: string;
}

export interface Pccase {
    id: string;
    name: string;
    model: string;
    color: string;
    motherboardSupport: string;
    ports: string;
}

export interface Cooler {
    id: string;
    name: string;
    model: string;
    type: string;
    fanModel: string;
    rgb: string;
}

export interface Motherboard {
    id: string;
    name: string;
    model: string;
    formFactor: string;
    wifi: string;
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