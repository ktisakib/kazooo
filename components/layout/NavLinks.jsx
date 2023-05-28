
import Link from "next/link"


import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

const NavLinks = () => {
  const pages = siteConfig.pages
  
  return (
    <nav className="hidden gap-6 md:flex">
      {pages.map(
        (page, index) =>
          page.href && (
            <Link
              key={index}
              href={page.href}
              className={cn(
                "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                page.disabled && "cursor-not-allowed opacity-80"
              )}
            >
              {page.title}
            </Link>
          )
      )}
    </nav>
  )
}

export default NavLinks
