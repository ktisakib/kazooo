import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Skeleton className="h-12 w-12 rounded-full" />
        </div>
    )
}
