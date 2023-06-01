import Link from "next/link"

import AuthButtons from "@/components/authentication/AuthButtons"
import SignInForm from "@/components/authentication/signin-form"
import Logo from "@/components/layout/logo"

const page = () => {
  return (
    <main className=" grid md:grid-cols-2 items-center  min-h-screen container ">
      <div className="h-full flex gap-y-10 flex-col items-center justify-center">
        <span className="text-4xl font-semibold">Sign In</span>

        <SignInForm />
        <span className="flex items-center flex-col">
          <h1 className="text-2xl">or</h1>
          <p>Sign In With</p>
        </span>
        <AuthButtons />
        <p>
          No account?
          <span>
            {" "}
            <Link href={"/signup"}>create a new one</Link>{" "}
          </span>
        </p>
      </div>
      <div className=" hidden gap-y-10 text-2xl h-full md:flex items-center flex-col justify-center gradient">
        <Logo className={"h-40 w-40"}/>

        <h1>
          Sign In to Access All route to see the functional preview of
          &quot;/dashboard &quot; and &quot; /settings &quot; etc.
        </h1>
        <h1>
          This template provides a solid foundation for your web application
          using popular packages such as Prisma, Radix UI, Supabase, Lucide
          React, Next.js 13, SWR, and Yup. With built-in authentication using
          Supabase and seamless integration with a Supabase database, you can
          jumpstart your development process and focus on building your
          app&apos;s unique features.
        </h1>
      </div>
    </main>
  )
}

export default page
