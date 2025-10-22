"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function SimpleHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const services = {
    webDevelopment: [
      {
        name: "تصميم المواقع الإلكترونية",
        href: "/website-design",
        desc: "مواقع احترافية متجاوبة مع جميع الأجهزة",
        badge: "شائع",
      },
      {
        name: "المتاجر الإلكترونية",
        href: "/ecommerce",
        desc: "حلول تجارة إلكترونية متكاملة مع بوابات دفع",
        badge: "جديد",
      },
      { name: "تطبيقات الجوال", href: "/mobile-apps", desc: "تطبيقات iOS و Android احترافية" },
      { name: "أنظمة إدارة المحتوى CMS", href: "/cms", desc: "أنظمة إدارة محتوى مخصصة وسهلة الاستخدام" },
      { name: "مواقع الأخبار والمجلات", href: "/news-website", desc: "منصات إخبارية متطورة وسريعة" },
      { name: "مواقع الإعلانات المبوبة", href: "/classified-ads", desc: "منصات إعلانات مبوبة متكاملة" },
      { name: "حلول برمجية مخصصة", href: "/custom-solutions", desc: "حلول برمجية مصممة خصيصاً لاحتياجاتك" },
    ],
    marketing: [
      {
        name: "إدارة السوشيال ميديا",
        href: "/social-media",
        desc: "إدارة شاملة لجميع منصات التواصل الاجتماعي",
        badge: "شائع",
      },
      { name: "تحسين محركات البحث SEO", href: "/seo", desc: "تصدر نتائج البحث وزيادة الزيارات العضوية" },
      { name: "الإعلانات الممولة", href: "/paid-ads", desc: "حملات إعلانية فعالة على جميع المنصات", badge: "مميز" },
      { name: "التسويق بالمحتوى", href: "/content-marketing", desc: "محتوى جذاب ومؤثر يحقق أهدافك التسويقية" },
      {
        name: "التسويق عبر البريد الإلكتروني",
        href: "/email-marketing",
        desc: "حملات بريدية احترافية بمعدلات تحويل عالية",
      },
      { name: "استشارات تسويقية", href: "/marketing-consulting", desc: "استراتيجيات تسويقية متقدمة من خبراء المجال" },
    ],
    design: [
      {
        name: "تصميم الهوية البصرية",
        href: "/brand-identity",
        desc: "تصميم هوية مميزة تعكس قيم علامتك التجارية",
        badge: "مميز",
      },
    ],
  }

  const tools = [
    {
      name: "منشئ المواقع بالذكاء الاصطناعي",
      href: "/tools/ai-website-builder",
      desc: "أنشئ موقعك الاحترافي بالذكاء الاصطناعي مع شهادة توثيق",
      badge: "جديد",
    },
    {
      name: "اختصار الروابط",
      href: "/tools/url-shortener",
      desc: "اختصر روابطك وتتبع الإحصائيات بسهولة",
      badge: "شائع",
    },
    { name: "مولد رموز QR", href: "/tools/qr-generator", desc: "أنشئ رموز QR احترافية قابلة للتخصيص", badge: "شائع" },
    { name: "مولد الأبحاث بالذكاء الاصطناعي", href: "/tools/ai-research", desc: "أنشئ أبحاث أكاديمية احترافية للطلاب" },
    { name: "شهادات NFT", href: "/tools/nft-certificate", desc: "أنشئ شهادات NFT موثقة على البلوكشين" },
    { name: "محول الشعارات إلى 3D", href: "/tools/logo-3d", desc: "حول شعارك إلى تصميم ثلاثي الأبعاد احترافي" },
    { name: "مولد روابط واتساب", href: "/tools/whatsapp-link", desc: "أنشئ روابط واتساب مباشرة للمحادثة" },
    { name: "مولد الفواتير", href: "/tools/invoice-generator", desc: "صمم وأنشئ فواتير احترافية وحملها فوراً" },
    {
      name: "استيراد منشورات فيسبوك",
      href: "/tools/facebook-blog-importer",
      desc: "حول منشورات فيسبوك إلى مقالات مدونة احترافية",
      badge: "جديد",
    },
  ]

  const ServiceIcon = ({ type }: { type: string }) => {
    switch (type) {
      case "website":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        )
      case "ecommerce":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        )
      case "mobile":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        )
      case "cms":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case "news":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 00-2-2V6a2 2 0 002-2h10a2 2 0 002 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        )
      case "ads":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        )
      case "custom":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        )
      case "social":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        )
      case "seo":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        )
      case "paidads":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      case "content":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        )
      case "email":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        )
      case "consulting":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        )
      case "brand":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            />
          </svg>
        )
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        )
    }
  }

  const getIconType = (name: string): string => {
    if (name.includes("موقع")) return "website"
    if (name.includes("متجر")) return "ecommerce"
    if (name.includes("تطبيق")) return "mobile"
    if (name.includes("CMS") || name.includes("إدارة المحتوى")) return "cms"
    if (name.includes("أخبار")) return "news"
    if (name.includes("إعلانات")) return "ads"
    if (name.includes("مخصص")) return "custom"
    if (name.includes("سوشيال")) return "social"
    if (name.includes("SEO") || name.includes("محركات")) return "seo"
    if (name.includes("ممولة")) return "paidads"
    if (name.includes("محتوى")) return "content"
    if (name.includes("بريد")) return "email"
    if (name.includes("استشار")) return "consulting"
    if (name.includes("هوية")) return "brand"
    if (name.includes("فيسبوك")) return "social"
    return "website"
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity flex-shrink-0"
            aria-label="الصفحة الرئيسية - ehabgm وكالة التسويق الرقمي"
          >
            <Image
              src="/images/design-mode/logo.png"
              alt="ehabgm - وكالة التسويق الرقمي في حلوان"
              width={40}
              height={40}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-sm"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
                ehabgm
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 font-semibold tracking-wide hidden xs:block">
                التسويق الرقمي • حلوان
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" role="navigation" aria-label="القائمة الرئيسية">
            <Link
              href="/"
              className="text-sm xl:text-[15px] text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold relative group py-2"
              aria-label="الصفحة الرئيسية"
            >
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>

            <div className="relative group">
              <button
                className="text-sm xl:text-[15px] text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold flex items-center gap-1.5 py-2"
                aria-haspopup="true"
                aria-expanded="false"
              >
                خدماتنا
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full right-0 mt-3 w-[95vw] max-w-[850px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden"
                role="menu"
              >
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-0">
                  <div className="p-5 xl:p-7 bg-gradient-to-br from-blue-50/50 via-white to-white border-b xl:border-b-0 xl:border-l border-gray-100">
                    <div className="flex items-center gap-3 mb-4 xl:mb-5">
                      <div className="w-1 h-8 xl:h-10 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base xl:text-lg leading-tight">تطوير الويب</h3>
                        <p className="text-[10px] xl:text-xs text-gray-500 mt-0.5 font-medium">
                          {services.webDevelopment.length} خدمات متاحة
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 xl:space-y-1.5">
                      {services.webDevelopment.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-3 xl:px-4 py-2.5 xl:py-3.5 text-sm text-gray-700 hover:bg-white hover:shadow-md rounded-xl transition-all duration-200 group/item relative overflow-hidden"
                          role="menuitem"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover/item:from-blue-500/5 group-hover/item:to-purple-500/5 transition-all duration-300"></div>
                          <div className="relative flex items-start gap-2 xl:gap-3">
                            <div className="text-blue-600 group-hover/item:scale-110 transition-transform duration-200 mt-0.5 flex-shrink-0">
                              <ServiceIcon type={getIconType(service.name)} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-[13px] xl:text-[15px] text-gray-900 group-hover/item:text-blue-600 transition-colors duration-200 flex items-center gap-2 leading-snug mb-0.5 xl:mb-1">
                                <span className="line-clamp-1">{service.name}</span>
                                {service.badge && (
                                  <span className="text-[9px] xl:text-[10px] px-1.5 xl:px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-bold flex-shrink-0">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] xl:text-xs text-gray-500 leading-relaxed line-clamp-2">
                                {service.desc}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 xl:p-7 bg-gradient-to-br from-purple-50/50 via-white to-white border-b xl:border-b-0 xl:border-l border-gray-100">
                    <div className="flex items-center gap-3 mb-4 xl:mb-5">
                      <div className="w-1 h-8 xl:h-10 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full"></div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base xl:text-lg leading-tight">التسويق الرقمي</h3>
                        <p className="text-[10px] xl:text-xs text-gray-500 mt-0.5 font-medium">
                          {services.marketing.length} خدمات متاحة
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 xl:space-y-1.5">
                      {services.marketing.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-3 xl:px-4 py-2.5 xl:py-3.5 text-sm text-gray-700 hover:bg-white hover:shadow-md rounded-xl transition-all duration-200 group/item relative overflow-hidden"
                          role="menuitem"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-purple-500/0 group-hover/item:from-purple-500/5 group-hover/item:to-pink-500/5 transition-all duration-300"></div>
                          <div className="relative flex items-start gap-2 xl:gap-3">
                            <div className="text-purple-600 group-hover/item:scale-110 transition-transform duration-200 mt-0.5 flex-shrink-0">
                              <ServiceIcon type={getIconType(service.name)} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-[13px] xl:text-[15px] text-gray-900 group-hover/item:text-purple-600 transition-colors duration-200 flex items-center gap-2 leading-snug mb-0.5 xl:mb-1">
                                <span className="line-clamp-1">{service.name}</span>
                                {service.badge && (
                                  <span className="text-[9px] xl:text-[10px] px-1.5 xl:px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full font-bold flex-shrink-0">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] xl:text-xs text-gray-500 leading-relaxed line-clamp-2">
                                {service.desc}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 xl:p-7 bg-gradient-to-br from-pink-50/50 via-white to-white">
                    <div className="flex items-center gap-3 mb-4 xl:mb-5">
                      <div className="w-1 h-8 xl:h-10 bg-gradient-to-b from-pink-600 to-pink-400 rounded-full"></div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-base xl:text-lg leading-tight">التصميم</h3>
                        <p className="text-[10px] xl:text-xs text-gray-500 mt-0.5 font-medium">
                          {services.design.length} خدمة متاحة
                        </p>
                      </div>
                    </div>
                    <div className="space-y-1 xl:space-y-1.5 mb-4 xl:mb-6">
                      {services.design.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-3 xl:px-4 py-2.5 xl:py-3.5 text-sm text-gray-700 hover:bg-white hover:shadow-md rounded-xl transition-all duration-200 group/item relative overflow-hidden"
                          role="menuitem"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-pink-500/0 group-hover/item:from-pink-500/5 group-hover/item:to-red-500/5 transition-all duration-300"></div>
                          <div className="relative flex items-start gap-2 xl:gap-3">
                            <div className="text-pink-600 group-hover/item:scale-110 transition-transform duration-200 mt-0.5 flex-shrink-0">
                              <ServiceIcon type={getIconType(service.name)} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-[13px] xl:text-[15px] text-gray-900 group-hover/item:text-pink-600 transition-colors duration-200 flex items-center gap-2 leading-snug mb-0.5 xl:mb-1">
                                <span className="line-clamp-1">{service.name}</span>
                                {service.badge && (
                                  <span className="text-[9px] xl:text-[10px] px-1.5 xl:px-2 py-0.5 bg-pink-100 text-pink-700 rounded-full font-bold flex-shrink-0">
                                    {service.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] xl:text-xs text-gray-500 leading-relaxed line-clamp-2">
                                {service.desc}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-auto p-4 xl:p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg text-white">
                      <div className="flex items-center gap-2 mb-2 xl:mb-3">
                        <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <p className="font-bold text-sm xl:text-base leading-tight">استشارة مجانية</p>
                      </div>
                      <p className="text-[11px] xl:text-[13px] opacity-95 mb-3 xl:mb-4 leading-relaxed">
                        احصل على استشارة مجانية من خبرائنا لتحديد أفضل الحلول لمشروعك
                      </p>
                      <Link
                        href="/contact"
                        className="block text-center bg-white text-blue-600 px-4 xl:px-5 py-2.5 xl:py-3 rounded-lg text-xs xl:text-sm font-bold hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg"
                      >
                        تواصل معنا الآن
                      </Link>
                    </div>

                    <div className="mt-3 xl:mt-4 grid grid-cols-2 gap-2 xl:gap-3">
                      <div className="bg-white p-3 xl:p-4 rounded-xl border border-gray-100 text-center shadow-sm">
                        <div className="text-2xl xl:text-3xl font-bold text-blue-600 leading-none mb-1">500+</div>
                        <div className="text-[10px] xl:text-xs text-gray-600 font-semibold">مشروع ناجح</div>
                      </div>
                      <div className="bg-white p-3 xl:p-4 rounded-xl border border-gray-100 text-center shadow-sm">
                        <div className="text-2xl xl:text-3xl font-bold text-purple-600 leading-none mb-1">98%</div>
                        <div className="text-[10px] xl:text-xs text-gray-600 font-semibold">رضا العملاء</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="text-sm xl:text-[15px] text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold flex items-center gap-1.5 py-2"
                aria-haspopup="true"
                aria-expanded="false"
              >
                الأدوات
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className="absolute top-full right-0 mt-3 w-[450px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100 overflow-hidden"
                role="menu"
              >
                <div className="p-6 bg-gradient-to-br from-emerald-50/50 via-white to-white">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-10 bg-gradient-to-b from-emerald-600 to-emerald-400 rounded-full"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg leading-tight">أدوات مجانية</h3>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">{tools.length} أداة متاحة</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 max-h-[400px] overflow-y-auto">
                    {tools.map((tool, index) => (
                      <Link
                        key={index}
                        href={tool.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-white hover:shadow-md rounded-xl transition-all duration-200 group/item relative overflow-hidden"
                        role="menuitem"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-emerald-500/0 group-hover/item:from-emerald-500/5 group-hover/item:to-teal-500/5 transition-all duration-300"></div>
                        <div className="relative">
                          <div className="font-bold text-[14px] text-gray-900 group-hover/item:text-emerald-600 transition-colors duration-200 flex items-center gap-2 leading-snug mb-1">
                            <span className="line-clamp-1">{tool.name}</span>
                            {tool.badge && (
                              <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-bold flex-shrink-0">
                                {tool.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 leading-relaxed line-clamp-1">{tool.desc}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/tools"
                    className="mt-4 block text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-3 rounded-lg text-sm font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-md"
                  >
                    عرض جميع الأدوات
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-sm xl:text-[15px] text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold relative group py-2"
            >
              الأسعار
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-sm xl:text-[15px] text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold relative group py-2"
            >
              من نحن
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-sm xl:text-[15px] text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold relative group py-2"
            >
              المدونة
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-sm xl:text-[15px] text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold relative group py-2"
            >
              تواصل معنا
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3">
            <a
              href="tel:+201022679250"
              className="hidden md:flex items-center gap-1.5 lg:gap-2 text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold text-sm lg:text-[15px] px-2 lg:px-3 py-2 rounded-lg hover:bg-gray-50"
              aria-label="اتصل بنا"
            >
              <svg
                className="w-4 h-4 lg:w-5 lg:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden xl:inline">اتصل بنا</span>
            </a>

            <a
              href="https://wa.me/201022679250?text=مرحباً، أريد الاستفسار عن خدماتكم"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg lg:rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 font-bold text-xs sm:text-sm lg:text-[15px] shadow-md hover:shadow-lg flex items-center gap-1.5 lg:gap-2"
              aria-label="تواصل عبر واتساب"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="hidden sm:inline">واتساب</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 p-2 sm:p-2.5 hover:bg-gray-100 rounded-lg lg:rounded-xl transition-all duration-200 active:scale-95"
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[65px] sm:top-[73px] bg-white z-40 overflow-y-auto overscroll-contain">
            <nav
              className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-1.5 sm:space-y-2"
              role="navigation"
              aria-label="القائمة المحمولة"
            >
              <Link
                href="/"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                الرئيسية
              </Link>

              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                aria-expanded={servicesOpen}
              >
                خدماتنا
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="pr-2 sm:pr-4 space-y-1.5 sm:space-y-2 pb-2 sm:pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 mt-2 sm:mt-3 mb-1.5 sm:mb-2 px-4 sm:px-5 tracking-wide">
                    <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
                    تطوير الويب
                  </div>
                  {services.webDevelopment.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-semibold active:scale-98"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-600 mt-3 sm:mt-4 mb-1.5 sm:mb-2 px-4 sm:px-5 tracking-wide">
                    <div className="w-1 h-4 bg-purple-600 rounded-full"></div>
                    التسويق الرقمي
                  </div>
                  {services.marketing.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-all duration-200 font-semibold active:scale-98"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="flex items-center gap-2 text-xs font-bold text-pink-600 mt-3 sm:mt-4 mb-1.5 sm:mb-2 px-4 sm:px-5 tracking-wide">
                    <div className="w-1 h-4 bg-pink-600 rounded-full"></div>
                    التصميم
                  </div>
                  {services.design.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded-xl transition-all duration-200 font-semibold active:scale-98"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                aria-expanded={toolsOpen}
              >
                الأدوات المجانية
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${toolsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {toolsOpen && (
                <div className="pr-2 sm:pr-4 space-y-1.5 sm:space-y-2 pb-2 sm:pb-3">
                  {tools.map((tool, index) => (
                    <Link
                      key={index}
                      href={tool.href}
                      className="block px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all duration-200 font-semibold active:scale-98"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/pricing"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأسعار
              </Link>
              <Link
                href="/about"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/achievements"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                إنجازاتنا
              </Link>
              <Link
                href="/blog"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                المدونة
              </Link>
              <Link
                href="/faq"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                الأسئلة الشائعة
              </Link>
              <Link
                href="/support"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                الدعم الفني
              </Link>
              <Link
                href="/contact"
                className="block px-4 sm:px-5 py-3 sm:py-3.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-bold text-sm sm:text-[15px] active:scale-98"
                onClick={() => setMobileMenuOpen(false)}
              >
                تواصل معنا
              </Link>

              <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl text-white">
                <p className="font-bold text-base sm:text-lg mb-2">استشارة مجانية</p>
                <p className="text-xs sm:text-sm opacity-95 mb-3 sm:mb-4 leading-relaxed">
                  احصل على استشارة مجانية من خبرائنا
                </p>
                <a
                  href="tel:+201022679250"
                  className="block text-center bg-white text-blue-600 px-4 py-2.5 sm:py-3 rounded-lg text-sm font-bold hover:bg-blue-50 transition-all duration-200 shadow-md active:scale-98"
                >
                  اتصل بنا الآن
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
