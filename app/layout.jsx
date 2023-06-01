import "server-only"
import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/layout/site-header"
import { TailwindIndicator } from "@/components/layout/tailwind-indicator"
import SupabaseAuthProvider from "@/components/providers/supabase/supabase-auth-provider.js"
import SupabaseProvider from "@/components/providers/supabase/supabase-provider.js"
import { createClient } from "@/components/providers/supabase/supabase-server.js"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const dynamic = "force-dynamic"
export const metadata = {
  metadataBase: new URL(`${process.env.NEXT_URL}/api/og`),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "starter",
    "tailwind",
    "next13",
    "app",
    "appDir",
    "server side",
    "client side",
    "swr",
    "supabase-auth",
    "next-font",
    "next-metadata",
    "next-seo",
    "next-sitemap",
    "supabase",
    "supabase-auth",
    "postgres",
    "postgresql",
    "prisma",
    "yup",
    "radix/ui",
    "shadcn/ui",
    "lucide",
    "ktisakib",
  ],
  openGraph: {
    images: [
      `${process.env.NEXT_URL ? "https://" + process.env.NEXT_URL : ""}/api/og`,
    ],
  },
  authors: [
    {
      name: "ktisakib",
      url: "github.com/ktisakib",
    },
  ],
}

export default async function RootLayout({ children, auth }) {
  const supabase = createClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return (
    <>
      <html lang="en">
        <body className={cn(" font-sans antialiased", fontSans.variable)}>
          <SupabaseProvider>
            <SupabaseAuthProvider serverSession={session}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <SiteHeader />
                <main className="relative mx-auto">
                  {children}
                  {auth}
                </main>
                <TailwindIndicator />
                <Toaster />
                <Analytics/>
              </ThemeProvider>
            </SupabaseAuthProvider>
          </SupabaseProvider>
        </body>
      </html>
    </>
  )
}
