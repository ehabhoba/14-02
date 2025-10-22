import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Eye, Lightbulb, Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import DeliveryProcess from "@/components/delivery-process"

export const metadata: Metadata = {
  title: "تصميم هوية بصرية حلوان | ehabgm - شعار + دليل هوية كامل",
  description: "تصميم هوية بصرية احترافية: شعار، ألوان، خطوط، دليل استخدام. تصاميم فريدة تعكس علامتك. عرض مجاني!",
  keywords: "تصميم هوية بصرية حلوان، تصميم شعار، Brand Identity، Logo Design، ehabgm",
  openGraph: {
    title: "تصميم هوية بصرية حلوان | ehabgm",
    description: "هوية بصرية احترافية: شعار + ألوان + دليل. عرض مجاني!",
    url: "https://ehabgm.online/brand-identity",
    siteName: "ehabgm",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "تصميم هوية بصرية - ehabgm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تصميم هوية بصرية حلوان | ehabgm",
    description: "هوية بصرية احترافية: شعار + ألوان + دليل. عرض مجاني!",
  },
  alternates: {
    canonical: "https://ehabgm.online/brand-identity",
  },
}

export default function BrandIdentityPage() {
  const services = [
    {
      icon: Palette,
      title: "تصميم الشعار",
      description: "شعارات احترافية تعكس هوية علامتك التجارية",
    },
    {
      icon: Eye,
      title: "نظام الألوان",
      description: "اختيار الألوان المناسبة لشخصية علامتك",
    },
    {
      icon: Lightbulb,
      title: "دليل الهوية",
      description: "دليل شامل لاستخدام عناصر الهوية البصرية",
    },
    {
      icon: Award,
      title: "التطبيقات البصرية",
      description: "تطبيق الهوية على جميع المواد التسويقية",
    },
  ]

  const portfolio = [
    { title: "هوية مطعم فاخر", category: "مطاعم", image: "/restaurant-brand.png" },
    { title: "هوية شركة تقنية", category: "تكنولوجيا", image: "/tech-brand.png" },
    { title: "هوية عيادة طبية", category: "طبي", image: "/medical-brand.png" },
    { title: "هوية متجر أزياء", category: "أزياء", image: "/fashion-brand.png" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-purple-100 text-purple-800">تصميم الهوية البصرية</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                هوية بصرية
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  {" "}
                  مميزة
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                نصمم هويات بصرية احترافية تعكس شخصية علامتك التجارية وتترك انطباعاً لا يُنسى في أذهان عملائك
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Link href="https://wa.me/201022679250?text=أريد تصميم هوية بصرية لعلامتي التجارية">ابدأ مشروعك</Link>
                </Button>
                <Button variant="outline" size="lg">
                  مشاهدة أعمالنا
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/brand-identity-showcase.png"
                alt="عرض الهوية البصرية"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">خدمات الهوية البصرية</h2>
            <p className="text-xl text-gray-600">حلول شاملة لبناء هوية بصرية قوية</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">معرض أعمالنا</h2>
            <p className="text-xl text-gray-600">هويات بصرية مميزة صممناها لعملائنا</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-purple-100 text-purple-800">{item.category}</Badge>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">الأسعار والعروض</h2>
            <p className="text-xl text-gray-600">عروض خاصة لتصميم الهوية البصرية والشعارات</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <Card className="border-2 border-gray-200 hover:border-purple-600 transition-all duration-300">
              <CardHeader>
                <CardTitle>تصميم شعار</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">500 ج.م</div>
                  <p className="text-sm text-gray-600">بدلاً من 1,199 ج.م</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>3 مقترحات تصميم</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>تعديلات غير محدودة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>ملفات PSD و PNG</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>ملفات متجهة AI</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">اختر هذه الباقة</Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="border-2 border-purple-600 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600">الأكثر طلباً</Badge>
              </div>
              <CardHeader>
                <CardTitle>هوية بصرية كاملة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">1,500 ج.م</div>
                  <p className="text-sm text-gray-600">بدلاً من 2,999 ج.م</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>شعار احترافي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>نظام ألوان كامل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>دليل الهوية البصرية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>تطبيقات بصرية</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">اختر هذه الباقة</Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="border-2 border-gray-200 hover:border-purple-600 transition-all duration-300">
              <CardHeader>
                <CardTitle>هوية متكاملة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">2,500 ج.م</div>
                  <p className="text-sm text-gray-600">بدلاً من 4,999 ج.م</p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>كل ما في الباقات السابقة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>تصاميم مطبوعات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>تصاميم رقمية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>دعم مدى الحياة</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">اختر هذه الباقة</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <DeliveryProcess />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">جاهز لبناء هوية بصرية مميزة؟</h2>
            <p className="text-xl text-purple-100 mb-8">احصل على استشارة مجانية وتصميم أولي لهويتك البصرية</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-12 py-4 text-lg font-semibold">
              <Link href="https://wa.me/201022679250?text=أريد استشارة مجانية لتصميم الهوية البصرية">
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
