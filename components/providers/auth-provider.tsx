"use client"

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    type ReactNode,
} from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import type { Session, User } from "@supabase/supabase-js"
import useSWR from "swr"
import { toast } from "sonner"

interface AuthContextType {
    user: User | null
    session: Session | null
    isLoading: boolean
    signOut: () => Promise<void>
    signUp: (params: {
        email: string
        password: string
        username: string
    }) => Promise<void>
    signInWithEmailPassword: (params: {
        email: string
        password: string
    }) => Promise<void>
    signInWithGithub: () => Promise<void>
    signInWithGoogle: () => Promise<void>
    signInWithTwitter: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    session: null,
    isLoading: true,
    signOut: async () => { },
    signUp: async () => { },
    signInWithEmailPassword: async () => { },
    signInWithGithub: async () => { },
    signInWithGoogle: async () => { },
    signInWithTwitter: async () => { },
})

export function AuthProvider({ children }: { children: ReactNode }) {
    const supabase = useMemo(() => createClient(), [])
    const router = useRouter()

    const {
        data: session,
        mutate,
        isLoading,
    } = useSWR("supabase-session", async () => {
        const {
            data: { session },
        } = await supabase.auth.getSession()
        return session
    })

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            mutate(session)
            router.refresh()
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [supabase, router, mutate])

    const signOut = async () => {
        await supabase.auth.signOut()
        router.push("/signin")
        router.refresh()
    }

    const signUp = async ({
        email,
        password,
        username,
    }: {
        email: string
        password: string
        username: string
    }) => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { username },
                emailRedirectTo: `${window.location.origin}/auth/callback`,
            },
        })
        if (error) {
            toast.error(error.message)
            throw error
        }
        toast.success("Check your email for a confirmation link.")
    }

    const signInWithEmailPassword = async ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) {
            toast.error(error.message)
            throw error
        }
        router.push("/dashboard")
        router.refresh()
    }

    const signInWithOAuth = async (
        provider: "github" | "google" | "twitter"
    ) => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        })
        if (error) {
            toast.error(error.message)
        }
    }

    const signInWithGithub = () => signInWithOAuth("github")
    const signInWithGoogle = () => signInWithOAuth("google")
    const signInWithTwitter = () => signInWithOAuth("twitter")

    return (
        <AuthContext.Provider
            value={ {
                user: session?.user ?? null,
                session: session ?? null,
                isLoading,
                signOut,
                signUp,
                signInWithEmailPassword,
                signInWithGithub,
                signInWithGoogle,
                signInWithTwitter,
            } }
        >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }
    return context
}
