
import Link from "next/link"

import { siteConfig } from "@/config/site"
import NavLinks from "./NavLinks"
import Logo from "./logo"



export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className=" items-center space-x-2 md:flex">
       <Logo className="h-10 w-10" />
        <span className="sr-only font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <NavLinks pages={siteConfig.pages} />
    </div>
  )
}
