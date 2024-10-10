import Link from "next/link"
import Container from "./ui/container"

const WhyModex = () => {
    return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <Container>
            <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary">Why Modex</div>
                    <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary">
                        Exceptional Quality, Unparalleled Service
                    </h2>
                    <Link
                    href="/gaming-pcs"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    >
                    Explore PCs
                </Link>
            </div>
            <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                    At Modex, we are committed to delivering exceptional quality and unparalleled customer service. Our
                    pre-built PCs are meticulously crafted with the finest components, ensuring reliable performance and
                    long-lasting durability. Our knowledgeable support team is always here to assist you with any
                    questions or issues you may have, ensuring a seamless experience from start to finish.
                </p>
        </div>
    </div>
</Container>
</section>
)
}

export default WhyModex