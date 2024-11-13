import { ShoppingCart, Cpu, HardDrive, Fan, Zap, MemoryStick, CpuIcon, Gamepad2, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from 'next/image'
import Container from '@/components/ui/container'

const performanceData = {
    gaming: [
    { game: 'Cyberpunk 2077', fps: 120 },
    { game: 'Fortnite', fps: 240 },
    { game: 'Call of Duty: Warzone', fps: 180 },
    { game: 'Assassin\'s Creed Valhalla', fps: 110 },
    ],
    productivity: [
    { task: '4K Video Rendering', time: '15 minutes' },
    { task: 'Photoshop Image Processing', time: '2 seconds' },
    { task: '3D Modeling', time: 'Real-time' },
    { task: 'Code Compilation', time: '30 seconds' },
    ]
}

const BlackoutUltraPage = () => {
    return (
        <>
            <section className='min-h-screen bg-gradient-conic from-black via-slate-950 to-black flex items-center'>
                <Container>
                    <div className='flex items-center justify-center flex-col gap-4'>
                        <h1 className='text-white text-5xl'>
                            The Blackout Ultra
                        </h1>
                        <p 
                        className='text-white text-xl text-center'
                        >
                            The ultimate gaming PC for high-performance gaming and content creation
                        </p>
                        <Image src='/gaming-pc.webp' alt='Gaming PC' width={600} height={600} />
                    </div>
                </Container>
            </section>
            <section>
                
            </section>
            </>
    )
}

export default BlackoutUltraPage