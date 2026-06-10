import { NextRequest, NextResponse } from "next/server"
import { execFile } from "child_process"
import { promisify } from "util"
import path from "path"

const execFileAsync = promisify(execFile)

export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse(null, { status: 404 })
  }

  const searchParams = request.nextUrl.searchParams
  const image = searchParams.get("image")
  const width = searchParams.get("width") || "40"
  const braille = searchParams.get("braille") === "true"
  const negative = searchParams.get("negative") === "true"
  const dither = searchParams.get("dither") === "true"
  const threshold = searchParams.get("threshold")

  if (!image) {
    return NextResponse.json({ error: "Missing image param" }, { status: 400 })
  }

  if (!/^public\/[\w./-]+\.(png|jpe?g|gif|webp)$/i.test(image) || image.includes("..")) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 })
  }

  const publicDir = path.resolve(process.cwd(), "public")
  const imagePath = path.resolve(process.cwd(), image)
  if (!imagePath.startsWith(publicDir + path.sep)) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 })
  }

  const widthNum = Number(width)
  if (!Number.isInteger(widthNum) || widthNum < 1 || widthNum > 500) {
    return NextResponse.json({ error: "Invalid width" }, { status: 400 })
  }

  const thresholdNum = threshold === null ? null : Number(threshold)
  if (thresholdNum !== null && (!Number.isInteger(thresholdNum) || thresholdNum < 0 || thresholdNum > 255)) {
    return NextResponse.json({ error: "Invalid threshold" }, { status: 400 })
  }

  const args = ["--", imagePath, "-W", String(widthNum)]
  if (braille) args.push("-b")
  if (negative) args.push("-n")
  if (dither) args.push("-d")
  if (thresholdNum !== null) args.push("--threshold", String(thresholdNum))

  try {
    const { stdout } = await execFileAsync("ascii-image-converter", args)
    return NextResponse.json({ ascii: stdout })
  } catch (error) {
    return NextResponse.json({ error: "Conversion failed", details: String(error) }, { status: 500 })
  }
}
