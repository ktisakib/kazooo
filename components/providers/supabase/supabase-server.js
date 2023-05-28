import { createServerComponentClient  } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import "server-only";



export const createClient = () =>
createServerComponentClient ({
    headers,
    cookies,
  });