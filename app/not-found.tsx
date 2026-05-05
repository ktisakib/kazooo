import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center gap-6">
            <h1 className="text-2xl font-semibold">Page Not Found</h1>
            <p className="text-muted-foreground">
                The page you are looking for does not exist.
            </p>
            <Link
                href="/"
                className={ buttonVariants({ variant: "secondary", size: "lg" }) }
            >
                Go to Home
            </Link>
        </div>
    )
}
