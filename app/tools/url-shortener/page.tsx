"use client"
import { useState, useEffect } from "react"

export default function URLShortenerPage() {
  const [url, setUrl] = useState("")
  const [customSlug, setCustomSlug] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [qrCode, setQrCode] = useState("")
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<any[]>([])

  useEffect(() => {
    const savedHistory = localStorage.getItem("url-shortener-history")
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const handleShorten = async () => {
    if (!url) return

    setLoading(true)

    try {
      const response = await fetch("/api/shorten-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, customSlug }),
      })

      const data = await response.json()

      if (response.ok) {
        setShortUrl(data.shortUrl)
        setQrCode(data.qrCode)

        const newHistory = [data, ...history].slice(0, 10) // Keep last 10
        setHistory(newHistory)
        localStorage.setItem("url-shortener-history", JSON.stringify(newHistory))
      } else {
        alert(`حدث خطأ: ${data.error}`)
      }
    } catch (error) {
      console.error("[v0] Error shortening URL:", error)
      alert("حدث خطأ أثناء اختصار الرابط")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("تم نسخ الرابط!")
  }

  const downloadQR = () => {
    if (!qrCode) return
    const link = document.createElement("a")
    link.href = qrCode
    link.download = `qr-code-${customSlug || "short-url"}.png`
    link.click()
  }

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">🔗</div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">اختصار الروابط</h1>
          <p className="text-xl text-gray-600">اختصر روابطك الطويلة وتتبع النقرات والإحصائيات بسهولة</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">الرابط الطويل</label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/very/long/url/that/needs/shortening"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">رابط مخصص (اختياري)</label>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">ehabgm.online/</span>
                <input
                  type="text"
                  value={customSlug}
                  onChange={(e) => setCustomSlug(e.target.value)}
                  placeholder="custom-link"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              onClick={handleShorten}
              disabled={!url || loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "جاري الاختصار..." : "اختصر الرابط"}
            </button>
          </div>

          {shortUrl && (
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">الرابط المختصر</h3>
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="text"
                  value={shortUrl}
                  readOnly
                  className="flex-1 px-4 py-3 bg-white border-2 border-purple-200 rounded-xl font-mono text-purple-600"
                />
                <button
                  onClick={() => copyToClipboard(shortUrl)}
                  className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors"
                >
                  نسخ
                </button>
              </div>

              {qrCode && (
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-700 mb-3">رمز QR</p>
                  <img src={qrCode || "/placeholder.svg"} alt="QR Code" className="mx-auto rounded-xl shadow-lg mb-3" />
                  <button
                    onClick={downloadQR}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                  >
                    تحميل رمز QR
                  </button>
                </div>
              )}
            </div>
          )}

          {history.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">الروابط السابقة</h3>
              <div className="space-y-3">
                {history.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-mono text-purple-600 truncate">{item.shortUrl}</p>
                      <p className="text-xs text-gray-500 truncate">{item.originalUrl}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(item.shortUrl)}
                      className="ml-3 px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-200 transition-colors"
                    >
                      نسخ
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { icon: "📊", title: "تتبع النقرات", desc: "احصائيات مفصلة" },
            { icon: "🎨", title: "روابط مخصصة", desc: "اختر اسمك الخاص" },
            { icon: "📱", title: "QR Code", desc: "رمز استجابة تلقائي" },
            { icon: "🔒", title: "آمن وموثوق", desc: "حماية كاملة" },
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
