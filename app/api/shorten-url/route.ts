import { type NextRequest, NextResponse } from "next/server"

const urlDatabase = new Map<string, { originalUrl: string; clicks: number; createdAt: string }>()

export async function POST(request: NextRequest) {
  try {
    const { url, customSlug } = await request.json()

    if (!url) {
      return NextResponse.json({ error: "الرابط مطلوب" }, { status: 400 })
    }

    try {
      new URL(url)
    } catch {
      return NextResponse.json({ error: "الرابط غير صحيح" }, { status: 400 })
    }

    const slug = customSlug || Math.random().toString(36).substring(2, 9)

    if (customSlug && urlDatabase.has(customSlug)) {
      return NextResponse.json({ error: "هذا الرابط المخصص مستخدم بالفعل" }, { status: 400 })
    }

    const shortUrl = `https://ehabgm.online/${slug}`
    const createdAt = new Date().toISOString()

    urlDatabase.set(slug, { originalUrl: url, clicks: 0, createdAt })

    return NextResponse.json({
      shortUrl,
      originalUrl: url,
      slug,
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`,
      createdAt,
      clicks: 0,
    })
  } catch (error) {
    console.error("[v0] Error shortening URL:", error)
    return NextResponse.json({ error: "حدث خطأ أثناء اختصار الرابط" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug")

  if (!slug) {
    return NextResponse.json({ error: "Slug مطلوب" }, { status: 400 })
  }

  const urlData = urlDatabase.get(slug)

  if (!urlData) {
    return NextResponse.json({ error: "الرابط غير موجود" }, { status: 404 })
  }

  return NextResponse.json({
    slug,
    ...urlData,
  })
}
