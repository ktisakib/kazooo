"use client"

import { Icons } from "@/components/ui/icons"
import { useAuth } from "@/components/providers/auth-provider"
import { Button } from "@/components/ui/button"

export default function AuthButtons() {
    const { signInWithGithub, signInWithTwitter } = useAuth()

    return (
        <div className="flex w-full max-w-xs justify-center gap-3">
            <Button
                variant="outline"
                className="w-full"
                onClick={ signInWithGithub }
                type="button"
            >
                <Icons.gitHub className="h-5 w-5" />
            </Button>
            <Button
                variant="outline"
                className="w-full"
                onClick={ signInWithTwitter }
                type="button"
            >
                <Icons.twitter className="h-5 w-5" />
            </Button>
        </div>
    )
}
