"use client"

import { useState } from "react"
import Link from "next/link"

export default function NFTCertificateClient() {
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [date, setDate] = useState("")
  const [organization, setOrganization] = useState("إيهاب جي إم")
  const [certificateId, setCertificateId] = useState("")

  const generateCertificate = () => {
    const id = `NFT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    setCertificateId(id)
  }

  const downloadCertificate = () => {
    // In a real implementation, this would generate an actual certificate image
    alert("سيتم تحميل الشهادة قريباً. هذه نسخة تجريبية.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            تقنية البلوكشين
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">مولد شهادات NFT الرقمية</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أنشئ شهادات رقمية موثقة على البلوكشين للدورات والشهادات الأكاديمية في مصر والشرق الأوسط
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">بيانات الشهادة</h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">اسم الحاصل على الشهادة</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أحمد محمد"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">اسم الدورة أو الشهادة</label>
                <input
                  type="text"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  placeholder="دورة التسويق الرقمي المتقدم"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ الإصدار</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">الجهة المانحة</label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="إيهاب جي إم"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </div>

              <button
                onClick={generateCertificate}
                disabled={!name || !course || !date}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                إنشاء شهادة NFT
              </button>
            </div>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">مميزات شهادات NFT:</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span>موثقة على البلوكشين ولا يمكن تزويرها</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span>قابلة للتحقق من صحتها في أي وقت</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span>تصميم احترافي قابل للتخصيص</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">✓</span>
                  <span>معترف بها دولياً</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">معاينة الشهادة</h2>

            {!certificateId ? (
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  <p className="text-lg">ستظهر الشهادة هنا بعد الإنشاء</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Certificate Preview */}
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-xl border-4 border-indigo-300">
                  <div className="text-center space-y-4">
                    <div className="text-indigo-600 font-bold text-sm">شهادة NFT رقمية</div>
                    <h3 className="text-3xl font-bold text-gray-900">{organization}</h3>
                    <div className="py-6">
                      <p className="text-gray-600 mb-2">تشهد بأن</p>
                      <p className="text-2xl font-bold text-gray-900 mb-4">{name}</p>
                      <p className="text-gray-600 mb-2">قد أتم بنجاح</p>
                      <p className="text-xl font-semibold text-indigo-600">{course}</p>
                    </div>
                    <div className="pt-4 border-t border-indigo-200">
                      <p className="text-sm text-gray-600">تاريخ الإصدار: {date}</p>
                      <p className="text-xs text-gray-500 mt-2 font-mono">ID: {certificateId}</p>
                    </div>
                  </div>
                </div>

                {/* Blockchain Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">معلومات البلوكشين</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">الشبكة:</span>
                      <span className="font-semibold">Polygon</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">الحالة:</span>
                      <span className="text-green-600 font-semibold">موثق ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">رقم الكتلة:</span>
                      <span className="font-mono text-xs">
                        0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={downloadCertificate}
                  className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                >
                  تحميل الشهادة
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold"
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
