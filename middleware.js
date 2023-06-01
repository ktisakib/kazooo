import { NextResponse } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

export async function middleware(req) {
  const res = NextResponse.next()
  const pathname = req.nextUrl.pathname

  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()
// console.log(session.user)
  if (
    !session &&
    (pathname.startsWith("/dashboard") || pathname.startsWith("/settings"))
  ) {
    const url = new URL(req.url)
    url.pathname = "/signin"
    return NextResponse.redirect(url)
  }

  if (
    session &&
    (pathname === "/signin" ||
      pathname === "/signup" ||
      pathname === "/forgot-password")
  ) {
    const url = new URL(req.url)
    url.pathname = "/dashboard"
    return NextResponse.redirect(url)
  }

  return res
}
