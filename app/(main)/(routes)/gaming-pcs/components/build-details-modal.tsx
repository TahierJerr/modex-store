"use client";

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Cpu, CpuIcon as Gpu, HardDrive, MemoryStickIcon as Memory, Fan, Power, DollarSign, Truck, CreditCard, Users, ComputerIcon } from 'lucide-react';
import { Computer } from '@/types';

interface BuildDetailsModalProps {
    computer: Computer;
    onOpenChange: (open: boolean) => void;
    open: boolean;
    profit: number;
}





const BuildDetailsModal: React.FC<BuildDetailsModalProps> = ({ computer, onOpenChange, open, profit }) => {
    const [activeTab, setActiveTab] = useState('components')

    const getResolution = (performance: number): string => {
        if (performance > 200) {
            return '4K ready';
        } else if (performance > 110) {
            return '1440p ready';
        } else if (performance > 60) {
            return '1080p ready';
        } else {
            return 'Not recommended for gaming';
        }
    };

    
    const components = [
        {name: computer.processor.name, price: computer.processor.price, icon: Cpu, productUrl: computer.processor.productUrl, description: `${computer.processor.series} ${computer.processor.baseSpeed} ${computer.processor.cores} cores`},
        {name: computer.motherboard.name, price: computer.motherboard.price, icon: Memory, productUrl: computer.motherboard.productUrl, description: `${computer.motherboard.formFactor} ${computer.motherboard.wifi} Wi-Fi`},
        {name: computer.memory.name, price: computer.memory.price, icon: Memory, productUrl: computer.memory.productUrl, description: `${computer.memory.capacity} ${computer.memory.type}`},
        {name: computer.graphics.name, price: computer.graphics.price, icon: Gpu, productUrl: computer.graphics.productUrl, description: `${computer.graphics.memory} ${computer.graphics.memoryType} VRAM, ${getResolution(computer.graphics.performance)}`},
        {name: computer.storage.name, price: computer.storage.price, icon: HardDrive, productUrl: computer.storage.productUrl, description: `${computer.storage.capacity} ${computer.storage.type}`},
        {name: computer.cooler.name, price: computer.cooler.price, icon: Fan, productUrl: computer.cooler.productUrl, description: ``},
        {name: computer.power.name, price: computer.power.price, icon: Power, productUrl: computer.power.productUrl, description: `${computer.power.wattage}W ${computer.power.rating}`},
        {name: computer.pccase.name, price: computer.pccase.price, icon: ComputerIcon, productUrl: computer.pccase.productUrl, description: `${computer.pccase.formFactor}`},
    ]
    
    if (!computer) {
        return (
        <div>
            <h1>Build Details</h1>
            <p>The computer went missing</p>
        </div>
        );
    }

    const additionalCosts = [
        { name: 'Assembly', description: 'Expert building and cable management', price: 50, icon: Users },
        { name: 'Insured Shipping', description: 'Safe delivery guarantee', price: 40, icon: Truck },
        { name: 'Payment Processing', description: 'Secure transaction fees', price: 6, icon: CreditCard },
        { name: 'Profit', description: 'Our margin', price: profit, icon: DollarSign}
        ];
    
    const totalComponentCost = components.reduce((sum, component) => sum + component.price, 0)
    const totalAdditionalCost = additionalCosts.reduce((sum, cost) => sum + cost.price, 0)
    const totalCost = totalComponentCost + totalAdditionalCost
    
    const getProgress = () => {
        if (activeTab === 'components') {
            return (components.reduce((sum, _, index) => sum + components.slice(0, index + 1).reduce((s, c) => s + c.price, 0), 0) / totalCost) * 100
        } else {
            return ((totalComponentCost + additionalCosts.reduce((sum, _, index) => sum + additionalCosts.slice(0, index + 1).reduce((s, c) => s + c.price, 0), 0)) / totalCost) * 100
        }
    }
    return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px] w-11/12 rounded-md">
            <DialogHeader>
                <DialogTitle>Full Build Details</DialogTitle>
                <DialogDescription>
                    Breakdown of all components and additional costs
                </DialogDescription>
            </DialogHeader>
            <Progress value={getProgress()} className="w-full mt-2" />
            <p className="text-right text-sm text-gray-500">Total: €{computer.price}</p>
            <Tabs defaultValue="components" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="components">Components</TabsTrigger>
                    <TabsTrigger value="additional">Additional Costs</TabsTrigger>
                </TabsList>
                <TabsContent value="components">
                    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                        {components.map((component, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                                <div className="flex items-center">
                                    <component.icon className="mr-2 h-5 w-5" />
                                    <h3 className="text-lg font-semibold">{component.name}</h3>
                                </div>
                                <p className="text-sm text-gray-500">{component.description}</p>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-sm font-medium">€{component.price.toFixed(2)}</span>
                                    {component.productUrl && (
                                        <a href={component.productUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                                            View Supplier
                                        </a>
                                    )}
                                </div>
                            </div>
                            ))}
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value="additional">
                        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                            {additionalCosts.map((cost, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <div className="flex items-center">
                                        <cost.icon className="mr-2 h-5 w-5" />
                                        <h3 className="text-lg font-semibold">{cost.name}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500">{cost.description}</p>
                                    <div className="flex justify-between items-center mt-1">
                                        <span className="text-sm font-medium">€{cost.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                ))}
                            </ScrollArea>
                        </TabsContent>
                    </Tabs>
                </DialogContent>
            </Dialog>
            )
        }

export default BuildDetailsModal;