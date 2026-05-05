import { createClient } from "@/lib/supabase/server"

export default async function UsersLayout() {
    const supabase = await createClient()
    const { data: users, error } = await supabase.from("profiles").select("*")

    if (error) {
        return (
            <div className="container pt-20">
                <p className="text-muted-foreground">Unable to load users.</p>
            </div>
        )
    }

    return (
        <main className="container pt-20">
            <h1 className="text-2xl font-bold">Users</h1>
            <nav className="mt-4 space-y-2">
                { users?.map((user: { id: string; full_name: string | null }) => (
                    <div key={ user.id } className="text-sm">
                        { user.full_name ?? "Unknown User" }
                    </div>
                )) }
            </nav>
        </main>
    )
}
