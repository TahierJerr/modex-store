import LoadingNow from "@/components/loading"

export default function Loading() {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center">
            <LoadingNow />
        </div>
    )
}