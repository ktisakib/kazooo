"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"

import { signInSchema, type SignInFormData } from "@/lib/validations"
import { useAuth } from "@/components/providers/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInForm() {
    const [isLoading, setIsLoading] = useState(false)
    const { signInWithEmailPassword } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
    })

    async function onSubmit(data: SignInFormData) {
        setIsLoading(true)
        try {
            await signInWithEmailPassword(data)
        } catch {
            // Error is handled by auth provider via toast
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="w-full max-w-xs" noValidate onSubmit={ handleSubmit(onSubmit) }>
            <div className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        placeholder="kazoo@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={ isLoading }
                        { ...register("email") }
                    />
                    { errors.email && (
                        <p className="text-sm text-destructive">{ errors.email.message }</p>
                    ) }
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="Your password"
                        type="password"
                        autoCapitalize="none"
                        autoComplete="current-password"
                        disabled={ isLoading }
                        { ...register("password") }
                    />
                    { errors.password && (
                        <p className="text-sm text-destructive">
                            { errors.password.message }
                        </p>
                    ) }
                </div>
                <Button type="submit" disabled={ isLoading }>
                    { isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> }
                    Sign In
                </Button>
            </div>
        </form>
    )
}
