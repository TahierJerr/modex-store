import Image from 'next/image'

export default function Loading() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black">
            <div className="max-w-screen-sm max-h-screen-sm text-center">
                <Image
                    src="/path/to/loading-logo.png"
                    alt="Loading Logo"
                    width={300}
                    height={300}
                    quality={100}
                    className="mx-auto"
                    priority={true}
                    fetchPriority='high'
                />
                <p className="text-primary font-semibold">Loading<span className="loading-dot">...</span></p>
            </div>
        </div>
    )
}