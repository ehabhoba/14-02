"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Download, Trash2, Copy, CheckCircle } from "lucide-react"

interface SavedWebsite {
  id: string
  businessName: string
  businessType: string
  description: string
  colors: string
  pages: string[]
  websiteCode: string
  createdAt: string
  certificateId: string
}

export default function AIWebsiteBuilderClient() {
  const [businessName, setBusinessName] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [description, setDescription] = useState("")
  const [colors, setColors] = useState("#3B82F6")
  const [pages, setPages] = useState<string[]>(["home"])
  const [generating, setGenerating] = useState(false)
  const [websiteGenerated, setWebsiteGenerated] = useState(false)
  const [certificateId, setCertificateId] = useState("")
  const [websiteCode, setWebsiteCode] = useState("")
  const [savedWebsites, setSavedWebsites] = useState<SavedWebsite[]>([])
  const [sequenceNumber, setSequenceNumber] = useState(1)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("savedWebsites")
    if (saved) {
      const websites = JSON.parse(saved)
      setSavedWebsites(websites)
      setSequenceNumber(websites.length + 1)
    }
  }, [])

  const autoSaveWebsite = (website: SavedWebsite) => {
    const updated = [...savedWebsites, website]
    setSavedWebsites(updated)
    localStorage.setItem("savedWebsites", JSON.stringify(updated))
    setSequenceNumber(updated.length + 1)
  }

  const pageOptions = [
    { value: "home", label: "الصفحة الرئيسية" },
    { value: "about", label: "من نحن" },
    { value: "services", label: "الخدمات" },
    { value: "portfolio", label: "أعمالنا" },
    { value: "contact", label: "تواصل معنا" },
    { value: "blog", label: "المدونة" },
  ]

  const togglePage = (page: string) => {
    if (pages.includes(page)) {
      setPages(pages.filter((p) => p !== page))
    } else {
      setPages([...pages, page])
    }
  }

  const generateWebsite = async () => {
    if (!businessName || !businessType || !description) return

    setGenerating(true)
    setWebsiteGenerated(false)

    try {
      const response = await fetch("/api/generate-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          businessType,
          description,
          colors: [colors],
          pages: pages.map((p) => pageOptions.find((opt) => opt.value === p)?.label || p),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setWebsiteGenerated(true)
        setCertificateId(data.certificateId)
        setWebsiteCode(data.websiteCode)

        const newWebsite: SavedWebsite = {
          id: `website-${sequenceNumber}-${Date.now()}`,
          businessName,
          businessType,
          description,
          colors,
          pages,
          websiteCode: data.websiteCode,
          createdAt: new Date().toISOString(),
          certificateId: data.certificateId,
        }
        autoSaveWebsite(newWebsite)
      } else {
        alert(`حدث خطأ: ${data.error}`)
      }
    } catch (error) {
      console.error("[v0] Error generating website:", error)
      alert("حدث خطأ أثناء إنشاء الموقع. يرجى المحاولة مرة أخرى.")
    } finally {
      setGenerating(false)
    }
  }

  const downloadWebsite = () => {
    if (!websiteCode) return

    const element = document.createElement("a")
    const file = new Blob([websiteCode], { type: "text/plain;charset=utf-8" })
    element.href = URL.createObjectURL(file)
    element.download = `${businessName.replace(/\s+/g, "-")}-website.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const deleteWebsite = (id: string) => {
    const updated = savedWebsites.filter((w) => w.id !== id)
    setSavedWebsites(updated)
    localStorage.setItem("savedWebsites", JSON.stringify(updated))
  }

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const exportAsJSON = (website: SavedWebsite) => {
    const element = document.createElement("a")
    const file = new Blob([JSON.stringify(website, null, 2)], { type: "application/json" })
    element.href = URL.createObjectURL(file)
    element.download = `${website.businessName}-${website.id}.json`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            الذكاء الاصطناعي المتقدم
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">منشئ المواقع بالذكاء الاصطناعي</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            أنشئ موقعك الإلكتروني الاحترافي في دقائق مع شهادة توثيق ونشر مباشر على منصتنا
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">معلومات الموقع</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">اسم النشاط التجاري</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="مثال: مطعم الأصالة"
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground placeholder-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">نوع النشاط</label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                >
                  <option value="">اختر نوع النشاط</option>
                  <option value="restaurant">مطعم</option>
                  <option value="clinic">عيادة طبية</option>
                  <option value="store">متجر إلكتروني</option>
                  <option value="agency">وكالة تسويق</option>
                  <option value="portfolio">معرض أعمال</option>
                  <option value="education">تعليمي</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">وصف النشاط</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="اكتب وصفاً مختصراً عن نشاطك التجاري..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground placeholder-muted-foreground resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">اللون الأساسي</label>
                <div className="flex gap-3">
                  <input
                    type="color"
                    value={colors}
                    onChange={(e) => setColors(e.target.value)}
                    className="h-12 w-20 rounded-xl border-2 border-border cursor-pointer"
                  />
                  <input
                    type="text"
                    value={colors}
                    onChange={(e) => setColors(e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors font-mono bg-background text-foreground"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">الصفحات المطلوبة</label>
                <div className="grid grid-cols-2 gap-3">
                  {pageOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => togglePage(option.value)}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        pages.includes(option.value)
                          ? "bg-primary text-primary-foreground shadow-lg"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={generateWebsite}
                disabled={!businessName || !businessType || !description || generating}
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-primary/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {generating ? "جاري إنشاء الموقع..." : "إنشاء الموقع بالذكاء الاصطناعي"}
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">معاينة الموقع</h2>

            {!websiteGenerated && !generating && (
              <div className="h-96 flex items-center justify-center text-muted-foreground border-2 border-dashed border-border rounded-xl">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-lg">سيظهر الموقع هنا بعد الإنشاء</p>
                </div>
              </div>
            )}

            {generating && (
              <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-foreground font-semibold mb-2">جاري إنشاء موقعك الاحترافي...</p>
                  <p className="text-sm text-muted-foreground">الذكاء الاصطناعي يعمل على تصميم موقع مخصص لك</p>
                </div>
              </div>
            )}

            {websiteGenerated && (
              <div className="space-y-6">
                {/* Website Preview */}
                <div className="border-4 border-border rounded-xl overflow-hidden">
                  <div className="bg-muted px-4 py-2 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 bg-background rounded px-3 py-1 text-xs text-muted-foreground">
                      {businessName}.ehabgm.online
                    </div>
                  </div>
                  <div className="bg-background p-6" style={{ backgroundColor: colors + "10" }}>
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-foreground" style={{ color: colors }}>
                        {businessName}
                      </h3>
                      <p className="text-muted-foreground">{description}</p>
                      <div className="flex justify-center gap-3 flex-wrap">
                        {pages.map((page) => (
                          <span
                            key={page}
                            className="px-3 py-1 bg-card rounded-full text-sm font-semibold text-foreground border border-border"
                            style={{ color: colors }}
                          >
                            {pageOptions.find((p) => p.value === page)?.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary/20">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-foreground mb-1">شهادة توثيق رقمية</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        تم إصدار شهادة توثيق رقمية لموقعك تثبت ملكيتك وتزيد من مصداقيتك
                      </p>
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-mono bg-background px-3 py-1 rounded border border-border text-primary">
                          #{sequenceNumber} - {certificateId}
                        </p>
                        <button
                          onClick={() => copyToClipboard(certificateId)}
                          className="p-1 hover:bg-muted rounded transition-colors"
                        >
                          {copied ? (
                            <CheckCircle className="w-4 h-4 text-primary" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3">
                  <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                    نشر الموقع على منصتنا
                  </button>
                  <button
                    onClick={downloadWebsite}
                    className="w-full bg-secondary text-secondary-foreground py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    تحميل كود الموقع
                  </button>
                  <button
                    onClick={() => copyToClipboard(websiteCode)}
                    className="w-full border-2 border-border text-foreground py-3 rounded-xl font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2"
                  >
                    <Copy className="w-4 h-4" />
                    نسخ الكود
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Saved Websites Section */}
        {savedWebsites.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">المواقع المحفوظة</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedWebsites.map((website) => (
                <div
                  key={website.id}
                  className="bg-card rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{website.businessName}</h3>
                      <p className="text-sm text-muted-foreground">#{website.id.split("-")[1]}</p>
                    </div>
                    <button
                      onClick={() => deleteWebsite(website.id)}
                      className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                      title="حذف الموقع"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{website.description}</p>
                  <div className="flex gap-2 mb-4">
                    <div
                      className="w-8 h-8 rounded-lg border-2 border-border"
                      style={{ backgroundColor: website.colors }}
                    ></div>
                    <span className="text-xs text-muted-foreground self-center">{website.businessType}</span>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => exportAsJSON(website)}
                      className="w-full bg-primary/10 text-primary py-2 rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors"
                    >
                      تصدير JSON
                    </button>
                    <button
                      onClick={() => copyToClipboard(website.websiteCode)}
                      className="w-full bg-secondary/10 text-secondary py-2 rounded-lg text-sm font-semibold hover:bg-secondary/20 transition-colors"
                    >
                      نسخ الكود
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">سريع وسهل</h3>
            <p className="text-muted-foreground text-sm">أنشئ موقعك في دقائق بدون أي خبرة تقنية</p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">متجاوب تماماً</h3>
            <p className="text-muted-foreground text-sm">يعمل بشكل مثالي على جميع الأجهزة والشاشات</p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-foreground mb-2">آمن وموثوق</h3>
            <p className="text-muted-foreground text-sm">شهادة SSL مجانية وحماية كاملة لموقعك</p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة إلى الأدوات
          </Link>
        </div>
      </div>
    </div>
  )
}
