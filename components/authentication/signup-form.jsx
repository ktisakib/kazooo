import { revalidatePath } from "next/cache"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { createAction } from "../providers/supabase/supabase-server"
import { redirect } from "next/navigation"

const SignUpForm = () => {
  const handleSubmit = async (formData) => {
    "use server"
    try {
      const email = formData.get("email")
      const password = formData.get("password")
      const username = formData.get("username")
      const supabase = createAction()
      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username,
          },
          emailRedirectTo: `${process.env.NEXT_URL}/api/auth/callback`,
        },
      })
      if (!error) {
        console.log(user)
        revalidatePath("/signup")
        redirect("/signin")
      } else {
        console.log(error)
      }
    } catch (err) {}
  }
  return (
    <div className="w-full max-w-xs">
      <form className=" w-full" action={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="username">
              Username
            </Label>
            <Input
              required
              name="username"
              placeholder="kazoo"
              type="text"
              autoCapitalize="none"
              autoComplete="username"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              required
              name="email"
              placeholder="kazoo@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              required
              name="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <Button type="submit">Sign Up with Email & Password</Button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
