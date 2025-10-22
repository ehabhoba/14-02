import type { Metadata } from "next"
import PortfolioGallery from "@/components/portfolio-gallery"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "معرض أعمالنا - تصاميم احترافية | ehabgm",
  description: "اكتشف معرض أعمالنا الشامل - شعارات احترافية، هويات بصرية، إعلانات ممولة، وتصاميم مطبوعات من ehabgm",
  keywords: "معرض أعمال، تصاميم احترافية، شعارات، هويات بصرية، إعلانات، مطبوعات، ehabgm",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            معرض <span className="text-primary">أعمالنا</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            تصاميم احترافية وشعارات مبتكرة تعكس هوية العلامات التجارية لعملائنا
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">اطلب تصميمك الآن</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/brand-identity">تعرف على خدماتنا</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <PortfolioGallery />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-center mb-12">خدمات التصميم لدينا</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">تصميم الشعارات</h3>
              <p className="text-muted-foreground mb-4">شعارات احترافية وفريدة تعكس هوية علامتك التجارية</p>
              <p className="text-primary font-semibold">500 جنيه</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">الهوية البصرية</h3>
              <p className="text-muted-foreground mb-4">هويات بصرية متكاملة تشمل جميع عناصر العلامة التجارية</p>
              <p className="text-primary font-semibold">من 2,000 جنيه</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📢</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">الإعلانات والمطبوعات</h3>
              <p className="text-muted-foreground mb-4">تصاميم إعلانية احترافية ومطبوعات عالية الجودة</p>
              <p className="text-primary font-semibold">من 300 جنيه</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">هل تريد تصميماً احترافياً لعلامتك التجارية؟</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية من فريق التصميم المتخصص لدينا
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">تواصل معنا</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href="https://wa.me/201022679250">واتساب</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
