"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("services")

  const tabs = {
    services: {
      label: "الخدمات",
      items: [
        {
          name: "البرمجة والتطوير",
          href: "#development",
          dropdown: [
            { name: "تصميم موقع إلكتروني", href: "/website-design" },
            { name: "تصميم متجر إلكتروني", href: "/ecommerce" },
            { name: "تصميم جريدة إلكترونية", href: "/news-website" },
            { name: "تصميم موقع مبوبة إعلانية", href: "/classified-ads" },
            { name: "تطوير تطبيقات الموبايل", href: "/mobile-apps" },
            { name: "أنظمة إدارة المحتوى", href: "/cms" },
            { name: "حلول برمجية مخصصة", href: "/custom-solutions" },
          ],
        },
        {
          name: "التسويق الإلكتروني",
          href: "#digital-marketing",
          dropdown: [
            { name: "إدارة حملات السوشيال ميديا", href: "/social-media" },
            { name: "تحسين محركات البحث (SEO)", href: "/seo" },
            { name: "الإعلانات الممولة", href: "/paid-ads" },
            { name: "التسويق عبر البريد الإلكتروني", href: "/email-marketing" },
            { name: "التسويق بالمحتوى", href: "/content-marketing" },
          ],
        },
        {
          name: "تصميم الجرافيك",
          href: "/brand-identity",
          dropdown: [{ name: "تصميم الهوية البصرية", href: "/brand-identity" }],
        },
        {
          name: "حلول الأعمال",
          href: "/marketing-consulting",
          dropdown: [{ name: "الاستشارات التسويقية", href: "/marketing-consulting" }],
        },
      ],
    },
    tools: {
      label: "الأدوات",
      items: [
        {
          name: "الأدوات",
          href: "/tools",
          dropdown: [
            { name: "منشئ المواقع بالذكاء الاصطناعي", href: "/tools/ai-website-builder" },
            { name: "أداة البحث بالذكاء الاصطناعي", href: "/tools/ai-research" },
            { name: "مولد رموز QR", href: "/tools/qr-generator" },
            { name: "مختصر الروابط", href: "/tools/url-shortener" },
            { name: "مولد شهادات NFT", href: "/tools/nft-certificate" },
            { name: "تحويل الشعار إلى 3D", href: "/tools/logo-3d" },
            { name: "رابط واتس آب", href: "/tools/whatsapp-link" },
            { name: "مولد الفواتير", href: "/tools/invoice-generator" },
            { name: "مستورد مدونة فيسبوك", href: "/tools/facebook-blog-importer" },
          ],
        },
      ],
    },
    company: {
      label: "الشركة",
      items: [
        {
          name: "من نحن",
          href: "/about",
          dropdown: [
            { name: "قصتنا", href: "/about" },
            { name: "إنجازاتنا", href: "/achievements" },
            { name: "سابقة الأعمال", href: "/portfolio" },
          ],
        },
      ],
    },
    resources: {
      label: "الموارد",
      items: [
        { name: "المدونة", href: "/blog" },
        { name: "الأسئلة الشائعة", href: "/faq" },
        { name: "الدعم", href: "/support" },
      ],
    },
  }

  const navItems = [
    { name: "الرئيسية", href: "/" },
    ...tabs.services.items,
    ...tabs.tools.items,
    ...tabs.company.items,
    ...tabs.resources.items,
    { name: "المتجر", href: "/store" },
    { name: "الأسعار", href: "/pricing" },
    { name: "تواصل معنا", href: "/contact" },
  ]

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 touch-manipulation">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 transition-transform active:scale-95">
              <Image src="/images/design-mode/logo.png" alt="ehabgm Logo" fill className="object-contain" priority />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-primary">ehabgm</h1>
              <p className="text-[10px] sm:text-xs text-muted-foreground hidden xs:block">وكالة التسويق الرقمي</p>
            </div>
          </Link>

          {/* Desktop Navigation with Tabs */}
          <nav className="hidden lg:flex items-center space-x-6 space-x-reverse">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200">
              الرئيسية
            </Link>

            {Object.entries(tabs).map(([tabKey, tab]) => (
              <div key={tabKey} className="relative group">
                <button
                  className="flex items-center text-foreground hover:text-primary transition-colors duration-200 py-2 group-hover:text-primary"
                  onMouseEnter={() => setActiveDropdown(tabKey)}
                >
                  {tab.label}
                  <Icons.ChevronDown className="w-4 h-4 mr-1" />
                </button>
                <div
                  className={`absolute top-full right-0 mt-1 w-80 bg-background border border-border rounded-lg shadow-lg transition-all duration-200 ${
                    activeDropdown === tabKey ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setActiveDropdown(tabKey)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="p-4">
                    {tab.items.map((item) => (
                      <div key={item.name} className="mb-4 last:mb-0">
                        {item.dropdown ? (
                          <div>
                            <h3 className="text-sm font-semibold text-foreground mb-2">{item.name}</h3>
                            <div className="space-y-1 pr-2">
                              {item.dropdown.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors duration-200 py-2 px-2 rounded"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <a
                            href={item.href}
                            className="block text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 py-2"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link href="/store" className="text-foreground hover:text-primary transition-colors duration-200">
              المتجر
            </Link>
            <Link href="/pricing" className="text-foreground hover:text-primary transition-colors duration-200">
              الأسعار
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-200">
              تواصل معنا
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
                <Icons.Phone className="w-4 h-4 ml-2" />
                احجز استشارتك المجانية
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 hover:bg-muted rounded-xl transition-all active:scale-95 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border max-h-[calc(100vh-100px)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-1 pt-4">
              <Link
                href="/"
                className="block text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-4 px-4 rounded-xl text-base font-medium touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>

              {Object.entries(tabs).map(([tabKey, tab]) => (
                <div key={tabKey}>
                  <button
                    className="flex items-center justify-between w-full text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-4 px-4 rounded-xl text-base font-medium touch-manipulation"
                    onClick={() => setActiveTab(activeTab === tabKey ? "" : tabKey)}
                  >
                    <span>{tab.label}</span>
                    <Icons.ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${activeTab === tabKey ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeTab === tabKey && (
                    <div className="pr-4 space-y-1 mt-1 mb-2 animate-in slide-in-from-top-1 duration-200">
                      {tab.items.map((item) => (
                        <div key={item.name}>
                          {item.dropdown ? (
                            <div>
                              <div className="text-sm font-semibold text-foreground py-2 px-4">{item.name}</div>
                              <div className="space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="block text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-3 px-6 rounded-lg touch-manipulation"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <a
                              href={item.href}
                              className="block text-sm text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-3 px-4 rounded-lg touch-manipulation"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/store"
                className="block text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-4 px-4 rounded-xl text-base font-medium touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                المتجر
              </Link>
              <Link
                href="/pricing"
                className="block text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-4 px-4 rounded-xl text-base font-medium touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                الأسعار
              </Link>
              <Link
                href="/contact"
                className="block text-foreground hover:text-primary hover:bg-muted/50 active:bg-muted transition-all duration-200 py-4 px-4 rounded-xl text-base font-medium touch-manipulation"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Link>

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 active:scale-95 w-full mt-4 h-14 text-base font-bold shadow-lg touch-manipulation transition-transform"
              >
                <Link href="https://wa.me/201022679250?text=مرحباً، أريد حجز استشارة مجانية">
                  <Icons.Phone className="w-5 h-5 ml-2" />
                  احجز استشارتك المجانية
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
