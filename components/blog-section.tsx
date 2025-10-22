"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Eye, ArrowLeft } from "lucide-react"
import { OptimizedImage } from "./image-optimizer"

const blogPosts = [
  {
    id: 1,
    title: "دليل الإعلانات الممولة على فيسبوك في مصر 2025",
    excerpt:
      "كل ما تحتاج معرفته عن أسعار وأنواع الإعلانات الممولة على فيسبوك في السوق المصري، مع نصائح عملية لتحقيق أفضل النتائج",
    image: "/digital-marketing-trends-2024-infographic.png",
    category: "إعلانات ممولة",
    author: "فريق ehabgm",
    date: "20 يناير 2025",
    readTime: "8 دقائق",
    views: 2150,
  },
  {
    id: 2,
    title: "كيف تختار أفضل شركة تسويق إلكتروني في القاهرة؟",
    excerpt:
      "معايير اختيار شركة التسويق المناسبة لمشروعك، والأسئلة التي يجب طرحها، وكيف تتجنب الوقوع في فخ الشركات الوهمية",
    image: "/egyptian-business-pricing.jpg",
    category: "نصائح تسويقية",
    author: "إيهاب جمال",
    date: "18 يناير 2025",
    readTime: "6 دقائق",
    views: 1890,
  },
  {
    id: 3,
    title: "أخطاء شائعة في التسويق الإلكتروني يجب تجنبها",
    excerpt: "تعرف على أكثر 10 أخطاء يقع فيها أصحاب المشاريع الصغيرة في مصر عند التسويق لمنتجاتهم، وكيفية تجنبها",
    image: "/digital-marketing-mistakes.jpg",
    category: "تسويق رقمي",
    author: "فريق ehabgm",
    date: "15 يناير 2025",
    readTime: "7 دقائق",
    views: 2340,
  },
  {
    id: 4,
    title: "تكلفة إنشاء متجر إلكتروني في مصر 2025",
    excerpt: "دليل شامل لأسعار تصميم وتطوير المتاجر الإلكترونية في مصر، مع مقارنة بين الخيارات المختلفة والمميزات",
    image: "/social-media-content-guide.png",
    category: "تجارة إلكترونية",
    author: "فريق ehabgm",
    date: "12 يناير 2025",
    readTime: "9 دقائق",
    views: 3120,
  },
  {
    id: 5,
    title: "SEO للمواقع العربية: دليل المبتدئين",
    excerpt: "كيف تحسن ترتيب موقعك في نتائج بحث جوجل باللغة العربية، مع استراتيجيات خاصة بالسوق المصري",
    image: "/seo-beginners-guide.png",
    category: "SEO",
    author: "فريق ehabgm",
    date: "10 يناير 2025",
    readTime: "10 دقائق",
    views: 2780,
  },
  {
    id: 6,
    title: "كيف تزيد مبيعات مطعمك باستخدام السوشيال ميديا؟",
    excerpt: "استراتيجيات مجربة لزيادة مبيعات المطاعم والكافيهات في مصر من خلال فيسبوك وإنستجرام، مع أمثلة واقعية",
    image: "/brand-identity-process.png",
    category: "سوشيال ميديا",
    author: "إيهاب جمال",
    date: "8 يناير 2025",
    readTime: "7 دقائق",
    views: 1950,
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            مدونة ehabgm
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            مقالات <span className="text-primary">التسويق الرقمي</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نصائح واستراتيجيات عملية من فريق <strong className="text-primary">ehabgm</strong> لمساعدتك على النجاح في
            التسويق الإلكتروني
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <OptimizedImage
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="transition-transform duration-500 group-hover:scale-110"
                  objectFit="cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{post.category}</Badge>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white bg-black/50 px-2 py-1 rounded">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">{post.views}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                >
                  اقرأ المزيد
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            عرض جميع المقالات
            <ArrowLeft className="w-5 h-5 mr-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
