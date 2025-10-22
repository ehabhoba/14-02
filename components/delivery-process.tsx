"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, CheckCircle, Clock } from "lucide-react"

export default function DeliveryProcess() {
  const steps = [
    {
      icon: FileText,
      title: "ملفات احترافية",
      description: "تسليم الملفات بصيغ احترافية متعددة (PSD, PNG, AI, PDF)",
    },
    {
      icon: Download,
      title: "تحميل فوري",
      description: "تحميل الملفات مباشرة بعد الانتهاء من التصميم",
    },
    {
      icon: CheckCircle,
      title: "جودة مضمونة",
      description: "جميع الملفات مختبرة وجاهزة للاستخدام الفوري",
    },
    {
      icon: Clock,
      title: "دعم مستمر",
      description: "دعم فني متواصل لأي استفسارات بعد التسليم",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">عملية التسليم</h2>
          <p className="text-xl text-gray-600">كيفية استقبال ملفات التصميم الخاصة بك</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Process */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">الملفات المسلمة</h3>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">ملفات PSD (Photoshop)</h4>
                <p className="text-gray-600">ملفات قابلة للتعديل بالكامل مع جميع الطبقات منظمة بشكل احترافي</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">ملفات PNG (صور)</h4>
                <p className="text-gray-600">صور عالية الجودة بخلفية شفافة جاهزة للاستخدام الفوري</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">ملفات AI (Illustrator)</h4>
                <p className="text-gray-600">ملفات متجهة قابلة للتكبير بدون فقدان الجودة</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">ملفات PDF (دليل الاستخدام)</h4>
                <p className="text-gray-600">دليل شامل يوضح كيفية استخدام الهوية البصرية بشكل صحيح</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                5
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">ملفات JPG (عالية الدقة)</h4>
                <p className="text-gray-600">صور عالية الدقة للطباعة والاستخدام على الويب</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
            <p className="text-gray-700 text-center">
              <span className="font-bold text-purple-600">ملاحظة مهمة:</span> جميع الملفات تُسلم عبر رابط تحميل آمن أو
              بريد إلكتروني مباشرة بعد الانتهاء من التصميم
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
