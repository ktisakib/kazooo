export type SiteConfig = {
    logo: string
    name: string
    description: string
    pages: { title: string; href: string; disabled?: boolean }[]
    links: {
        twitter: string
        github: string
    }
}

export const siteConfig: SiteConfig = {
    logo: "/logo.svg",
    name: "Kazoo",
    description:
        "A modern web application built with Next.js 15, Supabase, Prisma, shadcn/ui, and TypeScript.",
    pages: [
        {
            title: "Dashboard",
            href: "/dashboard",
        },
        {
            title: "Settings",
            href: "/settings",
        },
    ],
    links: {
        twitter: "https://twitter.com/ktisakib",
        github: "https://github.com/ktisakib/kazooo",
    },
}
