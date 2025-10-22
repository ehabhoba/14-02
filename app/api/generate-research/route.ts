import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { topic, pages, level, language } = await request.json()

    if (!topic) {
      return NextResponse.json({ error: "الموضوع مطلوب" }, { status: 400 })
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

    const levelMap: Record<string, string> = {
      "high-school": "المرحلة الثانوية",
      university: "المرحلة الجامعية",
      masters: "مرحلة الماجستير",
      phd: "مرحلة الدكتوراه",
    }

    const prompt = `أنت باحث أكاديمي متخصص. اكتب بحثاً أكاديمياً احترافياً باللغة ${language === "arabic" ? "العربية" : language === "english" ? "الإنجليزية" : "العربية والإنجليزية"} عن موضوع: "${topic}"

المتطلبات:
- المستوى الأكاديمي: ${levelMap[level] || "جامعي"}
- عدد الصفحات المطلوب: ${pages} صفحة (حوالي ${Number.parseInt(pages) * 300} كلمة)
- يجب أن يكون البحث مناسباً للسوق المصري والعربي
- استخدم مراجع أكاديمية موثوقة

يجب أن يتضمن البحث:
1. مقدمة شاملة
2. الإطار النظري والدراسات السابقة
3. المنهجية
4. النتائج والتحليل
5. التوصيات
6. الخاتمة
7. قائمة المراجع (على الأقل 5 مراجع)

اكتب البحث بأسلوب أكاديمي احترافي مع تنسيق واضح.`

    const { text } = await generateText({
      model: "openai/gpt-4o",
      prompt,
      maxTokens: Number.parseInt(pages) * 500,
    })

    return NextResponse.json({
      research: text,
      metadata: {
        topic,
        pages,
        level,
        language,
        generatedAt: new Date().toISOString(),
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
        error: "حدث خطأ أثناء إنشاء البحث. يرجى المحاولة مرة أخرى.",
      },
      { status: 500 },
    )
  }
}
