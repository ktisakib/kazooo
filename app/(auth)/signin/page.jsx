import Link from "next/link"
import AuthButtons from "../_components/AuthButtons"
import SignInForm from "../_components/signin-form"


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
        <p>No account?<span> <Link href={"/signup"} >create a new one</Link> </span></p>
      </div>
      <div className=" hidden gap-y-10 text-2xl h-full md:flex items-center flex-col justify-center gradient">
        <svg
          className="h-64 w-64"
          viewBox="0 0 1181 1865"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 1803.04V335.739C0.5 320.172 6.45177 305.193 17.1364 293.872L188.636 112.146C226.523 72.0001 294 98.8127 294 154.013V418.551C294 479.161 372.816 502.677 406.027 451.976L618.645 127.388C627.219 114.299 640.387 105.022 655.628 101.483C814.226 64.6478 1106.7 0.5 1174 0.5C1240.78 0.5 738.752 474.919 435.501 752.583C407.897 777.857 409.311 821.708 438.45 845.195L943.265 1252.1C964.19 1268.97 971.611 1297.54 961.537 1322.46L843.707 1613.89C827.415 1654.19 775.407 1665 744.403 1634.54L423.13 1318.88C381.458 1277.93 311.617 1313.34 320.011 1371.15L374.584 1747.04C379.286 1779.42 357.594 1809.75 325.426 1815.76L72.7085 1863C35.1778 1870.02 0.5 1841.22 0.5 1803.04Z"
            fill="#D9D9D9"
          />
        </svg>
        <h1>
          Sign In to Access All route to see the functional preview of &quot;/dashboard &quot; and &quot; /settings &quot; etc. 
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
