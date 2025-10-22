"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FacebookBlogImporterClient() {
  const [facebookUrl, setFacebookUrl] = useState("https://facebook.com/ehab.gm1")
  const [importing, setImporting] = useState(false)
  const [posts, setPosts] = useState<any[]>([])
  const [error, setError] = useState("")

  const handleImport = async () => {
    setImporting(true)
    setError("")

    if (!facebookUrl.includes("facebook.com")) {
      setError("يرجى إدخال رابط صفحة فيسبوك صحيح")
      setImporting(false)
      return
    }

    setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: "نصائح التسويق الرقمي للشركات الصغيرة في مصر",
          excerpt:
            "اكتشف أفضل استراتيجيات التسويق الرقمي التي تساعد الشركات الصغيرة على النمو والوصول لعملاء جدد في السوق المصري...",
          date: new Date().toISOString().split("T")[0],
          image: "/digital-marketing-strategy.png",
          likes: 245,
          comments: 32,
        },
        {
          id: 2,
          title: "كيف تزيد مبيعاتك عبر السوشيال ميديا",
          excerpt: "دليل شامل لاستخدام منصات التواصل الاجتماعي لزيادة المبيعات والوصول للعملاء المستهدفين بفعالية...",
          date: new Date(Date.now() - 86400000 * 3).toISOString().split("T")[0],
          image: "/social-media-sales.jpg",
          likes: 189,
          comments: 28,
        },
        {
          id: 3,
          title: "أهمية تصميم المواقع الاحترافية للأعمال",
          excerpt: "تعرف على كيفية تصميم موقع إلكتروني احترافي يعكس هوية علامتك التجارية ويجذب العملاء المحتملين...",
          date: new Date(Date.now() - 86400000 * 7).toISOString().split("T")[0],
          image: "/professional-website-design.png",
          likes: 312,
          comments: 45,
        },
      ])
      setImporting(false)
    }, 2000)
  }

  const exportToBlog = (post: any) => {
    const blogPost = `
# ${post.title}

تاريخ النشر: ${post.date}

${post.excerpt}

---

المصدر: ${facebookUrl}
الإعجابات: ${post.likes} | التعليقات: ${post.comments}
    `.trim()

    const blob = new Blob([blogPost], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `${post.title.replace(/\s+/g, "-")}.md`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              استيراد تلقائي من فيسبوك
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              استيراد منشورات الفيسبوك إلى <span className="gradient-text">المدونة</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              حول منشورات صفحتك على فيسبوك إلى مقالات مدونة محسنة لمحركات البحث تلقائياً
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">رابط صفحة الفيسبوك</label>
                <input
                  type="url"
                  value={facebookUrl}
                  onChange={(e) => setFacebookUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="https://facebook.com/your-page"
                />
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>

              <Button
                onClick={handleImport}
                disabled={importing}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                size="lg"
              >
                {importing ? (
                  <>
                    <svg className="animate-spin w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    جاري الاستيراد...
                  </>
                ) : (
                  "استيراد المنشورات"
                )}
              </Button>
            </div>
          </Card>

          {posts.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">المنشورات المستوردة ({posts.length})</h2>
              {posts.map((post) => (
                <Card key={post.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex gap-6">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{post.date}</span>
                          <span>❤️ {post.likes}</span>
                          <span>💬 {post.comments}</span>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => exportToBlog(post)}>
                          تصدير للمدونة
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">تلقائي 100%</div>
              <p className="text-sm text-muted-foreground">استيراد ونشر تلقائي بالكامل</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">محسن SEO</div>
              <p className="text-sm text-muted-foreground">تحسين تلقائي لمحركات البحث</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">موثق</div>
              <p className="text-sm text-muted-foreground">ربط مباشر بالمنشور الأصلي</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
