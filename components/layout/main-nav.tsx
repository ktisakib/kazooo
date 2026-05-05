import Link from "next/link"
import { siteConfig } from "@/config/site"
import NavLinks from "./nav-links"

export function MainNav() {
    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="items-center space-x-2 md:flex">
                <span className="font-bold sm:inline-block">{ siteConfig.name }</span>
            </Link>
            <NavLinks />
        </div>
    )
}
