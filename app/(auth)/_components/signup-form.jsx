"use client"

import { useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { toast } from "@/components/ui/use-toast"
import { useAuth } from "@/components/providers/supabase/supabase-auth-provider"
import { toast } from "@/components/ui/use-toast"

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef(null)
  const passRef = useRef(null)
  const { signUp } = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signUp({
        email: emailRef.current.value,
        password: passRef.current.value,
      })

      setIsLoading(false)
      toast({
        title:"An Email has been sent to varify account"
      })
    } catch (err) {
      toast({
        title: "Something went wrong",
      })
      setIsLoading(false)
    }
  }
  return (
    <div className="w-full max-w-xs">
      <form className=" w-full" onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              ref={emailRef}
              id="email"
              placeholder="kazoo@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              ref={passRef}
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up with Email & Password
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm
