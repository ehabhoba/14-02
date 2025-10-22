"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const portfolioItems = [
  // Main Services (3 images)
  {
    id: 1,
    title: "خدمة تصميم الشعارات",
    category: "الخدمات الرئيسية",
    image: "https://ibb.co/JWDHHnwt",
    description: "تصميم شعارات احترافية وفريدة لعلامتك التجارية",
  },
  {
    id: 2,
    title: "خدمة الهوية البصرية",
    category: "الخدمات الرئيسية",
    image: "https://ibb.co/SwVxSCCP",
    description: "هوية بصرية متكاملة تعكس قيم علامتك",
  },
  {
    id: 3,
    title: "خدمة الإعلانات الممولة",
    category: "الخدمات الرئيسية",
    image: "https://ibb.co/pvfTYBKS",
    description: "حملات إعلانية ممولة احترافية وفعالة",
  },

  // Logo Designs (10 images)
  {
    id: 4,
    title: "شعار احترافي 1",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/RGTdgycy",
    description: "شعار بتصميم عصري واحترافي",
  },
  {
    id: 5,
    title: "شعار احترافي 2",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/5XR5LzB1",
    description: "شعار متميز يعكس هوية العلامة",
  },
  {
    id: 6,
    title: "شعار احترافي 3",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/1JqM81jt",
    description: "تصميم شعار مبتكر وجذاب",
  },
  {
    id: 7,
    title: "شعار احترافي 4",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/mVh0W3Nt",
    description: "شعار عصري يعكس قيم العلامة",
  },
  {
    id: 8,
    title: "شعار احترافي 5",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/tPKwStWH",
    description: "شعار احترافي بتفاصيل دقيقة",
  },
  {
    id: 9,
    title: "شعار احترافي 6",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/PvKT9gJB",
    description: "تصميم شعار فريد ومتميز",
  },
  {
    id: 10,
    title: "شعار احترافي 7",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/HT5kCXsz",
    description: "شعار بتصميم احترافي وحديث",
  },
  {
    id: 11,
    title: "شعار احترافي 8",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/XkXx96cd",
    description: "شعار متميز وفريد من نوعه",
  },
  {
    id: 12,
    title: "شعار احترافي 9",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/xSzKhTZr",
    description: "تصميم شعار احترافي وعصري",
  },
  {
    id: 13,
    title: "شعار احترافي 10",
    category: "تصاميم الشعارات",
    image: "https://ibb.co/zD0g3VV",
    description: "شعار بتصميم فريد وجذاب",
  },

  // Ad & Print Designs (25 images)
  {
    id: 14,
    title: "تصميم إعلان 1",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/HfGpM9fq",
    description: "تصميم إعلان احترافي للعملاء",
  },
  {
    id: 15,
    title: "تصميم إعلان 2",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/hxyLgx7q",
    description: "إعلان مبتكر وجذاب",
  },
  {
    id: 16,
    title: "تصميم إعلان 3",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/cSPYGpPh",
    description: "تصميم إعلان احترافي وفعال",
  },
  {
    id: 17,
    title: "تصميم إعلان 4",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/vvcL23C3",
    description: "إعلان بتصميم عصري",
  },
  {
    id: 18,
    title: "تصميم إعلان 5",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/Xf6CFsRs",
    description: "تصميم إعلان متميز",
  },
  {
    id: 19,
    title: "تصميم إعلان 6",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/ZzH11gf1",
    description: "إعلان احترافي وجذاب",
  },
  {
    id: 20,
    title: "تصميم إعلان 7",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/mCQgtHh9",
    description: "تصميم إعلان فريد",
  },
  {
    id: 21,
    title: "تصميم إعلان 8",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/Mx4LDgrP",
    description: "إعلان بتصميم احترافي",
  },
  {
    id: 22,
    title: "تصميم إعلان 9",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/SwtJDpth",
    description: "تصميم إعلان عصري",
  },
  {
    id: 23,
    title: "تصميم إعلان 10",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/hTp2DQW",
    description: "إعلان متميز وفعال",
  },
  {
    id: 24,
    title: "تصميم إعلان 11",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/GhPDSWh",
    description: "تصميم إعلان احترافي",
  },
  {
    id: 25,
    title: "تصميم إعلان 12",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/21Cty0wc",
    description: "إعلان بتصميم جذاب",
  },
  {
    id: 26,
    title: "تصميم إعلان 13",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/Xfsh7FDx",
    description: "تصميم إعلان فريد",
  },
  {
    id: 27,
    title: "تصميم إعلان 14",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/f58nRZY",
    description: "إعلان احترافي وعصري",
  },
  {
    id: 28,
    title: "تصميم إعلان 15",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/k6g8hXBX",
    description: "تصميم إعلان متميز",
  },
  {
    id: 29,
    title: "تصميم إعلان 16",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/Xf4Mkf2c",
    description: "إعلان بتصميم احترافي",
  },
  {
    id: 30,
    title: "تصميم إعلان 17",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/qL4zsRm5",
    description: "تصميم إعلان جذاب",
  },
  {
    id: 31,
    title: "تصميم إعلان 18",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/nNSzqjFr",
    description: "إعلان احترافي وفعال",
  },
  {
    id: 32,
    title: "تصميم إعلان 19",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/RTmRtkfn",
    description: "تصميم إعلان عصري",
  },
  {
    id: 33,
    title: "تصميم إعلان 20",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/KzhrBXy7",
    description: "إعلان متميز وفريد",
  },
  {
    id: 34,
    title: "تصميم إعلان 21",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/JW6XhX8q",
    description: "تصميم إعلان احترافي",
  },
  {
    id: 35,
    title: "تصميم إعلان 22",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/Ps6rDp9L",
    description: "إعلان بتصميم جذاب",
  },
  {
    id: 36,
    title: "تصميم إعلان 23",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/mVjyDtn6",
    description: "تصميم إعلان فريد",
  },
  {
    id: 37,
    title: "تصميم إعلان 24",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/RTvpkvMX",
    description: "إعلان احترافي وعصري",
  },
  {
    id: 38,
    title: "تصميم إعلان 25",
    category: "الإعلانات والمطبوعات",
    image: "https://ibb.co/p6P505cN",
    description: "تصميم إعلان متميز",
  },
]

const categories = ["الكل", "الخدمات الرئيسية", "تصاميم الشعارات", "الإعلانات والمطبوعات"]

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [selectedImage, setSelectedImage] = useState<(typeof portfolioItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "الكل" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            معرض <span className="text-primary">أعمالنا</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف مجموعة من التصاميم الاحترافية والشعارات المبتكرة التي أنجزناها لعملائنا من مختلف القطاعات
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`transition-all duration-200 ${
                selectedCategory === category ? "bg-primary text-primary-foreground" : "hover:border-primary"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative overflow-hidden rounded-xl bg-muted cursor-pointer h-64 sm:h-72 card-hover"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                {item.category}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors active:scale-95"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-6 bg-background">
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedImage.title}</h3>
                <p className="text-muted-foreground mb-4">{selectedImage.description}</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">هل أعجبتك أعمالنا؟</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            تواصل معنا الآن واحصل على تصميم احترافي لعلامتك التجارية بأسعار تنافسية
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            اطلب تصميمك الآن
          </Button>
        </div>
      </div>
    </section>
  )
}
