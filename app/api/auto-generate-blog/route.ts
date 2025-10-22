import { generateBlogPost } from "@/lib/ai-blog-generator"
import { blogKeywords } from "@/lib/blog-keywords"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const secret = request.headers.get("authorization")
  if (secret !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // اختيار فئة عشوائية
    const categories = Object.entries(blogKeywords)
    const [categoryKey, categoryData] = categories[Math.floor(Math.random() * categories.length)]

    // اختيار كلمة مفتاحية عشوائية من الفئة
    const randomKeyword = categoryData.keywords[Math.floor(Math.random() * categoryData.keywords.length)]

    console.log(`[v0] Generating blog post for category: ${categoryKey}, keyword: ${randomKeyword}`)

    // توليد المقالة باستخدام AI
    const post = await generateBlogPost(categoryKey, randomKeyword)

    // إضافة معلومات إضافية
    const enrichedPost = {
      ...post,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      views: 0,
      comments: 0,
    }

    return NextResponse.json(
      {
        success: true,
        message: "Blog post generated successfully",
        post: enrichedPost,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error in auto-generate-blog:", error)
    return NextResponse.json({ error: "Failed to generate blog post" }, { status: 500 })
  }
}
