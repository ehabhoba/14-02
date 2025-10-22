"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function PartnersSection() {
  const partners = [
    {
      name: "Meta Business Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      description: "شريك معتمد في إدارة الإعلانات على فيسبوك وإنستجرام",
      verified: true,
    },
    {
      name: "Google Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "شريك معتمد في إعلانات جوجل وخرائط جوجل",
      verified: true,
    },
    {
      name: "TikTok for Business",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
      description: "شريك في إدارة الحملات الإعلانية على تيك توك",
      verified: true,
    },
    {
      name: "YouTube Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg",
      description: "شريك في إنشاء وإدارة المحتوى على يوتيوب",
      verified: true,
    },
  ]

  const certifications = [
    {
      icon: Award,
      title: "شهادة Meta Blueprint",
      description: "معتمد في التسويق عبر فيسبوك وإنستجرام",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "Google Ads Certified",
      description: "معتمد في إدارة حملات إعلانات جوجل",
      color: "text-green-600",
    },
    {
      icon: Shield,
      title: "شهادة الأمان والخصوصية",
      description: "ملتزمون بحماية بيانات عملائنا",
      color: "text-purple-600",
    },
    {
      icon: TrendingUp,
      title: "100+ مشروع ناجح",
      description: "سجل حافل في تحقيق النتائج",
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            شركاء النجاح
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نفخر بشراكتنا مع أكبر المنصات العالمية لتقديم أفضل الخدمات لعملائنا
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50 group"
            >
              <div className="relative h-16 mb-4 flex items-center justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="object-contain filter group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-center">{partner.name}</h3>
              <p className="text-sm text-muted-foreground text-center mb-3">{partner.description}</p>
              {partner.verified && (
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs font-medium">شريك معتمد</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">الشهادات والاعتمادات</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-border"
              >
                <cert.icon className={`w-12 h-12 mx-auto mb-4 ${cert.color}`} />
                <h4 className="font-bold mb-2">{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">لماذا تثق بنا؟</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">عميل راضي</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">سنوات خبرة</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">تقييم العملاء</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
