"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion"
import Loader from "../ui/loading"

const messages = [
"We're finding the best deals for you...",
"Comparing prices across multiple vendors...",
"Analyzing market trends for better offers...",
"Finalizing the results for you...",
]

const GPUTableSkeleton = () => {
    const [progress, setProgress] = useState(0)
    const [currentMessage, setCurrentMessage] = useState(messages[0])
    const [showPopup, setShowPopup] = useState(false)
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentMessage((prevMessage) => {
                const currentIndex = messages.indexOf(prevMessage)
                const nextIndex = (currentIndex + 1) % messages.length
                return messages[nextIndex]
            })
        }, 5000) // Change message every 3 seconds
        
        return () => clearInterval(intervalId)
    }, [])
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 5000);
        
        return () => clearTimeout(timer);
    }, []);
    
    
    return (
    <section className="my-12 gap-4 flex flex-col">
        <div className="flex flex-col md:flex-row gap-4">
            <Input
            placeholder="Search GPUs by name..."
            className="w-full md:w-1/2"
            disabled
            />
            <Select disabled>
                <SelectTrigger className="w-full md:w-1/6">
                    <SelectValue placeholder="Resolutions" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1080p,1440p,4k">All Resolutions</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="1440p">1440p</SelectItem>
                    <SelectItem value="4k">4K</SelectItem>
                </SelectContent>
            </Select>
            <Input
            type="number"
            placeholder="Min Price"
            className="w-full md:w-1/6"
            disabled
            />
            <Input
            type="number"
            placeholder="Max Price"
            className="w-full md:w-1/6"
            disabled
            />
        </div>
        <div className="flex flex-wrap gap-4">
            <Label className="flex items-center space-x-2">
                <Checkbox disabled />
                <span>NVIDIA</span>
            </Label>
            <Label className="flex items-center space-x-2">
                <Checkbox disabled />
                <span>AMD</span>
            </Label>
            <Label className="flex items-center space-x-2">
                <Checkbox disabled />
                <span>Intel</span>
            </Label>
        </div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[30%]">Name</TableHead>
                    <TableHead className="w-[10%]">Score</TableHead>
                    <TableHead className="w-[10%]">Price (€)</TableHead>
                    <TableHead className="w-[10%]">Price/Perf</TableHead>
                    <TableHead className="w-[10%]">VRAM</TableHead>
                    <TableHead className="w-[15%]">Store</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[...Array(5)].map((_, index) => (
                    <TableRow key={index}>
                        <TableCell><Skeleton className="h-6 w-full" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-12" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                        <TableCell><Skeleton className="h-6 w-20" /></TableCell>
                        <TableCell><Skeleton className="h-10 w-24" /></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                    >
                    <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    className="bg-white rounded-lg shadow-xl p-6 max-w-sm w-full mx-4"
                    >
                    <div className="flex flex-col items-center space-y-4">
                        <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                        <Loader />
                    </motion.div>
                    <h2 className="text-2xl font-semibold text-center">Loading Best Prices</h2>
                    <motion.p
                    key={currentMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground text-center h-12 flex items-center"
                    >
                    {currentMessage}
                </motion.p>
            </div>
        </motion.div>
    </motion.div>
    )}
</AnimatePresence>
</section>
)
}

export default GPUTableSkeleton