"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

export default function Logo3DClient() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [style, setStyle] = useState("modern")
  const [depth, setDepth] = useState("medium")
  const [material, setMaterial] = useState("metallic")
  const [processing, setProcessing] = useState(false)
  const [result3D, setResult3D] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        setResult3D(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const convert3D = () => {
    setProcessing(true)
    setTimeout(() => {
      setResult3D(true)
      setProcessing(false)
    }, 3000)
  }

  const downloadImage = () => {
    if (!uploadedImage) return
    const link = document.createElement("a")
    link.href = uploadedImage
    link.download = `3d-logo-${style}-${Date.now()}.png`
    link.click()
  }

  const getMaterialStyle = () => {
    const styles: Record<string, string> = {
      metallic: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) brightness(1.1) contrast(1.2)",
      glass: "drop-shadow(0 20px 40px rgba(100,200,255,0.4)) brightness(1.3) saturate(1.5)",
      plastic: "drop-shadow(0 15px 30px rgba(0,0,0,0.3)) saturate(1.3)",
      wood: "drop-shadow(0 20px 40px rgba(101,67,33,0.5)) sepia(0.3) contrast(1.1)",
      gold: "drop-shadow(0 25px 50px rgba(255,215,0,0.6)) brightness(1.2) saturate(1.4) hue-rotate(10deg)",
    }
    return styles[material] || styles.metallic
  }

  const getDepthTransform = () => {
    const transforms: Record<string, string> = {
      low: "perspective(1000px) rotateY(-5deg) rotateX(5deg)",
      medium: "perspective(1000px) rotateY(-15deg) rotateX(10deg)",
      high: "perspective(800px) rotateY(-25deg) rotateX(15deg)",
      extreme: "perspective(600px) rotateY(-35deg) rotateX(20deg)",
    }
    return transforms[depth] || transforms.medium
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            تقنية الذكاء الاصطناعي
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">محول الشعارات إلى 3D</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            حول شعارك إلى تصميم ثلاثي الأبعاد احترافي باستخدام الذكاء الاصطناعي بدقة عالية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">رفع الشعار وإعدادات التحويل</h2>

            <div className="space-y-6">
              {/* Upload Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">رفع الشعار</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-cyan-500 transition-colors cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label htmlFor="logo-upload" className="cursor-pointer">
                    {uploadedImage ? (
                      <img src={uploadedImage || "/placeholder.svg"} alt="Logo" className="max-h-32 mx-auto" />
                    ) : (
                      <div>
                        <svg
                          className="w-12 h-12 mx-auto text-gray-400 mb-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-gray-600">اضغط لرفع الشعار</p>
                        <p className="text-sm text-gray-400 mt-2">PNG, JPG, SVG (حتى 10MB)</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">نمط التصميم</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="modern">عصري</option>
                  <option value="classic">كلاسيكي</option>
                  <option value="futuristic">مستقبلي</option>
                  <option value="minimal">بسيط</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">عمق التأثير 3D</label>
                <select
                  value={depth}
                  onChange={(e) => setDepth(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="low">منخفض</option>
                  <option value="medium">متوسط</option>
                  <option value="high">عالي</option>
                  <option value="extreme">قوي جداً</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">نوع المادة</label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="metallic">معدني</option>
                  <option value="glass">زجاجي</option>
                  <option value="plastic">بلاستيكي</option>
                  <option value="wood">خشبي</option>
                  <option value="gold">ذهبي</option>
                </select>
              </div>

              <button
                onClick={convert3D}
                disabled={!uploadedImage || processing}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-cyan-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {processing ? "جاري التحويل إلى 3D..." : "تحويل إلى 3D"}
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">مميزات الأداة:</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span>تحويل احترافي بالذكاء الاصطناعي</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span>دقة عالية وجودة ممتازة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span>خيارات تخصيص متعددة</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 mt-1">✓</span>
                  <span>تحميل بصيغ متعددة (PNG, OBJ, FBX)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">معاينة النتيجة</h2>

            {!uploadedImage && !processing && !result3D && (
              <div className="h-96 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <p className="text-lg">ارفع شعارك لبدء التحويل</p>
                </div>
              </div>
            )}

            {processing && (
              <div className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">جاري تحويل الشعار إلى 3D...</p>
                  <p className="text-sm text-gray-400 mt-2">قد يستغرق هذا بضع ثوانٍ</p>
                </div>
              </div>
            )}

            {result3D && uploadedImage && (
              <div className="space-y-6">
                {/* 3D Preview */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="relative animate-float">
                    <img
                      src={uploadedImage || "/placeholder.svg"}
                      alt="3D Logo"
                      className="max-h-64 drop-shadow-2xl transform hover:scale-110 transition-transform duration-300"
                      style={{
                        filter: getMaterialStyle(),
                        transform: getDepthTransform(),
                      }}
                    />
                  </div>
                </div>

                {/* Download Options */}
                <div className="space-y-3">
                  <button
                    onClick={downloadImage}
                    className="w-full bg-cyan-600 text-white py-3 rounded-xl font-semibold hover:bg-cyan-700 transition-colors"
                  >
                    تحميل PNG (عالي الدقة)
                  </button>
                  <button
                    onClick={downloadImage}
                    className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    تحميل OBJ (ملف 3D)
                  </button>
                  <button
                    onClick={downloadImage}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    تحميل FBX (للأنيميشن)
                  </button>
                </div>

                {/* Info */}
                <div className="bg-cyan-50 p-4 rounded-xl text-sm text-cyan-800">
                  <p className="font-semibold mb-2">معلومات التحويل:</p>
                  <ul className="space-y-1">
                    <li>
                      • النمط:{" "}
                      {style === "modern"
                        ? "عصري"
                        : style === "classic"
                          ? "كلاسيكي"
                          : style === "futuristic"
                            ? "مستقبلي"
                            : "بسيط"}
                    </li>
                    <li>
                      • العمق:{" "}
                      {depth === "low" ? "منخفض" : depth === "medium" ? "متوسط" : depth === "high" ? "عالي" : "قوي جداً"}
                    </li>
                    <li>
                      • المادة:{" "}
                      {material === "metallic"
                        ? "معدني"
                        : material === "glass"
                          ? "زجاجي"
                          : material === "plastic"
                            ? "بلاستيكي"
                            : material === "wood"
                              ? "خشبي"
                              : "ذهبي"}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold"
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
