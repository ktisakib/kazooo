"use client";

import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";
import useSWR from "swr";
import { useSupabase } from "./supabase-provider";

const Context = createContext({
  user: null,
  error: null,
  isLoading: true,
  mutate: null,
  signOut: async () => { },
  signUp: async () => { },
  // signInWithGithub: async () => {},
  signInWithFacebook: async () => {},
  signInWithGoogle: async () => {},
  signInWithTwitter: async () => {},
  signInWithEmailPassword: async () => {},
  signInWithMagicLink: async () => {},
});

export default function SupabaseAuthProvider({
  serverSession,
  children,
}) {
  // THROW ERROR IF AUTH_REDIRECT IS NOT SET
  if (
    !process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL &&
    (process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ||
      process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
  ) {
    throw new Error("NEXT_PUBLIC_AUTH_REDIRECT_URL must be set in .env");
  }

  const { supabase } = useSupabase();
  const router = useRouter();
  // const setOwnerID = useSetAtom(ownerIDAtom);
 
//  Sign Up
const signUp = async ({email,password,username}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    },
  });
  if (error) {
    console.log(error)
    return error;
  } else {
    console.log(data);
  }
};

// Get USER
const getUser = async () => {
  const { data: user, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", serverSession?.user?.id)
    .single();
  if (error) {
    return null;
  } else {
    return user;
  }
};

const {
  data: user,
  error,
  isLoading,
  mutate,
} = useSWR(serverSession ? "profile-context" : null, getUser);

// Sign Out
const signOut = async () => {
  await supabase.auth.signOut();
  router.push("/signin");
  console.log("Signed Out! (from supabase-auth-provider.tsx)");
};

// Sign-In with Github
const signInWithGithub = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
          ? "https://mahdeehasanstudio.vercel.app/dashboard"
          : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
          ? "https://preview-mahdeehasanstudio.vercel.app/dashboard"
          : "http://localhost:3000/dashboard",
    },
  });
};



// signInWithFacebook,
const signInWithFacebook = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
          ? "https://mahdeehasanstudio.vercel.app/dashboard"
          : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
          ? "https://preview-mahdeehasanstudio.vercel.app/dashboard"
          : "http://localhost:3000/dashboard",
    },
  });
};



//   signInWithGoogle,
const signInWithGoogle = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
          ? "https://mahdeehasanstudio.vercel.app/dashboard"
          : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
          ? "https://preview-mahdeehasanstudio.vercel.app/dashboard"
          : "http://localhost:3000/dashboard",
    },
  });
};


//   signInWithTwitter,
const signInWithTwitter = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "twitter",
    options: {
      redirectTo:
        process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
          ? "https://mahdeehasanstudio.vercel.app/dashboard"
          : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
          ? "https://preview-mahdeehasanstudio.vercel.app/dashboard"
          : "http://localhost:3000/dashboard",
    },
  });
};
//   signInWithEmailPassword,
const signInWithEmailPassword = async ({email ,password}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
};


//   signInWithMagicLink,
const signInWithMagicLink = async () => {
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: "https://example.com/dashboard",
    },
  });
};


// Refresh the Page to Sync Server and Client
useEffect(() => {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_, session) => {
    if (session?.access_token !== serverSession?.access_token) {
      router.refresh();
    }
  });

  return () => {
    subscription.unsubscribe();
  };
}, [router, supabase, serverSession?.access_token]);

const exposed = {
  user,
  error,
  isLoading,
  mutate,
  signUp,
  signOut,
  signInWithGithub,
  signInWithFacebook,
  signInWithGoogle,
  signInWithTwitter,
  signInWithEmailPassword,
  signInWithMagicLink,
};


  return <Context.Provider value={exposed}>{children}</Context.Provider>;
}

export const useAuth = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useAuth must be used inside SupabaseAuthProvider");
  } else {
    return context;
  }
};