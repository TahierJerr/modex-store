export const maxDuration = 60;

import GPUTableLoad from "@/components/gpu-table-load"
import GPUTableSkeleton from "@/components/skeleton/gpu-table-skeleton"
import Container from "@/components/ui/container"
import { ClockIcon, MonitorIcon, SlidersHorizontalIcon, TrendingUpIcon, EditIcon } from "lucide-react"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Compare GPUs by Price and Performance | MODEX',
    description: 'Find the perfect graphics card for your gaming and creative needs. Compare real-time price updates and performance scores across multiple resolutions.',
    keywords: [
    'Graphics Card', 'GPU', 'Graphics Processing Unit', 'GPU Comparison', 'GPU Price to Performance', 'GPU Price Comparison', 
    'GPU Performance Comparison', 'GPU Benchmark', 'GPU Price', 'GPU Performance', 'GPU Price Performance', 'GPU Price to Performance Ratio', 
    'GPU Price to Performance Comparison', 'GPU Performance to Price Ratio', 'GPU Performance to Price Comparison', 'GPU Price to Performance Chart', 
    'GPU Price to Performance List', 'GPU Price to Performance Table', 'GPU Price to Performance Comparison Tool', 'GPU Price to Performance Comparison Chart', 
    'GPU Price to Performance Comparison List', 'GPU Price to Performance Comparison Table', 'GPU Price to Performance Comparison Website', 
    'GPU Price to Performance Comparison Page', 'GPU Price to Performance Comparison Tool Page', 'GPU Price to Performance Comparison Chart Page', 
    'GPU Price to Performance Comparison List Page', 'GPU Price to Performance Comparison Table Page', 'GPU Price to Performance Comparison Website Page', 
    'GPU Price to Performance Comparison Tool Website', 'GPU Price to Performance Comparison Chart Website', 'GPU Price to Performance Comparison List Website', 
    'GPU Price to Performance Comparison Table Website', 'GPU Price to Performance Comparison Website', 'GPU Price to Performance Comparison Tool Website', 
    'GPU Price to Performance Comparison Chart Website', 'GPU Price to Performance Comparison List Website', 'GPU Price to Performance Comparison Table Website', 
    'GPU Price to Performance Comparison Website', 'GPU Price to Performance Comparison Tool Website', 'GPU Price to Performance Comparison Chart Website',
    ]
}

const GPUComparisonToolPage = () => {
    
    return (
    <header className="min-h-screen w-full py-12 md:py-24 lg:py-24 xl:py-32">
        <Container>
            <div className="w-full max-w-7xl mx-auto p-4 space-y-6 my-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">GPU Price to Performance Comparison</h1>
                    <p className="text-gray-500 mt-2">MODEX helps you find the perfect graphics card for your gaming needs</p>
                </div>
                <div className="text-left justify-around gap-4 py-10 grid sm:grid-cols-4 w-full">
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center">
                        <ClockIcon className="text-gray-400" size={32} strokeWidth={1.5} /> Real-time price updates and performance scores
                    </span>
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center">
                        <MonitorIcon className="text-gray-400" size={32} strokeWidth={1.5} /> Easy comparison across multiple resolutions
                    </span>
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center">
                        <SlidersHorizontalIcon className="text-gray-400" size={32} strokeWidth={1.5} /> Customizable filters to match your exact requirements
                    </span>
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center">
                        <EditIcon className="text-gray-400" size={22} strokeWidth={1.5} /> Found a cheaper price? Edit it!
                    </span>
                </div>
                <Suspense fallback={<GPUTableSkeleton />}>
                <GPUTableLoad />
            </Suspense>
        </div>
    </Container>
</header>
)
}

export default GPUComparisonToolPage