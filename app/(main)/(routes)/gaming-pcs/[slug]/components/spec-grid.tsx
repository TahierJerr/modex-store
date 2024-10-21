import Container from '@/components/ui/container'
import { Computer } from '@/types'
import { Cpu, MemoryStick, Bolt } from 'lucide-react'
import Image from 'next/image'

interface SpecGridProps {
    data: Computer
    processorImage?: string
    memoryImage?: string
    graphicsImage?: string
}

const SpecGrid: React.FC <SpecGridProps> = ({ data, processorImage, memoryImage, graphicsImage }) => {

    const coresNumber = parseInt(data.processor.cores)

    const threads = coresNumber * 2
    return (
    <section className='py-12 md:py-16 lg:py-20 bg-muted'>
        <Container>
            <h2 className="text-3xl font-bold mb-6 text-center">Computer Components Showcase</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 h-[800px]">
    <div className="col-span-1 sm:col-span-2 row-span-1 bg-slate-950 shadow-lg rounded-lg overflow-hidden relative">
        <Image
            src="/Processor-image.webp"
            alt="CPU"
            layout="fill"
            objectFit="cover"
        />
        <div className="absolute top-0 left-0 p-4">
            <h3 className="text-white text-2xl font-bold">Powered by the {data.processor.name}</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
            <p className="text-white text-lg mb-2">High-Performance Processor</p>
            <div className="flex items-center text-sm text-gray-300">
                <Cpu className="mr-2" size={16} />
                <span>{data.processor.baseSpeed}, {data.processor.cores} cores, {threads} threads</span>
            </div>
        </div>
    </div>
    <div className="col-span-1 sm:col-span-2 lg:col-span-3 bg-slate-950 shadow-lg rounded-lg overflow-hidden relative">
        <Image
            src="/placeholder.svg?height=200&width=600"
            alt="RAM"
            layout="fill"
            objectFit="cover"
        />
        <div className="absolute top-0 right-0 p-4">
            <h3 className="text-white text-2xl font-bold">Paired with the {data.memory.name}</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
            <p className="text-white text-lg mb-2">Lightning-Fast Memory</p>
            <div className="flex items-center text-sm text-gray-300">
                <MemoryStick className="mr-2" size={16} />
                <span>32GB DDR4, 3200MHz</span>
            </div>
        </div>
    </div>
    <div className="col-span-1 sm:col-span-2 lg:col-span-5 bg-slate-950 shadow-lg rounded-lg overflow-hidden relative">
        <Image
            src="/placeholder.svg?height=200&width=1200"
            alt="GPU"
            layout="fill"
            objectFit="cover"
        />
        <div className="absolute top-0 left-0 p-4">
            <h3 className="text-white text-2xl font-bold">{data.graphics.name}</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50">
            <p className="text-white text-lg mb-2">Cutting-Edge Graphics Card</p>
            <div className="flex items-center text-sm text-gray-300">
                <Bolt className="mr-2" size={16} />
                <span>{data.graphics.memory} {data.graphics.memoryType}, {data.graphics.maxClock}</span>
            </div>
        </div>
    </div>
</div>
        </Container>
    </section>
    )
}

export default SpecGrid