"use client"

import { useRef, useState } from "react"

import { Icons } from "@/components/ui/icons"
import { useAuth } from "@/components/providers/supabase/supabase-auth-provider"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()

  const { signInWithEmailPassword } = useAuth()
  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    
    try {
      if(!emailRef.current.value){
        throw new Error("Please enter valid email address")
      }
      await signInWithEmailPassword({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      setIsLoading(false)
     

      
    } catch (err) {
      console.error(err)
      toast({
        title: err.message
      })
      setIsLoading(false)

    }
  }
  return (
    <form className="max-w-xs w-full" onSubmit={handleSubmit}>
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
            ref={passwordRef}
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
          {isLoading && <Icons.loader className="mr-2 h-4 w-4 animate-spin" />}
          Sign In with Email & Password
        </Button>
      </div>
    </form>
  )
}

export default SignInForm
