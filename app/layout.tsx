import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import "@/app/globals.css"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { SiteHeader } from "@/components/layout/site-header"
import { TailwindIndicator } from "@/components/layout/tailwind-indicator"
import { AuthProvider } from "@/components/providers/auth-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Geist, Geist_Mono } from "next/font/google"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={ cn(
                    "min-h-screen font-sans antialiased",
                    geistSans.variable,
                    geistMono.variable
                ) }
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider>
                        <AuthProvider>
                            <SiteHeader />
                            <main className="relative mx-auto">{ children }</main>
                            <TailwindIndicator />
                            <Toaster />
                        </AuthProvider>
                    </TooltipProvider>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
