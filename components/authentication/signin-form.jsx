import { revalidatePath } from "next/cache"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { signIn } from "@/lib/actions"

const SignInForm = async () => {
  const handleSubmit = async (formData) => {
    "use server"
    try {
      const email = formData.get("email")
      const password = formData.get("password")  
      const data  = await signIn({
        email,
        password,
      })
      if (data) {
        console.log("user:",data)
         revalidatePath("/signin")
      }
    
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <form className="max-w-xs w-full" action={handleSubmit}>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
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
            name="password"
            placeholder="your password"
            type="password"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
          />
        </div>
        <Button type="submit">Sign In with Email & Password</Button>
      </div>
    </form>
  )
}

export default SignInForm
