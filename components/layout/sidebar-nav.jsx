"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { handleSignOut } from "@/lib/actions"
import { cn } from "@/lib/utils"

import { useAuth } from "/components/providers/supabase/supabase-auth-provider.js"
import { buttonVariants } from "/components/ui/button"

export function SidebarNav({ className, items, ...props }) {
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
      <form action={handleSignOut}>
        <button
          type="submit"
          
          // onClick={()=> signOut()}
          className={cn(buttonVariants({ variant: "ghost" }), " justify-start")}
        >
          {" "}
          Logout
        </button>
      </form>
    </nav>
  )
}
