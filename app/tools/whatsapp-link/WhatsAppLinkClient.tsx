"use client"

import { useState } from "react"
import Link from "next/link"

export default function WhatsAppLinkClient() {
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")

  const generateLink = () => {
    if (!phone) return

    // Remove any non-digit characters
    const cleanPhone = phone.replace(/\D/g, "")

    // Create WhatsApp link
    const encodedMessage = encodeURIComponent(message)
    const link = `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ""}`

    setGeneratedLink(link)
  }

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink)
    alert("تم نسخ الرابط!")
  }

  const openLink = () => {
    window.open(generatedLink, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-green-600">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-green-600">
            الأدوات
          </Link>
          <span className="mx-2">/</span>
          <span className="text-green-600">روابط واتساب</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">مولد روابط واتساب المباشرة</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أنشئ روابط واتساب مباشرة لبدء المحادثات مع عملائك بنقرة واحدة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">إنشاء رابط واتساب</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الهاتف (مع كود الدولة)</label>
                <div className="flex gap-2">
                  <span className="px-4 py-3 bg-gray-100 border-2 border-gray-200 rounded-xl font-semibold">+</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="201234567890"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
                    dir="ltr"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">مثال: 201234567890 (مصر) أو 966512345678 (السعودية)</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">الرسالة الافتراضية (اختياري)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="مرحباً، أريد الاستفسار عن..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none resize-none"
                  rows={4}
                />
              </div>

              <button
                onClick={generateLink}
                disabled={!phone}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                إنشاء الرابط
              </button>
            </div>
          </div>

          {generatedLink && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">الرابط المُنشأ</h2>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-xl break-all text-sm font-mono">{generatedLink}</div>

                <div className="grid md:grid-cols-2 gap-4">
                  <button
                    onClick={copyLink}
                    className="bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all"
                  >
                    نسخ الرابط
                  </button>
                  <button
                    onClick={openLink}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    فتح في واتساب
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">سريع وسهل</h3>
            <p className="text-gray-600 text-sm">إنشاء فوري للروابط</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">رسائل مخصصة</h3>
            <p className="text-gray-600 text-sm">أضف رسالة افتراضية</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">متوافق</h3>
            <p className="text-gray-600 text-sm">يعمل على جميع الأجهزة</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">مجاني تماماً</h3>
            <p className="text-gray-600 text-sm">بدون حدود أو رسوم</p>
          </div>
        </div>
      </div>
    </div>
  )
}
