import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { businessName, businessType, description, colors, pages } = await request.json()

    if (!businessName || !businessType) {
      return NextResponse.json({ error: "اسم ونوع العمل مطلوبان" }, { status: 400 })
    }

    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "لم يتم تكوين مفتاح API. يرجى إضافة OPENAI_API_KEY في إعدادات المشروع.",
          needsSetup: true,
        },
        { status: 503 },
      )
    }

    const { generateText } = await import("ai")

    const prompt = `أنت مطور ويب محترف متخصص في Next.js و React و Tailwind CSS. قم بإنشاء موقع إلكتروني احترافي كامل بالمواصفات التالية:

اسم العمل: ${businessName}
نوع العمل: ${businessType}
الوصف: ${description}
الألوان المفضلة: ${colors.join(", ")}
الصفحات المطلوبة: ${Array.isArray(pages) ? pages.join(", ") : ""}

المتطلبات:
1. استخدم Next.js 14 مع App Router
2. استخدم TypeScript
3. استخدم Tailwind CSS للتصميم
4. صمم واجهة عصرية واحترافية
5. اجعل الموقع متجاوب مع جميع الأجهزة
6. استخدم الألوان المحددة في التصميم
7. أضف أيقونات SVG مناسبة
8. اجعل المحتوى مناسباً للسوق المصري والعربي

قم بإنشاء الملفات التالية:
- app/page.tsx (الصفحة الرئيسية)
- components/header.tsx
- components/footer.tsx
${Array.isArray(pages) ? pages.map((page: string) => `- app/${page.toLowerCase().replace(/\s+/g, "-")}/page.tsx`).join("\n") : ""}

اكتب الكود الكامل لكل ملف بشكل احترافي وجاهز للاستخدام.`

    const { text } = await generateText({
      model: "openai/gpt-4o",
      prompt,
      maxTokens: 4000,
    })

    const certificateId = `CERT-${Date.now()}-${Math.random().toString(36).substring(2, 9).toUpperCase()}`

    return NextResponse.json({
      success: true,
      websiteCode: text,
      certificateId,
      metadata: {
        businessName,
        businessType,
        generatedAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
      },
    })
  } catch (error: any) {
    if (error?.message?.includes("API key")) {
      return NextResponse.json(
        {
          error: "مفتاح API غير صالح. يرجى التحقق من إعدادات المشروع.",
          needsSetup: true,
        },
        { status: 401 },
      )
    }

    if (error?.message?.includes("rate limit")) {
      return NextResponse.json(
        {
          error: "تم تجاوز الحد المسموح. يرجى المحاولة بعد قليل.",
        },
        { status: 429 },
      )
    }

    return NextResponse.json(
      {
        error: "حدث خطأ أثناء إنشاء الموقع. يرجى المحاولة مرة أخرى.",
      },
      { status: 500 },
    )
  }
}
