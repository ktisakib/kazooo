"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createAction } from "@/components/providers/supabase/supabase-server"

export const signUp = async (username,email,password) => {
  "use server"
  
  return data
}

export const handleSignOut = async () => {
  const supabase = createAction()
  const { error } = await supabase.auth.signOut()
  if (!error) {
    revalidatePath("/settings")
    redirect(`${process.env.NEXT_URL}/signin`)
  }
}

export const signIn = async ({email, password}) => {
  try {
    const supabase = createAction()
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options:{
        redirectTo: `${process.env.NEXT_URL}/dashboard`,
      }
    })
    if (!error) {
      return data 
    } else return error
  } catch (err) {
    console.log(err)
  }
}
