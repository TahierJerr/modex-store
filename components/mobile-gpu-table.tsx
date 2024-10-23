"use client"

import { Graphics } from '@/types'
import React, { useEffect, useMemo, useState } from 'react'
import Loader from './ui/loading'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { CheckIcon, ChevronDown, ChevronUp, Edit, ShoppingBasketIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from './ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Button } from './ui/button'

interface GpuTableProps {
    data: Graphics[]
}

type SortKey = 'name' | 'performance' | 'price' | 'pricePerformance'
type Resolution = '1080p' | '1440p' | '4k'
type Brand = 'NVIDIA' | 'AMD' | 'Intel'

const MobileGpuTable: React.FC<GpuTableProps> = ({ data }) => {
    const [search, setSearch] = useState('')
    const [sortKey, setSortKey] = useState<SortKey>('pricePerformance')
        const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
        const [gpus, setGpus] = useState(data)
        const [editingId, setEditingId] = useState<string | null>(null)
            const [selectedResolutions, setSelectedResolutions] = useState<Resolution[]>(['1080p', '1440p', '4k'])
            const [minPrice, setMinPrice] = useState('')
            const [maxPrice, setMaxPrice] = useState('')
            const [selectedBrands, setSelectedBrands] = useState<Brand[]>(['NVIDIA', 'AMD', 'Intel'])
            const [loading, setLoading] = useState(true); // Loading state
            
            const brands = [
            { name: "NVIDIA", color: "green" },
            { name: "AMD", color: "red" },
            { name: "Intel", color: "blue" },
            ]
            
            useEffect(() => {
                if (data) {
                    setGpus(data);
                    setLoading(false); // Set loading to false once data is received
                }
            }, [data]);
            
            
            const sortedAndFilteredGPUs = useMemo(() => {
                return gpus
                .filter(gpu => 
                (gpu.name.toLowerCase().includes(search.toLowerCase()) ||
                gpu.memory.toLowerCase().includes(search.toLowerCase())) &&
                (selectedResolutions.length === 0 || // Show all if no resolutions are selected
                (selectedResolutions.includes('4k') && gpu.performance >= 200) ||
                (selectedResolutions.includes('1440p') && gpu.performance >= 110) ||
                (selectedResolutions.includes('1080p') && gpu.performance >= 60)) &&
                (minPrice === '' || gpu.price >= parseInt(minPrice)) &&
                (maxPrice === '' || gpu.price <= parseInt(maxPrice)) &&
                selectedBrands.includes(gpu.brand as Brand)
                )
                .sort((a, b) => {
                    let aValue: number
                    let bValue: number
                    if (sortKey === 'pricePerformance') {
                        aValue = a.price / a.performance
                        bValue = b.price / b.performance
                    } else {
                        aValue = a[sortKey] as number
                        bValue = b[sortKey] as number
                    }
                    if (sortKey === 'pricePerformance') {
                        aValue = a.price / a.performance
                        bValue = b.price / b.performance
                    }
                    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1
                    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1
                    return 0
                })
            }, [search, sortKey, sortOrder, gpus, selectedResolutions, minPrice, maxPrice, selectedBrands])
            
            const handleSort = (key: SortKey) => {
                if (sortKey === key) {
                    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
                } else {
                    setSortKey(key)
                    setSortOrder('asc')
                }
            }
            
            const handlePriceChange = (id: string, newPrice: string) => {
                const updatedGpus = gpus.map(gpu => 
                gpu.id === id ? { ...gpu, price: parseFloat(newPrice) || 0 } : gpu
                )
                setGpus(updatedGpus)
                setEditingId(null)
            }
            
            const handleResolutionChange = (value: string) => {
                const resolutions = value.split(',') as Resolution[]
                setSelectedResolutions(resolutions)
            }
            
            const handleBrandChange = (brand: Brand) => {
                setSelectedBrands(prev => 
                prev.includes(brand) 
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
                )
            }
            return (
            <section className='gap-4 flex flex-col'>
                {loading ? (
                    <Loader />
                    ) : (
                    <>
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input
                        placeholder="Search GPUs"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/2"
                        />
                        <Select
                        onValueChange={handleResolutionChange}
                        defaultValue={selectedResolutions.join(',')}
                        >
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
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full md:w-1/6"
                    />
                    <Input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full md:w-1/6"
                    />
                </div>
                <div className="flex justify-between">
                    <Label className='cursor-pointer'>
                        <Checkbox
                        checked={selectedBrands.includes('NVIDIA')} 
                        onCheckedChange={() => handleBrandChange('NVIDIA')}
                        className="hidden"
                        />
                        <motion.div
                        layout
                        initial={false}
                        animate={{
                        paddingLeft: selectedBrands.includes('NVIDIA') ? "1rem" : "0.75rem",
                        paddingRight: selectedBrands.includes('NVIDIA') ? "1rem" : "0.75rem",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`flex items-center justify-center rounded-full border shadow transition-colors py-1 ${
                        selectedBrands.includes('NVIDIA')
                        ? `bg-green-500/30 border-green-500`
                        : 'bg-gray-100 border-gray-300'
                    }`}
                    >
                    <span className="text-sm font-semibold ">NVIDIA</span>
                    <AnimatePresence initial={false} mode="wait">
                        {selectedBrands.includes('NVIDIA') ? (
                        <motion.div
                        key="check"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`ml-2 text-green-500 overflow-hidden`}
                        >
                        <CheckIcon className="w-5 h-5" />
                    </motion.div>
                    ) : (
                    <motion.div
                    key="x"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className={`ml-2 text-gray-400 overflow-hidden`}
                    >
                    <XIcon className="w-5 h-5" />
                </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    </Label>
    <Label className='cursor-pointer'>
        <Checkbox
        checked={selectedBrands.includes('AMD')} 
        onCheckedChange={() => handleBrandChange('AMD')}
        className="hidden"
        />
        <motion.div
        layout
        initial={false}
        animate={{
        paddingLeft: selectedBrands.includes('AMD') ? "1rem" : "0.75rem",
        paddingRight: selectedBrands.includes('AMD') ? "1rem" : "0.75rem",
    }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className={`flex items-center justify-center rounded-full border shadow transition-colors py-1 ${
        selectedBrands.includes('AMD')
        ? `bg-red-500/30 border-red-500`
        : 'bg-gray-100 border-gray-300'
    }`}
    >
    <span className="text-sm font-semibold ">AMD</span>
    <AnimatePresence initial={false} mode="wait">
        {selectedBrands.includes('AMD') ? (
        <motion.div
        key="check"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`ml-2 text-red-500 overflow-hidden`}
        >
        <CheckIcon className="w-5 h-5" />
    </motion.div>
    ) : (
    <motion.div
    key="x"
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -20, opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={`ml-2 text-gray-400 overflow-hidden`}
    >
    <XIcon className="w-5 h-5" />
</motion.div>
)}
</AnimatePresence>
</motion.div>
</Label>
<Label className='cursor-pointer'>
    <Checkbox
    checked={selectedBrands.includes('Intel')} 
    onCheckedChange={() => handleBrandChange('Intel')}
    className="hidden"
    />
    <motion.div
    layout
    initial={false}
    animate={{
    paddingLeft: selectedBrands.includes('Intel') ? "1rem" : "0.75rem",
    paddingRight: selectedBrands.includes('Intel') ? "1rem" : "0.75rem",
}}
transition={{ duration: 0.3, ease: "easeInOut" }}
className={`flex items-center justify-center rounded-full border shadow transition-colors py-1 ${
    selectedBrands.includes('Intel')
    ? `bg-blue-500/30 border-blue-500`
    : 'bg-gray-100 border-gray-300'
}`}
>
<span className="text-sm font-semibold ">Intel</span>
<AnimatePresence initial={false} mode="wait">
    {selectedBrands.includes('Intel') ? (
    <motion.div
    key="check"
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -20, opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={`ml-2 text-blue-500 overflow-hidden`}
    >
    <CheckIcon className="w-5 h-5" />
</motion.div>
) : (
<motion.div
key="x"
initial={{ x: -20, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
exit={{ x: -20, opacity: 0 }}
transition={{ duration: 0.2, ease: "easeOut" }}
className={`ml-2 text-gray-400 overflow-hidden`}
>
<XIcon className="w-5 h-5" />
</motion.div>
)}
</AnimatePresence>
</motion.div>
</Label>
</div>
<Table className='text-xs'>
    <TableHeader>
        <TableRow>
            <TableHead className="w-[40%] cursor-pointer" onClick={() => handleSort('name')}>
                    GPU
            </TableHead>
            <TableHead className="w-[5%] cursor-pointer" onClick={() => handleSort('price')}>
                    Price (€)
            </TableHead>
            <TableHead className="w-[5%] cursor-pointer" onClick={() => handleSort('pricePerformance')}>
                    €/P
            </TableHead>
            <TableHead className="w-[5%]">Store</TableHead>
        </TableRow>
    </TableHeader>
    
    <TableBody>
        <AnimatePresence>
            {sortedAndFilteredGPUs.map((gpu) => (
                <motion.tr
                className='hover:bg-gray-100 duration-300 transition-colors'
                key={gpu.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                layout
                >
                <TableCell className="font-medium">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <span>{gpu.name}</span>
                    </div>
                </TableCell>
                <TableCell>
                    {editingId === gpu.id ? (
                        <Input
                        type="number"
                        defaultValue={gpu.price}
                        onBlur={(e) => handlePriceChange(gpu.id, e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handlePriceChange(gpu.id, e.currentTarget.value)
                            }
                        }}
                        className="w-20"
                        />
                        ) : (
                        <div className="flex items-center">
                            €{gpu.price.toFixed(2)}
                            <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setEditingId(gpu.id)}
                            className="ml-2"
                            >
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Edit price</span>
                        </Button>
                    </div>
                    )}
                </TableCell>
                <TableCell>
                    <div className="flex items-center">
                        {(gpu.price / gpu.performance).toFixed(2)}
                    </div>
                </TableCell>
                <TableCell>
                    <a href={gpu.productUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-md bg-black text-white">
                        <ShoppingBasketIcon strokeWidth={1.5} size={18} className="sm:ml-2" />
                    </a>
                </TableCell>
            </motion.tr>
            ))}
        </AnimatePresence>
    </TableBody>
</Table>
</>
)}
</section>
)
}

export default MobileGpuTable