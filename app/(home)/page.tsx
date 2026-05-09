import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function HomePage() {
    return (
        <div className="relative flex h-screen w-full items-center justify-center">
            <section className="flex flex-col items-center gap-10 text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    { siteConfig.name }
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    A modern web application built with Next.js 15, Supabase, Prisma,
                    shadcn/ui, and TypeScript. Jumpstart your development process and
                    focus on building your app&apos;s unique features.
                </p>
                <div className="flex gap-4">
                    <Link href="/signup" className={ buttonVariants({ size: "lg" }) }>
                        Get Started
                    </Link>
                    <Link
                        target="_blank"
                        rel="noreferrer"
                        href={ siteConfig.links.github }
                        className={ buttonVariants({ variant: "outline", size: "lg" }) }
                    >
                        GitHub
                    </Link>
                </div>
            </section>
        </div>
    )
}
