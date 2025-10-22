"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Download, Trash2 } from "lucide-react"

interface SavedResearch {
  id: string
  topic: string
  pages: string
  level: string
  language: string
  research: string
  createdAt: string
  sequenceNumber: number
}

export default function AIResearchClient() {
  const [topic, setTopic] = useState("")
  const [pages, setPages] = useState("10")
  const [level, setLevel] = useState("university")
  const [language, setLanguage] = useState("arabic")
  const [research, setResearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [savedResearch, setSavedResearch] = useState<SavedResearch[]>([])
  const [sequenceNumber, setSequenceNumber] = useState(1)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("savedResearch")
    if (saved) {
      const research = JSON.parse(saved)
      setSavedResearch(research)
      setSequenceNumber(research.length + 1)
    }
  }, [])

  const autoSaveResearch = (newResearch: SavedResearch) => {
    const updated = [...savedResearch, newResearch]
    setSavedResearch(updated)
    localStorage.setItem("savedResearch", JSON.stringify(updated))
    setSequenceNumber(updated.length + 1)
  }

  const generateResearch = async () => {
    if (!topic) return

    setLoading(true)
    setResearch("")

    try {
      const response = await fetch("/api/generate-research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, pages, level, language }),
      })

      const data = await response.json()

      if (response.ok) {
        setResearch(data.research)

        const newResearch: SavedResearch = {
          id: `research-${sequenceNumber}-${Date.now()}`,
          topic,
          pages,
          level,
          language,
          research: data.research,
          createdAt: new Date().toISOString(),
          sequenceNumber,
        }
        autoSaveResearch(newResearch)
      } else {
        setResearch(`حدث خطأ: ${data.error}`)
      }
    } catch (error) {
      console.error("[v0] Error generating research:", error)
      setResearch("حدث خطأ أثناء إنشاء البحث. يرجى المحاولة مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }

  const downloadResearch = () => {
    const element = document.createElement("a")
    const file = new Blob([research], { type: "text/plain;charset=utf-8" })
    element.href = URL.createObjectURL(file)
    element.download = `${topic.replace(/\s+/g, "-")}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const deleteResearch = (id: string) => {
    const updated = savedResearch.filter((r) => r.id !== id)
    setSavedResearch(updated)
    localStorage.setItem("savedResearch", JSON.stringify(updated))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const exportAsJSON = (item: SavedResearch) => {
    const element = document.createElement("a")
    const file = new Blob([JSON.stringify(item, null, 2)], { type: "application/json" })
    element.href = URL.createObjectURL(file)
    element.download = `${item.topic}-${item.id}.json`
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
            أداة مجانية بالذكاء الاصطناعي
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">مولد الأبحاث الأكاديمية</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            أنشئ أبحاث أكاديمية احترافية للطلاب والباحثين في مصر والشرق الأوسط باستخدام الذكاء الاصطناعي
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">إعدادات البحث</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">موضوع البحث</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="مثال: التحول الرقمي في مصر"
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground placeholder-muted-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">عدد الصفحات</label>
                <select
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                >
                  <option value="5">5 صفحات</option>
                  <option value="10">10 صفحات</option>
                  <option value="15">15 صفحات</option>
                  <option value="20">20 صفحة</option>
                  <option value="30">30 صفحة</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">المستوى الأكاديمي</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                >
                  <option value="high-school">ثانوي</option>
                  <option value="university">جامعي</option>
                  <option value="masters">ماجستير</option>
                  <option value="phd">دكتوراه</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">لغة البحث</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors bg-background text-foreground"
                >
                  <option value="arabic">العربية</option>
                  <option value="english">الإنجليزية</option>
                  <option value="both">العربية والإنجليزية</option>
                </select>
              </div>

              <button
                onClick={generateResearch}
                disabled={!topic || loading}
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 rounded-xl font-bold text-lg hover:from-primary/90 hover:to-primary/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {loading ? "جاري إنشاء البحث..." : "إنشاء البحث"}
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-bold text-foreground mb-4">مميزات الأداة:</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>بحث أكاديمي متكامل مع المقدمة والخاتمة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>مراجع ومصادر موثوقة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>تنسيق احترافي جاهز للطباعة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>محتوى مناسب للسوق المصري والعربي</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">البحث المُنشأ</h2>
              {research && (
                <button
                  onClick={downloadResearch}
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  تحميل
                </button>
              )}
            </div>

            {!research && !loading && (
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-lg">سيظهر البحث هنا بعد الإنشاء</p>
                </div>
              </div>
            )}

            {loading && (
              <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-foreground">جاري إنشاء البحث الأكاديمي...</p>
                </div>
              </div>
            )}

            {research && !loading && (
              <div className="prose prose-sm max-w-none">
                <div className="bg-muted p-6 rounded-xl max-h-[600px] overflow-y-auto">
                  <pre className="whitespace-pre-wrap font-sans text-foreground leading-relaxed">{research}</pre>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Saved Research Section */}
        {savedResearch.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">الأبحاث المحفوظة</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedResearch.map((item) => (
                <div
                  key={item.id}
                  className="bg-card rounded-xl shadow-lg p-6 border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-foreground text-lg line-clamp-2">{item.topic}</h3>
                      <p className="text-sm text-muted-foreground">#{item.sequenceNumber}</p>
                    </div>
                    <button
                      onClick={() => deleteResearch(item.id)}
                      className="p-2 hover:bg-destructive/10 rounded-lg transition-colors text-destructive"
                      title="حذف البحث"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex gap-2 mb-4 text-xs text-muted-foreground">
                    <span className="bg-muted px-2 py-1 rounded">{item.pages} صفحات</span>
                    <span className="bg-muted px-2 py-1 rounded">{item.level}</span>
                  </div>
                  <div className="space-y-2">
                    <button
                      onClick={() => exportAsJSON(item)}
                      className="w-full bg-primary/10 text-primary py-2 rounded-lg text-sm font-semibold hover:bg-primary/20 transition-colors"
                    >
                      تصدير JSON
                    </button>
                    <button
                      onClick={() => copyToClipboard(item.research)}
                      className="w-full bg-secondary/10 text-secondary py-2 rounded-lg text-sm font-semibold hover:bg-secondary/20 transition-colors"
                    >
                      نسخ البحث
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

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
