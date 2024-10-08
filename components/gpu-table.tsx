"use client"

import { useMemo, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { motion, AnimatePresence } from 'framer-motion'
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip'
import { ChevronDown, ChevronUp, Edit, Info, ShoppingBasketIcon } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Label } from './ui/label'
import { Checkbox } from './ui/checkbox'
import { TooltipProvider } from './ui/tooltip'
import { Graphics } from '@/types'
import { Badge } from './ui/badge'

interface GpuTableProps {
    data: Graphics[]
}

type SortKey = 'name' | 'performance' | 'price' | 'pricePerformance'
type Resolution = '1080p' | '1440p' | '4k'
type Brand = 'NVIDIA' | 'AMD' | 'Intel'

const GpuTable: React.FC<GpuTableProps> = ({ data }) => {
    const [search, setSearch] = useState('')
    const [sortKey, setSortKey] = useState<SortKey>('pricePerformance')
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
    const [gpus, setGpus] = useState(data)
        const [editingId, setEditingId] = useState<string | null>(null)
            const [selectedResolutions, setSelectedResolutions] = useState<Resolution[]>(['1080p', '1440p', '4k'])
            const [minPrice, setMinPrice] = useState('')
            const [maxPrice, setMaxPrice] = useState('')
            const [selectedBrands, setSelectedBrands] = useState<Brand[]>(['NVIDIA', 'AMD', 'Intel'])
            
            
            const sortedAndFilteredGPUs = useMemo(() => {
                return gpus
                .filter(gpu => 
                (gpu.name.toLowerCase().includes(search.toLowerCase()) ||
                gpu.memory.toLowerCase().includes(search.toLowerCase())) &&
                (selectedResolutions.length === 0 || // Show all if no resolutions are selected
                (selectedResolutions.includes('4k') && gpu.performance >= 200) ||
                (selectedResolutions.includes('1440p') && gpu.performance >= 110) ||
                (selectedResolutions.includes('1080p') && gpu.performance >= 80)) &&
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
            <TooltipProvider>
                <section className="    my-12 gap-4 flex flex-col">
                    <div className="flex flex-col md:flex-row gap-4">
                        <Input
                        placeholder="Search GPUs by name..."
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
                <div className="flex flex-wrap gap-4">
                    <Label className="flex items-center space-x-2">
                        <Checkbox
                        checked={selectedBrands.includes('NVIDIA')} 
                        onCheckedChange={() => handleBrandChange('NVIDIA')}
                        />
                        <span>NVIDIA</span>
                    </Label>
                    <Label className="flex items-center space-x-2">
                        <Checkbox 
                        checked={selectedBrands.includes('AMD')} 
                        onCheckedChange={() => handleBrandChange('AMD')}
                        />
                        <span>AMD</span>
                    </Label>
                    <Label className="flex items-center space-x-2">
                        <Checkbox 
                        checked={selectedBrands.includes('Intel')} 
                        onCheckedChange={() => handleBrandChange('Intel')}
                        />
                        <span>Intel</span>
                    </Label>
                </div>
                <Table>
                    <TableHeader >
                        <TableRow>
                            <TableHead className="w-[30%] cursor-pointer" onClick={() => handleSort('name')}>
                                <span className='flex items-center'>
                                    Name {sortKey === 'name' && (sortOrder === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />)}
                                </span>
                            </TableHead>
                            <TableHead className="w-[10%] cursor-pointer" onClick={() => handleSort('performance')}>
                                <span className='flex items-center'>
                                    Score {sortKey === 'performance' && (sortOrder === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />)}
                                </span>
                            </TableHead>
                            <TableHead className="w-[10%] cursor-pointer" onClick={() => handleSort('price')}>
                                <span className='flex items-center'>
                                    Price (€) {sortKey === 'price' && (sortOrder === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />)}
                                </span>
                            </TableHead>
                            <TableHead className="w-[10%] cursor-pointer" onClick={() => handleSort('pricePerformance')}>
                                <span className='flex items-center'>
                                    Price/Perf {sortKey === 'pricePerformance' && (sortOrder === 'asc' ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />)}
                                </span>
                            </TableHead>
                            <TableHead className="w-[10%]">VRAM</TableHead>
                            <TableHead className="w-[10%]">Store</TableHead>
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
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                        <span>{gpu.name}</span>
                                        <div className="hidden sm:flex flex-wrap gap-1 mt-1 sm:mt-0">
                                            {gpu.performance >= 80 && <Badge variant="secondary">1080p</Badge>}
                                            {gpu.performance >= 110 && <Badge variant="secondary">1440p</Badge>}
                                            {gpu.performance >= 200 && <Badge variant="secondary">4K</Badge>}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex items-center">
                                                {gpu.performance}
                                                <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className='bg-white border rounded-md px-4 py-2'>
                                            <p>Performance score is relative to RTX 3060 12GB (score: 100)</p>
                                        </TooltipContent>
                                    </Tooltip>
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
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="flex items-center">
                                                {(gpu.price / gpu.performance).toFixed(2)}
                                                <Info className="h-4 w-4 ml-2 text-muted-foreground" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className='bg-white border rounded-md px-4 py-2'>
                                            <p>Calculated as Price / Performance Score</p>
                                            <p>Lower values indicate better value for money</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>{gpu.memory + ' ' + gpu.memoryType}</TableCell>
                                <TableCell>
                                    <a href={gpu.productUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-2 rounded-md bg-black text-white">
                                        <span className='hidden sm:flex'>Buy here</span>
                                        <ShoppingBasketIcon strokeWidth={1.5} size={18} className="sm:ml-2" />
                                    </a>
                                </TableCell>
                            </motion.tr>
                            ))}
                        </AnimatePresence>
                    </TableBody>
                </Table>
            </section>
        </TooltipProvider>
        )
    }
    
    export default GpuTable