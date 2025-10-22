import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Lightbulb, Target, ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "كيف بدأت منصة ehabgm؟",
    description: "قصة تأسيس منصة ehabgm من حلوان، القاهرة لتصبح واحدة من أبرز منصات التسويق الرقمي في مصر",
    icon: Lightbulb,
    date: "15 يناير 2025",
    readTime: "5 دقائق",
    category: "قصة النجاح",
    excerpt:
      "بدأت رحلة ehabgm من فكرة بسيطة: توفير خدمات تسويق رقمي احترافية بأسعار عادلة للشركات الصغيرة والمتوسطة. اليوم، نخدم أكثر من 100 عميل ونقدم منتجات رقمية متميزة...",
  },
  {
    title: "لماذا تختار منصة ehabgm؟",
    description: "تعرف على المزايا الفريدة التي تجعل ehabgm الخيار الأمثل لخدمات التسويق الرقمي والمنتجات الاحترافية",
    icon: Target,
    date: "10 يناير 2025",
    readTime: "4 دقائق",
    category: "مزايا المنصة",
    excerpt:
      "منصة ehabgm تجمع بين الخبرة الواسعة في التسويق الرقمي ومتجر رقمي يضم أفضل المنتجات. نحن لا نقدم خدمات فقط، بل نوفر حلول متكاملة لنجاح مشروعك...",
  },
  {
    title: "خدمات ehabgm المتكاملة",
    description:
      "دليل شامل لجميع خدمات التسويق الرقمي التي تقدمها منصة ehabgm من تصميم المواقع إلى إدارة السوشيال ميديا",
    icon: BookOpen,
    date: "5 يناير 2025",
    readTime: "8 دقائق",
    category: "دليل الخدمات",
    excerpt:
      "تقدم ehabgm مجموعة شاملة من خدمات التسويق الرقمي: تصميم المواقع، إدارة السوشيال ميديا، الإعلانات الممولة، SEO، وأكثر. كل خدمة مصممة لتحقيق أهدافك التسويقية...",
  },
  {
    title: "نجاحات عملاء ehabgm",
    description: "قصص نجاح حقيقية لعملاء استفادوا من خدمات ومنتجات منصة ehabgm وحققوا نتائج استثنائية",
    icon: TrendingUp,
    date: "1 يناير 2025",
    readTime: "6 دقائق",
    category: "قصص نجاح",
    excerpt:
      "من مطاعم حلوان إلى عيادات القاهرة، ساعدت ehabgm العشرات من الشركات على مضاعفة مبيعاتها وتحسين حضورها الرقمي. اقرأ قصص نجاح حقيقية لعملائنا...",
  },
]

const platformFeatures = [
  {
    title: "خدمات تسويق رقمي متكاملة",
    description: "من التخطيط الاستراتيجي إلى التنفيذ والمتابعة، نقدم حلول تسويق رقمي شاملة",
    icon: Target,
  },
  {
    title: "متجر منتجات احترافية",
    description: "قوالب، تصاميم، دورات، وأدوات رقمية مصممة بعناية لمساعدتك على النجاح",
    icon: BookOpen,
  },
  {
    title: "دعم فني مستمر",
    description: "فريق دعم متخصص متاح دائماً لمساعدتك وحل أي استفسارات",
    icon: Lightbulb,
  },
  {
    title: "نتائج مضمونة",
    description: "نلتزم بتحقيق نتائج ملموسة أو نعيد أموالك - هذا وعدنا لك",
    icon: TrendingUp,
  },
]

export default function PlatformContentSection() {
  return (
    <section id="platform-content" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            تعرف على منصة ehabgm
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            كل ما تحتاج معرفته عن <span className="gradient-text">ehabgm</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            منصة <strong className="text-primary">ehabgm</strong> هي وجهتك الشاملة للتسويق الرقمي والمنتجات الاحترافية -
            تعرف على قصتنا، خدماتنا، ولماذا نحن الخيار الأمثل لنجاحك
          </p>
        </div>

        {/* Platform Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platformFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-card">
              <CardHeader className="pb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-sm">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-card overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <article.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {article.category}
                  </span>
                </div>

                <CardTitle className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>

                <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                  {article.description}
                </CardDescription>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>

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

        {/* About ehabgm CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-primary/10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                انضم إلى عائلة <span className="gradient-text">ehabgm</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                منصة <strong className="text-primary">ehabgm</strong> ليست مجرد وكالة تسويق أو متجر رقمي - نحن شريكك في
                النجاح. نقدم خدمات تسويق رقمي متكاملة ومنتجات احترافية مصممة خصيصاً لمساعدتك على تحقيق أهدافك.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3"></div>
                  أكثر من 100 عميل راضي عن خدماتنا
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3"></div>
                  مئات المنتجات الرقمية الاحترافية
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3"></div>5 سنوات من الخبرة في التسويق الرقمي
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full ml-3"></div>
                  ضمان استرداد الأموال إذا لم تحقق النتائج
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <Card className="bg-white dark:bg-card border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">ابدأ مع ehabgm اليوم</CardTitle>
                  <CardDescription>اختر الخدمة أو المنتج المناسب لك</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="/services">
                      استكشف خدماتنا
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/store">
                      تصفح المتجر
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href="https://wa.me/201022679250?text=مرحباً، أريد معرفة المزيد عن ehabgm">
                      تواصل معنا
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
