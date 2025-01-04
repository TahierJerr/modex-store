"use client";

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Computer } from "@/types";
import BuildDetailsModal from "./build-details-modal";
import Container from "@/components/ui/container";

interface PricingTransparencyProps {
    computer: Computer;
}

const additionalCosts = [
    { name: "Shipping", price: 40 },
    { name: "Payment Fees & Banking Costs", price: 6 },
    { name: "Assembly", price: 50 },
];

const PricingTransparency: React.FC<PricingTransparencyProps> = ({
    computer,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const components = [
        {
            name: `Processor: ${computer.processor.name}`,
            price: computer.processor.price,
            productUrl: computer.processor.productUrl,
            description: `${computer.processor.series} ${computer.processor.baseSpeed} ${computer.processor.cores} cores`,
        },
        {
            name: `Motherboard: ${computer.motherboard.name}`,
            price: computer.motherboard.price,
            productUrl: computer.motherboard.productUrl,
            description: `${computer.motherboard.formFactor} ${computer.motherboard.wifi} Wi-Fi`,
        },
        {
            name: `Memory: ${computer.memory.name}`,
            price: computer.memory.price,
            productUrl: computer.memory.productUrl,
            description: `${computer.memory.capacity} ${computer.memory.type}`,
        },
        {
            name: `Graphics: ${computer.graphics.name}`,
            price: computer.graphics.price,
            productUrl: computer.graphics.productUrl,
            description: `${computer.graphics.memory} ${computer.graphics.memoryType} VRAM`,
        },
        {
            name: `Storage: ${computer.storage.name}`,
            price: computer.storage.price,
            productUrl: computer.storage.productUrl,
            description: `${computer.storage.capacity} ${computer.storage.type}`,
        },
        {
            name: `Cooler: ${computer.cooler.name}`,
            price: computer.cooler.price,
            productUrl: computer.cooler.productUrl,
            description: "Cooling solution",
        },
        {
            name: `Power: ${computer.power.name}`,
            price: computer.power.price,
            productUrl: computer.power.productUrl,
            description: `${computer.power.wattage}W ${computer.power.rating}`,
        },
        {
            name: `PC Case: ${computer.pccase.name}`,
            price: computer.pccase.price,
            productUrl: computer.pccase.productUrl,
            description: `${computer.pccase.formFactor}`,
        },
    ];

    const rawComponentCost = components.reduce((sum, item) => sum + item.price, 0);
    const totalAdditionalCost = additionalCosts.reduce(
        (sum, item) => sum + item.price,
        0
    );

    const totalCost = Number(computer.price);
    const profit = totalCost - (rawComponentCost + totalAdditionalCost);

    return (
        <section className="my-12">
            <Container>
                <Card className="w-full max-w-4xl mx-auto bg-white overflow-hidden border-none shadow-none">
                    <CardHeader className="p-4">
                        <CardTitle className="text-2xl font-bold text-gray-800">
                            Pricing Breakdown
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                            Transparent cost analysis of the {computer.name}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                        <div className="gap-4">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Components</h3>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Component</TableHead>
                                            <TableHead className="text-right">Price (€)</TableHead>
                                            <TableHead></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {components.map((item, index) => (
                                            <TableRow className="" key={index}>
                                                <TableCell className="font-medium">
                                                    <strong>{item.name.split(" ")[0]}</strong> {item.name.substring(item.name.indexOf(" ") + 1)}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {item.price.toFixed(2)}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    {item.productUrl && (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => window.open(item.productUrl, "_blank")}
                                                        >
                                                            View Supplier
                                                        </Button>
                                                    )}
                                                    {!item.productUrl && (
                                                        <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => window.open(item.productUrl, "_blank")}
                                                        disabled
                                                    >
                                                        No Supplier
                                                    </Button>
                                                        )}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell className="font-bold">Raw Component Cost</TableCell>
                                            <TableCell className="text-right font-bold">
                                                {rawComponentCost.toFixed(2)}
                                            </TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <h3 className="text-lg font-semibold mt-6 mb-2">
                                    Additional Costs
                                </h3>
                                <Table>
                                    <TableBody>
                                        {additionalCosts.map((cost, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="font-medium">{cost.name}</TableCell>
                                                <TableCell className="text-right">
                                                    {cost.price.toFixed(2)}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            <TableCell className="font-bold">Profit</TableCell>
                                            <TableCell className="text-right font-bold">
                                                {profit.toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <div className="mt-4 text-sm text-gray-600">
                                    Additional costs include shipping, payment fees, assembly, and our
                                    profit margin to support business growth and excellent customer
                                    service.
                                </div>
                                <div className="mt-6 text-xl font-bold">
                                    Final Price: €{totalCost.toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start p-4">
                        <Button
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-normal py-2 px-4 rounded"
                            onClick={() => setIsModalOpen(true)}
                        >
                            See Component Details
                        </Button>
                    </CardFooter>
                    <BuildDetailsModal
                        open={isModalOpen}
                        onOpenChange={setIsModalOpen}
                        computer={computer}
                        profit={profit}
                    />
                </Card>
            </Container>
        </section>
    );
};

export default PricingTransparency;
