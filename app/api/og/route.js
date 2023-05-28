/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server"

// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge"
 const image = fetch(new URL('./open-graph.jpeg', import.meta.url)).then((res) =>
  res.arrayBuffer());
export async function GET() {
    const imageData = await image;

  return new ImageResponse(
    (
      // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        
      
          <img tw="w-full " src={imageData} alt="og-image" />
         
        
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
