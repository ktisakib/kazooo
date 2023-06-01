"use client"
import {Icons} from "@/components/ui/icons"
import { useAuth } from "@/components/providers/supabase/supabase-auth-provider.js";
const AuthButtons = () => {
  const { signInWithGithub,signInWithFacebook,signInWithTwitter } = useAuth();
  return (
    <div className=" max-w-xs  flex w-full justify-center gap-5 flex-row items-center text-black ">
    <div 
    onClick={signInWithGithub} className="flex  w-full  justify-center  cursor-pointer p-2 items-center gap-3  rounded-md border  bg-white  font-semibold   ">
      <Icons.github className="h-6 w-6  " />
    </div>
    <div 
    onClick={signInWithTwitter} className="flex  w-full justify-center  cursor-pointer p-2 items-center gap-3  rounded-md border  bg-white  font-semibold   ">
      <Icons.twitter className="h-6 w-6  " />
    </div>
    <div 
    onClick={signInWithFacebook} className="flex  w-full  justify-center  cursor-pointer p-2 items-center gap-3  rounded-md border  bg-white  font-semibold   ">
      <Icons.facebook className="h-6 w-6  " />
    </div>
  </div>
  )
}

export default AuthButtons
