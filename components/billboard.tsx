import { Star } from "lucide-react"
import Image from "next/image"
import Container from "./ui/container"
import Link from "next/link"

export default function Component() {
    return (
    <section className="w-full my-12 sm:my-16 md:my-40">
        <Container>
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] px-4">
                <div className="flex items-center justify-center">
                    <Image
                    src="/gaming-pc.webp"
                    width={500}
                    height={500}
                    alt="Billboard Image"
                    priority
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="gap-6 flex flex-col">
                    <div className="flex w-full">
                                {[...Array(4)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                                    <div className="text-sm text-muted-foreground pt-0.5 ms-2">
                                        Trusted by 20+ satisfied customers
                                    </div>
                                </div>
                        <h1 className="text-4xl font-bold">
                            High-Performing PCs at Unbeatable Value
                        </h1>
                        <h2 className="max-w-[600px] text-muted-foreground md:text-xl">
                            MODEX delivers cutting-edge computers that maximize your budget without compromising on quality or performance.
                        </h2>
                            <Link href="/gaming-pcs" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors w-fit">Explore Gaming PCs</Link>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </section>
        )
    }