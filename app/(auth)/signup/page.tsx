import Link from "next/link"
import AuthButtons from "@/components/authentication/auth-buttons"
import SignUpForm from "@/components/authentication/signup-form"

export default function SignUpPage() {
    return (
        <main className="container grid min-h-screen items-center md:grid-cols-2">
            <div className="flex h-full flex-col items-center justify-center gap-y-8">
                <h1 className="text-4xl font-semibold">Sign Up</h1>
                <SignUpForm />
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-muted-foreground">or continue with</p>
                    <AuthButtons />
                </div>
                <p className="text-sm text-muted-foreground">
                    Already have an account?{ " " }
                    <Link href="/signin" className="underline hover:text-foreground">
                        Sign In
                    </Link>
                </p>
            </div>
            <div className="gradient hidden h-full flex-col items-center justify-center gap-y-8 rounded-lg p-8 text-white md:flex">
                <h2 className="text-2xl font-semibold">Get Started</h2>
                <p className="max-w-md text-center text-lg">
                    Create your account to start building with Next.js, Supabase, and
                    more.
                </p>
            </div>
        </main>
    )
}
