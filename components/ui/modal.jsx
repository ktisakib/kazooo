"use client"

import { useCallback, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

export default function Modal({ children }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()
  const onDismiss = useCallback(() => {
    router.back()
  }, [router])
  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper]
  )
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss()
    },
    [onDismiss]
  )
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onKeyDown])
  return (
    <div
      ref={overlay}
      className=" z-10 absolute left-0 right-0 top-0 bottom-0 mx-auto backdrop-blur-md"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute bg-rich-black border-2 border-white rounded-md py-20   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-6/12 lg:w-1/3 p-6"
      >
        {" "}
        <X
          onClick={() =>router.back()}
          className="cursor-pointer z-20 h-6 w-6 top-2 right-2  absolute"
        />
        {children}
      </div>
    </div>
  )
}
