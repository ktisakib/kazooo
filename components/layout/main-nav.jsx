
import Link from "next/link"

import { siteConfig } from "@/config/site"
import NavLinks from "./NavLinks"



export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className=" items-center space-x-2 md:flex">
        <svg
          className="h-10 w-10 "
          viewBox="0 0 1181 1865"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 1803.04V335.739C0.5 320.172 6.45177 305.193 17.1364 293.872L188.636 112.146C226.523 72.0001 294 98.8127 294 154.013V418.551C294 479.161 372.816 502.677 406.027 451.976L618.645 127.388C627.219 114.299 640.387 105.022 655.628 101.483C814.226 64.6478 1106.7 0.5 1174 0.5C1240.78 0.5 738.752 474.919 435.501 752.583C407.897 777.857 409.311 821.708 438.45 845.195L943.265 1252.1C964.19 1268.97 971.611 1297.54 961.537 1322.46L843.707 1613.89C827.415 1654.19 775.407 1665 744.403 1634.54L423.13 1318.88C381.458 1277.93 311.617 1313.34 320.011 1371.15L374.584 1747.04C379.286 1779.42 357.594 1809.75 325.426 1815.76L72.7085 1863C35.1778 1870.02 0.5 1841.22 0.5 1803.04Z"
            fill="#D9D9D9"
          />
        </svg>
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <NavLinks pages={siteConfig.pages} />
    </div>
  )
}