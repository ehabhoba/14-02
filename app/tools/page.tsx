import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "أدوات مجانية بالذكاء الاصطناعي | ehabgm - 8 أدوات احترافية",
  description:
    "أدوات مجانية 100%: منشئ مواقع AI، اختصار روابط، QR، أبحاث AI، NFT، تحويل 3D، واتساب، فواتير. جربها الآن!",
  keywords: "أدوات مجانية، ذكاء اصطناعي، منشئ مواقع AI، اختصار روابط، QR code، مولد أبحاث، ehabgm",
  openGraph: {
    title: "أدوات مجانية بالذكاء الاصطناعي | ehabgm",
    description: "8 أدوات احترافية مجانية 100%: منشئ مواقع، اختصار روابط، QR، وأكثر. جربها الآن!",
    url: "https://ehabgm.online/tools",
    siteName: "ehabgm",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/TYyK2Rtv/logo.png",
        width: 1200,
        height: 630,
        alt: "أدوات مجانية بالذكاء الاصطناعي - ehabgm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "أدوات مجانية بالذكاء الاصطناعي | ehabgm",
    description: "8 أدوات احترافية مجانية 100%. جربها الآن!",
  },
  alternates: {
    canonical: "https://ehabgm.online/tools",
  },
}

export default function ToolsPage() {
  const tools = [
    {
      name: "منشئ المواقع بالذكاء الاصطناعي",
      description: "أنشئ موقعك الإلكتروني الاحترافي في دقائق باستخدام الذكاء الاصطناعي مع شهادة توثيق رقمية",
      icon: "🤖",
      href: "/tools/ai-website-builder",
      color: "from-blue-500 to-cyan-500",
      badge: "جديد",
      features: ["تصميم تلقائي", "شهادة توثيق", "استضافة مجانية", "دومين مخصص"],
    },
    {
      name: "اختصار الروابط",
      description: "اختصر روابطك الطويلة وتتبع النقرات والإحصائيات بسهولة مع تحليلات متقدمة",
      icon: "🔗",
      href: "/tools/url-shortener",
      color: "from-purple-500 to-pink-500",
      features: ["روابط مخصصة", "تتبع النقرات", "إحصائيات مفصلة", "QR code تلقائي"],
    },
    {
      name: "مولد رموز QR",
      description: "أنشئ رموز استجابة سريعة احترافية لموقعك أو منتجاتك مع تخصيص كامل",
      icon: "📱",
      href: "/tools/qr-generator",
      color: "from-green-500 to-emerald-500",
      features: ["تصميم مخصص", "ألوان متعددة", "شعار مدمج", "جودة عالية"],
    },
    {
      name: "مولد الأبحاث بالذكاء الاصطناعي",
      description: "أنشئ أبحاث أكاديمية احترافية للطلاب بالذكاء الاصطناعي مع مراجع موثوقة",
      icon: "📚",
      href: "/tools/ai-research",
      color: "from-orange-500 to-red-500",
      badge: "شائع",
      features: ["محتوى أكاديمي", "مراجع موثوقة", "تنسيق احترافي", "مراجعة لغوية"],
    },
    {
      name: "مولد شهادات NFT",
      description: "أنشئ بطاقات NFT مع شهادات توثيق رقمية على البلوكشين",
      icon: "🎨",
      href: "/tools/nft-certificate",
      color: "from-indigo-500 to-purple-500",
      badge: "مميز",
      features: ["توثيق بلوكشين", "تصميم فريد", "شهادة رقمية", "قابل للتداول"],
    },
    {
      name: "محول الشعارات إلى 3D",
      description: "حول شعارك إلى تصميم ثلاثي الأبعاد احترافي بدقة عالية وجودة استثنائية",
      icon: "🎯",
      href: "/tools/logo-3d",
      color: "from-pink-500 to-rose-500",
      features: ["تحويل تلقائي", "دقة 4K", "إضاءة احترافية", "تصدير متعدد"],
    },
    {
      name: "مولد روابط واتساب",
      description: "أنشئ روابط واتساب مباشرة للمحادثة مع رسائل مخصصة وQR code",
      icon: "💬",
      href: "/tools/whatsapp-link",
      color: "from-green-600 to-green-500",
      features: ["رسائل مخصصة", "QR code", "روابط قصيرة", "تتبع النقرات"],
    },
    {
      name: "مولد الفواتير",
      description: "صمم وأنشئ فواتير احترافية وقم بتنزيلها بصيغة PDF مع شعارك",
      icon: "📄",
      href: "/tools/invoice-generator",
      color: "from-blue-600 to-blue-500",
      features: ["قوالب جاهزة", "تخصيص كامل", "تصدير PDF", "حفظ تلقائي"],
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
            أدوات مجانية 100%
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">أدوات احترافية مدعومة بالذكاء الاصطناعي</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استخدم مجموعتنا الشاملة من الأدوات المجانية المدعومة بالذكاء الاصطناعي لتطوير أعمالك وتحسين إنتاجيتك بشكل
            احترافي
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className={`text-6xl bg-gradient-to-br ${tool.color} bg-clip-text`}>{tool.icon}</div>
                  {tool.badge && (
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">{tool.description}</p>

                <div className="space-y-2 mb-6">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-blue-600 font-bold group-hover:gap-2 transition-all">
                  <span>جرب الآن مجاناً</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج أداة مخصصة؟</h2>
          <p className="text-xl mb-8 opacity-95">نحن نطور أدوات مخصصة حسب احتياجاتك</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>تواصل معنا</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  )
}
