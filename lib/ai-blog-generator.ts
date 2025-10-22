import { generateText } from "ai"
import { blogKeywords } from "./blog-keywords"

export async function generateBlogPost(category: string, keyword: string) {
  try {
    const categoryData = blogKeywords[category as keyof typeof blogKeywords]

    const prompt = `
أنت كاتب محتوى متخصص في التسويق الرقمي والتصميم الجرافيكي. اكتب مقالة بلوج احترافية وفريدة عن: "${keyword}"

المتطلبات:
- العنوان: جذاب وفريد ويحتوي على الكلمة المفتاحية
- المحتوى: 600-800 كلمة
- الأسلوب: احترافي وسهل الفهم
- تضمين: نصائح عملية وفوائد حقيقية
- الخاتمة: دعوة للعمل مع ehabgm - مصمم جرافيك محترف في حلوان يعمل أونلاين

الصيغة (JSON):
{
  "title": "العنوان",
  "slug": "slug-بالإنجليزية",
  "excerpt": "ملخص قصير",
  "content": "المحتوى الكامل",
  "keywords": ["كلمة1", "كلمة2", "كلمة3"],
  "category": "${category}",
  "author": "ehabgm",
  "readTime": "5-10"
}
    `

    const { text } = await generateText({
      model: "openai/gpt-4o",
      prompt,
      temperature: 0.7,
      maxTokens: 1500,
    })

    return JSON.parse(text)
  } catch (error) {
    console.error("[v0] Error generating blog post:", error)
    throw error
  }
}
