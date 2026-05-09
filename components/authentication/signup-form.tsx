"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"

import { signUpSchema, type SignUpFormData } from "@/lib/validations"
import { useAuth } from "@/components/providers/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false)
    const { signUp } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    })

    async function onSubmit(data: SignUpFormData) {
        setIsLoading(true)
        try {
            await signUp(data)
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
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        placeholder="kazoo"
                        type="text"
                        autoCapitalize="none"
                        autoComplete="username"
                        disabled={ isLoading }
                        { ...register("username") }
                    />
                    { errors.username && (
                        <p className="text-sm text-destructive">
                            { errors.username.message }
                        </p>
                    ) }
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        placeholder="kazoo@example.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
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
                        autoComplete="new-password"
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
                    Sign Up
                </Button>
            </div>
        </form>
    )
}
