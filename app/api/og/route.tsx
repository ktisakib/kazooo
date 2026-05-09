import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={ {
                    fontSize: 128,
                    background: "linear-gradient(to bottom, #1c1c1c, #000)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                } }
            >
                Kazoo
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}
