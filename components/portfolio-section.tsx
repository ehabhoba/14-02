import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, TrendingUp, Globe } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "مطعم الأصالة - حلوان",
    category: "مطاعم وكافيهات",
    description: "زيادة المبيعات بنسبة 180% خلال 3 أشهر من خلال حملات فيسبوك وإنستجرام المستهدفة",
    image: "/egyptian-restaurant-campaign.png",
    results: [
      { metric: "زيادة المبيعات", value: "+180%" },
      { metric: "متابعين جدد", value: "+5,000" },
      { metric: "معدل التفاعل", value: "+250%" },
    ],
    tags: ["سوشيال ميديا", "إعلانات ممولة", "تصوير منتجات"],
  },
  {
    title: "عيادة د. أحمد للأسنان",
    category: "خدمات طبية",
    description: "تطوير موقع إلكتروني وحملة SEO أدت لزيادة الحجوزات بنسبة 300%",
    image: "/modern-arabic-dental-website.png",
    results: [
      { metric: "زيادة الحجوزات", value: "+300%" },
      { metric: "زوار الموقع", value: "+400%" },
      { metric: "ترتيب جوجل", value: "الصفحة الأولى" },
    ],
    tags: ["تطوير مواقع", "SEO", "تصميم طبي"],
  },
  {
    title: "متجر أزياء فاشونيستا",
    category: "تجارة إلكترونية",
    description: "إطلاق متجر إلكتروني مع استراتيجية تسويق شاملة حققت مبيعات تجاوزت المليون جنيه",
    image: "/arabic-fashion-ecommerce.png",
    results: [
      { metric: "إجمالي المبيعات", value: "+1M جنيه" },
      { metric: "معدل التحويل", value: "+8.5%" },
      { metric: "عملاء جدد", value: "+2,500" },
    ],
    tags: ["تجارة إلكترونية", "تصميم مواقع", "تسويق رقمي"],
  },
  {
    title: "منصة حلوان أونلاين",
    category: "منصة إلكترونية",
    description: "منصة متكاملة لخدمات حلوان الرقمية مع نظام إدارة محتوى متقدم",
    image: "/helwan-online-showcase.png",
    results: [
      { metric: "زوار شهري", value: "+50K" },
      { metric: "معدل التحويل", value: "+6.2%" },
      { metric: "وقت التحميل", value: "0.8 ثانية" },
    ],
    tags: ["تطوير مواقع", "SEO", "تصميم متقدم"],
    link: "https://www.helwan.online",
  },
  {
    title: "منصة إعلانات القاهرة",
    category: "مبوبة إعلانية",
    description: "منصة إعلانات متقدمة مع نظام دفع آمن وإدارة مستخدمين احترافية",
    image: "/cairo-ads-showcase.png",
    results: [
      { metric: "إعلانات نشطة", value: "+10K" },
      { metric: "مستخدمين نشطين", value: "+5K" },
      { metric: "معدل الأمان", value: "99.9%" },
    ],
    tags: ["مبوبة إعلانية", "نظام دفع", "إدارة مستخدمين"],
    link: "https://www.cairoeg.online",
  },
  {
    title: "متجر ehabgm الإلكتروني",
    category: "متجر إلكتروني",
    description: "متجر متكامل لبيع الخدمات الرقمية والمنتجات مع نظام إدارة متقدم",
    image: "/ehabgm-store-showcase.png",
    results: [
      { metric: "منتجات نشطة", value: "+500" },
      { metric: "معدل الرضا", value: "4.9/5" },
      { metric: "سرعة التسليم", value: "فوري" },
    ],
    tags: ["متجر إلكتروني", "نظام دفع", "خدمات رقمية"],
    link: "https://www.ehabgm.online",
  },
]

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-primary/10 rounded-full text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            أعمالنا المميزة
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            قصص نجاح <span className="text-primary">حقيقية</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            اكتشف كيف ساعدنا عملاءنا في حلوان والقاهرة على تحقيق نتائج استثنائية وتنمية أعمالهم
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98] touch-manipulation"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                {/* Image */}
                <div className={`relative h-64 sm:h-72 lg:h-full ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-primary text-primary-foreground px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <CardContent
                  className={`p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-4">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                      {project.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="text-center p-2 sm:p-3 lg:p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                        >
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-0.5 sm:mb-1">
                            {result.value}
                          </div>
                          <div className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex gap-2 sm:gap-3 flex-wrap pt-2 sm:pt-4">
                      <Button
                        variant="outline"
                        className="bg-transparent hover:bg-muted active:scale-95 transition-transform text-xs sm:text-sm h-9 sm:h-10 touch-manipulation"
                      >
                        <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                        اعرف التفاصيل
                      </Button>
                      {project.link && (
                        <Button
                          asChild
                          className="bg-primary hover:bg-primary/90 active:scale-95 transition-transform text-xs sm:text-sm h-9 sm:h-10 touch-manipulation"
                        >
                          <Link href={project.link} target="_blank" rel="noopener noreferrer">
                            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                            زيارة الموقع
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-muted/30 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">شاهد المزيد من أعمالنا</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
              لدينا العديد من قصص النجاح الأخرى التي نفتخر بها
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 active:scale-95 transition-transform touch-manipulation text-sm sm:text-base h-10 sm:h-12"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              عرض جميع الأعمال
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
