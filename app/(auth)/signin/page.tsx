import Link from "next/link"
import AuthButtons from "@/components/authentication/auth-buttons"
import SignInForm from "@/components/authentication/signin-form"

export default function SignInPage() {
    return (
        <main className="container grid min-h-screen items-center md:grid-cols-2">
            <div className="flex h-full flex-col items-center justify-center gap-y-8">
                <h1 className="text-4xl font-semibold">Sign In</h1>
                <SignInForm />
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-muted-foreground">or continue with</p>
                    <AuthButtons />
                </div>
                <p className="text-sm text-muted-foreground">
                    No account?{ " " }
                    <Link href="/signup" className="underline hover:text-foreground">
                        Create one
                    </Link>
                </p>
            </div>
            <div className="gradient hidden h-full flex-col items-center justify-center gap-y-8 rounded-lg p-8 text-white md:flex">
                <h2 className="text-2xl font-semibold">Welcome Back</h2>
                <p className="max-w-md text-center text-lg">
                    Sign in to access your dashboard, settings, and more.
                </p>
            </div>
        </main>
    )
}
