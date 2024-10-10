import getGraphics from "@/actions/get-graphics"
import GpuTable from "@/components/gpu-table"
import Container from "@/components/ui/container"
import { ClockIcon, MonitorIcon, SlidersHorizontalIcon, TrendingUpIcon } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'MODEX | GPU Price to Performance Comparison',
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

const GPUComparisonToolPage = async () => {
    const data = await getGraphics()

    return (
    <header className="min-h-screen">
        <Container>
        <div className="w-full max-w-7xl mx-auto p-4 space-y-6 my-12">
            <div className="text-center">
            <h1 className="text-3xl font-bold">MODEX GPU Price to Performance Comparison</h1>
            <p className="text-gray-500 mt-2">Find the perfect graphics card for your gaming and creative needs</p>
            </div>
            <div className="text-left justify-around gap-4 py-10 grid sm:grid-cols-4 w-full">
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center"><ClockIcon className="text-gray-400" size={32} strokeWidth={1.5} /> Real-time price updates and performance scores</span>
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center"><MonitorIcon className="text-gray-400" size={32} strokeWidth={1.5} /> Easy comparison across multiple resolutions</span>
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center"><SlidersHorizontalIcon className="text-gray-400" size={32} strokeWidth={1.5} /> Customizable filters to match your exact requirements</span>
                    <span className="text-sm bg-gray-50/10 border border-gray-200 p-6 rounded-md flex gap-4 items-center"><TrendingUpIcon className="text-gray-400" size={32} strokeWidth={1.5} /> Expert insights on price-to-performance ratios</span>
                </div>
            <GpuTable data={data} />
        </div>
        </Container>
    </header>
    )
}

export default GPUComparisonToolPage