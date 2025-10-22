import Link from "next/link"

export default function ToolsSection() {
  const tools = [
    {
      name: "منشئ المواقع بالذكاء الاصطناعي",
      description: "أنشئ موقعك الإلكتروني الاحترافي في دقائق باستخدام الذكاء الاصطناعي مع شهادة توثيق",
      icon: "🤖",
      href: "/tools/ai-website-builder",
      color: "from-blue-500 to-cyan-500",
      badge: "جديد",
    },
    {
      name: "اختصار الروابط",
      description: "اختصر روابطك الطويلة وتتبع النقرات والإحصائيات بسهولة",
      icon: "🔗",
      href: "/tools/url-shortener",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "مولد رموز QR",
      description: "أنشئ رموز استجابة سريعة احترافية لموقعك أو منتجاتك",
      icon: "📱",
      href: "/tools/qr-generator",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "مولد الأبحاث بالذكاء الاصطناعي",
      description: "أنشئ أبحاث أكاديمية احترافية للطلاب بالذكاء الاصطناعي",
      icon: "📚",
      href: "/tools/ai-research",
      color: "from-orange-500 to-red-500",
      badge: "شائع",
    },
    {
      name: "مولد شهادات NFT",
      description: "أنشئ بطاقات NFT مع شهادات توثيق رقمية على البلوكشين",
      icon: "🎨",
      href: "/tools/nft-certificate",
      color: "from-indigo-500 to-purple-500",
      badge: "مميز",
    },
    {
      name: "محول الشعارات إلى 3D",
      description: "حول شعارك إلى تصميم ثلاثي الأبعاد احترافي بدقة عالية",
      icon: "🎯",
      href: "/tools/logo-3d",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "مولد روابط واتساب",
      description: "أنشئ روابط واتساب مباشرة للمحادثة مع رسائل مخصصة",
      icon: "💬",
      href: "/tools/whatsapp-link",
      color: "from-green-600 to-green-500",
    },
    {
      name: "مولد الفواتير",
      description: "صمم وأنشئ فواتير احترافية وقم بتنزيلها بصيغة PDF",
      icon: "📄",
      href: "/tools/invoice-generator",
      color: "from-blue-600 to-blue-500",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4">
            أدوات مجانية
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">أدوات احترافية مدعومة بالذكاء الاصطناعي</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة شاملة من الأدوات المتقدمة لمساعدتك في تطوير أعمالك وتحسين إنتاجيتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-5xl bg-gradient-to-br ${tool.color} bg-clip-text`}>{tool.icon}</div>
                  {tool.badge && (
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                      {tool.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{tool.description}</p>

                <div className="flex items-center text-blue-600 font-bold text-sm group-hover:gap-2 transition-all">
                  <span>جرب الآن</span>
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

        <div className="mt-12 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>استكشف جميع الأدوات</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
