import Image from "next/image";
import Link from "next/link";

const Billboard = () => {
    return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 my-12">
        <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                <div>
                    <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-primary">
                        Powerful PCs, Tailored for You
                    </h1>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Discover Modex's pre-built PCs, designed to deliver exceptional performance and unmatched reliability.
                    </p>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row mt-6">
                        <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                        >
                        Explore Gaming PCs
                        </Link>
                </div>
            </div>
            <div>
                <Image src="/test2.jpg" width={800} height={600} quality={100} alt="Billboard image" className="mx-auto aspect-video overflow-hidden rounded-xl object-cover" />
            </div>
        </div>
    </div>
</section>
);
};

export default Billboard;
