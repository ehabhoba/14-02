"use client"

import { useState } from "react"
import Link from "next/link"

export default function QRGeneratorClient() {
  const [text, setText] = useState("")
  const [color, setColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#ffffff")
  const [size, setSize] = useState(300)
  const [qrUrl, setQrUrl] = useState("")

  const generateQR = () => {
    if (!text) return
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&color=${color.replace("#", "")}&bgcolor=${bgColor.replace("#", "")}`
    setQrUrl(url)
  }

  const downloadQR = () => {
    if (!qrUrl) return
    const link = document.createElement("a")
    link.href = qrUrl
    link.download = "qr-code.png"
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-teal-600">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <Link href="/tools" className="hover:text-teal-600">
            الأدوات
          </Link>
          <span className="mx-2">/</span>
          <span className="text-teal-600">مولد رموز QR</span>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl mb-6">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">مولد رموز QR المجاني</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أنشئ رموز الاستجابة السريعة احترافية لموقعك، منتجاتك، أو أي محتوى تريد مشاركته
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">إعدادات رمز QR</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">النص أو الرابط</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="أدخل الرابط أو النص الذي تريد تحويله لرمز QR"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-teal-500 focus:outline-none resize-none"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">لون الرمز</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="w-16 h-12 rounded-lg cursor-pointer border-2 border-gray-200"
                    />
                    <input
                      type="text"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">لون الخلفية</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-16 h-12 rounded-lg cursor-pointer border-2 border-gray-200"
                    />
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="flex-1 px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  الحجم: {size}x{size} بكسل
                </label>
                <input
                  type="range"
                  min="200"
                  max="1000"
                  step="50"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <button
                onClick={generateQR}
                disabled={!text}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                إنشاء رمز QR
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">معاينة الرمز</h2>

            <div className="flex flex-col items-center justify-center min-h-[400px]">
              {qrUrl ? (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <img src={qrUrl || "/placeholder.svg"} alt="QR Code" className="max-w-full" />
                  </div>
                  <button
                    onClick={downloadQR}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    تحميل رمز QR
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <svg
                    className="w-32 h-32 mx-auto mb-4 opacity-20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <p className="text-lg">سيظهر رمز QR هنا</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">تخصيص كامل</h3>
            <p className="text-gray-600 text-sm">اختر الألوان والحجم المناسب</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">تحميل فوري</h3>
            <p className="text-gray-600 text-sm">احفظ الرمز بجودة عالية</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">آمن ومجاني</h3>
            <p className="text-gray-600 text-sm">بدون تسجيل أو رسوم</p>
          </div>
        </div>
      </div>
    </div>
  )
}
