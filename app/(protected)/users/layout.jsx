import { createClient } from "@/components/providers/supabase/supabase-server";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";





const UserLayout = async () => {
  const supabase = createClient();
  const { data: users, error } = await supabase.from("profiles").select("*");

  if (error) {
    return null;
  }


  return (
    <main className="container">
    <nav className="pt-20">{users.map((user) => (
      <div key={user.id}>
        <Link href={`/users/${user?.id}`}>{user.full_name}</Link>
        </div>
    ))}</nav>
    </main>
  )
}

export default UserLayout