import { Skeleton } from "@/components/ui/skeleton"

export default function AuthLoading() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Skeleton className="h-8 w-48" />
        </div>
    )
}
