import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const logoFile = formData.get("logo") as File

    if (!logoFile) {
      return NextResponse.json({ error: "الشعار مطلوب" }, { status: 400 })
    }

    const { GoogleGenerativeAI } = await import("@google/generative-ai")
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)

    // تحويل الملف إلى base64
    const bytes = await logoFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const base64 = buffer.toString("base64")

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const result = await model.generateContent([
      {
        inlineData: {
          data: base64,
          mimeType: logoFile.type,
        },
      },
      "تحويل هذا الشعار إلى تصميم ثلاثي الأبعاد احترافي مع عمق وظلال وإضاءة واقعية. جودة عالية، دقة 4K. قدم وصفاً تفصيلياً للتصميم ثلاثي الأبعاد المقترح.",
    ])

    const responseText = result.response.text()

    return NextResponse.json({
      success: true,
      description: responseText,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[v0] Error converting logo to 3D:", error)
    return NextResponse.json({ error: "حدث خطأ أثناء تحويل الشعار إلى 3D" }, { status: 500 })
  }
}
