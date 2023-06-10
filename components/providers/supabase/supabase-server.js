"use server"

import { cookies, headers } from "next/headers"
import {
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs"

export const createClient = () =>
  createServerComponentClient({ headers, cookies })

export const createAction = () => createServerActionClient({ headers, cookies })
