import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "الرسالة مطلوبة" }, { status: 400 })
    }

    const { generateText } = await import("ai")

    const conversationHistory = history
      ?.map((msg: any) => `${msg.type === "user" ? "المستخدم" : "المساعد"}: ${msg.content}`)
      .join("\n")

    const prompt = `أنت مساعد ذكي لشركة ehabgm المتخصصة في التسويق الرقمي وتصميم المواقع في مصر والشرق الأوسط.

معلومات عن الشركة:
- متخصصون في تصميم المواقع الإلكترونية الاحترافية
- خدمات السوشيال ميديا والإعلانات الممولة
- تحسين محركات البحث SEO
- تطبيقات الجوال
- التسويق بالمحتوى
- الأسعار تبدأ من 4,000 جنيه للمواقع و 1,500 جنيه شهرياً للسوشيال ميديا
- نقدم استشارة مجانية
- أكثر من 200 مشروع ناجح

${conversationHistory ? `المحادثة السابقة:\n${conversationHistory}\n` : ""}

المستخدم: ${message}

قدم إجابة مفيدة واحترافية باللغة العربية. كن ودوداً ومساعداً. إذا سأل عن الأسعار أو الخدمات، قدم معلومات دقيقة. شجعه على التواصل أو حجز استشارة مجانية.`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
      maxTokens: 500,
    })

    return NextResponse.json({
      response: text,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json(
      {
        response: "عذراً، حدث خطأ مؤقت. يمكنك التواصل معنا مباشرة عبر الواتساب أو نموذج التواصل. نحن هنا لمساعدتك!",
      },
      { status: 500 },
    )
  }
}
