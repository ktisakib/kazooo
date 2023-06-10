import { Separator } from "@/components/ui/separator"
import { createClient } from "@/components/providers/supabase/supabase-server"

import { ProfileForm } from "./_components/profile-form"

const getUserProfile = async () => {
  const supabase = createClient()
  const {data:{session},error} = await supabase.auth.getSession()

  if (error) {
    return null
  } else {
    const profile =session?.user.user_metadata
    return profile
  }
}
export default async function SettingsProfilePage() {
  const profile = await getUserProfile()
  console.log(profile)
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          This is how others will see you on the site.
        </p>
      </div>
      <Separator />
      <ProfileForm profile={profile} />
    </div>
  )
}
