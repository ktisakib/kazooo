import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Canvas from "./_components/canvas"




export default function IndexPage() {
  return (
    <>
      <div className="relative h-screen w-screen">
        {" "}
        <section className=" absolute z-10 w-full h-full  flex items-center  ">
          <div className="justify-center   rounded-md   text-center gap-10   flex flex-col mx-auto items-center ">
            <Image
              className="aspect-video md:-translate-x-8"
              src="/trchnologies.svg"
              height={1024 / 2}
              width={1920 / 2}
              alt="Powered by"
            />{" "}
            <p className="text-lg  max-w-3xl text-rich-black sm:text-xl">This template provides a solid foundation for your web
                application  you can jumpstart your development process
                and focus on building your app&apos;s unique features.</p>
           
            <div className="flex gap-4">
             
              <Link href={"/signup"} className={buttonVariants({ size: "lg" })}>
                Sign Up
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href={siteConfig.links.github}
                className={buttonVariants({ variant: "secondary", size: "lg" })}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
        <Canvas />
      </div>
    </>
  )
}
