
import getComputer from "@/actions/get-computer"
import { Cpu, Zap, EuroIcon, HeadsetIcon } from "lucide-react"
import Image from "next/image"

export default async function GamingPcHero() {

    const computer = await getComputer("31d361ce-ead0-4e95-a75a-1b3b656136a1")
    return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        Pure Performance. No Fuss.
                    </h1>
                    <p className="mx-auto max-w-[700px] text-zinc-400 md:text-xl dark:text-zinc-400">
                        Unleash the power of our all-black prebuilt gaming PCs. Engineered for gamers who demand excellence and value.
                    </p>
                </div>
                <div>
                    {/* new image */}
                    <Image src={computer.images[0].url} alt="Gaming PC" width={800} height={600} quality={100} className="object-contain w-full h-64 bg-black pt-1" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8">
                    <div className="flex flex-col items-center space-y-2">
                        <Cpu className="h-8 w-8 text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-400 text-center">High-End Components</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <Zap className="h-8 w-8 text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-400 text-center">Optimized Performance</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <EuroIcon className="h-8 w-8 text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-400 text-center">Best Price-to-Performance Ratio</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <HeadsetIcon className="h-8 w-8 text-zinc-500" />
                        <span className="text-sm font-medium text-zinc-400 text-center">Personal Support, No AI</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}