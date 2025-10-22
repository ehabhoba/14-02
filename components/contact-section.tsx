"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            تواصل معنا
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            جاهزون لبدء <span className="text-primary">مشروعك</span>؟
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            تواصل معنا الآن واحصل على استشارة مجانية لمشروعك. نحن هنا لمساعدتك في تحقيق أهدافك التسويقية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="border-0 bg-card shadow-lg">
            <CardHeader className="px-4 sm:px-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">احجز استشارتك المجانية</CardTitle>
            </CardHeader>

            <CardContent className="px-4 sm:px-6">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">الاسم الكامل *</label>
                    <Input
                      type="text"
                      placeholder="أدخل اسمك الكامل"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-input h-12 sm:h-11 text-base touch-manipulation"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">رقم الهاتف *</label>
                    <Input
                      type="tel"
                      placeholder="01xxxxxxxxx"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="bg-input h-12 sm:h-11 text-base touch-manipulation"
                      inputMode="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">البريد الإلكتروني *</label>
                  <Input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="bg-input h-12 sm:h-11 text-base touch-manipulation"
                    inputMode="email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">الخدمة المطلوبة</label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-input h-12 sm:h-11 text-base touch-manipulation">
                      <SelectValue placeholder="اختر الخدمة المطلوبة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ads">إدارة الحملات الإعلانية</SelectItem>
                      <SelectItem value="branding">تصميم الهوية البصرية</SelectItem>
                      <SelectItem value="website">تصميم وتطوير المواقع</SelectItem>
                      <SelectItem value="seo">تحسين محركات البحث SEO</SelectItem>
                      <SelectItem value="social">إدارة السوشيال ميديا</SelectItem>
                      <SelectItem value="analytics">التحليل والتقارير</SelectItem>
                      <SelectItem value="consultation">استشارة عامة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">تفاصيل المشروع</label>
                  <Textarea
                    placeholder="أخبرنا عن مشروعك وأهدافك التسويقية..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                    className="bg-input text-base touch-manipulation resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 h-14 text-base font-bold shadow-lg active:scale-95 transition-transform touch-manipulation"
                >
                  <Send className="w-5 h-5 ml-2" />
                  إرسال الطلب
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="border-0 bg-card active:scale-[0.98] transition-transform touch-manipulation">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-base sm:text-lg">العنوان</h4>
                      <p className="text-muted-foreground text-sm sm:text-base">حلوان، القاهرة، مصر</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card active:scale-[0.98] transition-transform touch-manipulation">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-base sm:text-lg">الهاتف</h4>
                      <a
                        href="tel:+201022679250"
                        className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors"
                      >
                        01022679250
                      </a>
                      <p className="text-xs sm:text-sm text-primary">واتساب متاح</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card active:scale-[0.98] transition-transform touch-manipulation">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-base sm:text-lg">البريد الإلكتروني</h4>
                      <a
                        href="mailto:info@ehabgm.online"
                        className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors break-all"
                      >
                        info@ehabgm.online
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card active:scale-[0.98] transition-transform touch-manipulation">
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 text-base sm:text-lg">ساعات العمل</h4>
                      <p className="text-muted-foreground text-sm sm:text-base">السبت - الخميس: 9 ص - 6 م</p>
                      <p className="text-xs sm:text-sm text-primary">دعم فني 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="border-0 bg-card overflow-hidden">
              <div className="h-48 sm:h-64 bg-muted flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <p className="text-foreground font-medium text-base sm:text-lg">خريطة الموقع</p>
                  <p className="text-sm text-muted-foreground">حلوان، القاهرة</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
